import axios, {AxiosError} from 'axios';
import Router from 'next/router';
import {parseCookies, setCookie} from 'nookies'
import { signOut } from '../context/AuthContext';

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue = [];

interface AxiosErrorResponse {
    code?: string;
  }

export const api = axios.create({
    baseURL: 'http://164.92.80.187:8000/',
    headers: { 
        Authorization: `Bearer ${cookies['CL.token']}`
    }
    /* http://164.92.80.187:8000/*/
    /* http://localhost:3333*/
});

api.interceptors.response.use(response => {
    return response;
}, (error: AxiosError<AxiosErrorResponse>) => {
    if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
            cookies = parseCookies();
            const {"CL.refreshToken" : refreshToken} = cookies;
            const originalConfig = error.config;

           if (!isRefreshing){
            isRefreshing = true;
            
            api.post('/refresh', {
                refreshToken,

            }).then(response => {
                const {token} = response.data;

                setCookie(undefined, "CL.token", token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                  });
                setCookie(undefined, "CL.refreshToken", response.data.refreshToken, {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                });

                api.defaults.headers['Authorization'] = `Bearer ${token}`;

                failedRequestsQueue.forEach(request => request.onSuccess(token));
                failedRequestsQueue = [];
                }).catch(err => {
                    failedRequestsQueue.forEach(request => request.onFailure(err));
                    failedRequestsQueue = [];
                }).finally(() => {
                    isRefreshing = false;
                })
            }

            return new Promise((resolve, reject) => {
                failedRequestsQueue.push({
                    onSuccess: (token: string) => {
                        originalConfig.headers['Authorization'] = `Bearer ${token}`;
                        resolve(api(originalConfig));
                    },
                    onFailure: (err: AxiosError) => {
                        reject(err);
                    }
                })
            });

        } else {
            signOut();
        }
    }
    return Promise.reject(error);
});
