import React, { FormEvent } from "react";
import Image from 'next/image'
import styles from './changepswd.module.scss';
import FormLogo from '../../../public/images/formlogo.png';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ClipLoader } from "react-spinners";



//TODO: arrumar o handleSubmit. Add a função do context
//fixed 
//add: cliploader
export default function Changepswd(){
  const [password , setPassword] = useState("");
  const { change } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [signInError, setSignInError] = useState<string>("");
    
  async function handleSubmit(event: FormEvent){
        event.preventDefault();


    try{
        await change({password: password});
    } catch (error){
       console.error("falha ao enviar solicitaçao para mudar a senha", error);
    }  
       
    
  }
    
    return (
       <main>
          <div className={styles.changecontainer}>
              <h1>Mudar Senha</h1>
              <form onSubmit={handleSubmit}>
                 <Image src={FormLogo} alt='logo mudar senha' width={70} height={70}/>
                 <label>Senha Atual: </label>
                 <input type="password" placeholder='senha atual' onChange={(e) => setPassword(e.target.value)}/>
                 <label>Nova Senha: </label>
                  <input type="password" placeholder='nova senha' onChange={(e) => setPassword(e.target.value)}/>
                 <label>Confirmar a Nova Senha: </label>
                  <input type="password" placeholder='senha' onChange={(e) => setPassword(e.target.value)}/>
                 <button type='submit'>Confirmar</button>
                  {isLoading && (
                  <ClipLoader
                   color={"#f3bf22"}
                   loading={isLoading}
                   size={50}
                   className={styles.spinner}
                 />
                 )}
                    {signInError && <p>{signInError}</p>}
              </form>
          </div>
       </main>
    );
} 
