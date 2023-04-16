 import React from "react";
 import Head from "next/head";
 import Changepswd from '../components/changepswd/Changepswd.tsx';
 import { HeaderLogged } from '../components/headerLogged/HeaderLogged.tsx';


 export default function trocar(){
       return (
           <>
             <Head>
                <title>Clube da liberdade | Mudar Senha</title>
             </Head>
             <HeaderLogged hasBack={true} />
             <Changepswd />
           </>
       );
 }
 




