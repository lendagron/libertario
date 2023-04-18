 import React from "react";
 import Head from "next/head";
 import Changepswd from '../components/changepswd/Changepswd';
 import { HeaderLogged } from '../components/headerLogged/HeaderLogged';


 export default function trocar(){
       return (
           <>
             <Head>
                <title>Clube da liberdade | Mudar Senha</title>
             </Head>
             <HeaderLogged isPainel={false} />
             <Changepswd />
           </>
       );
 }
 




