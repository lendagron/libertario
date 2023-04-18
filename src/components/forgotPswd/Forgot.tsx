import React from "react";
import styles from './forgot.module.scss';
import FormLogo from "../../../public/images/formlogo.png"
import Image from "next/image";
import { FormEvent, useContext , useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Link from "next/link";
import { ClipLoader  } from "react-spinners";

export default function Forgot(){
const [email , setEmail] = useState("");
const { recover } = useContext(AuthContext);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [signInError, setSignInError] = useState<string>("");


async function handleSubmit(event: FormEvent) {
    event.preventDefault();

try {
      await recover({ email: email });
    } catch (error) {
        console.error("Falha ao enviar solicitação",error);
    }
}

    return(
        <main>
            <div className={styles.container}>
                <h1>Recuperar Usuário ou Senha</h1>
                <form onSubmit={handleSubmit}>
                  <Image src={FormLogo} alt='Logo de login' width={75} height={75} />
                  <label>Digite seu email para a recuperação:</label>
                  <input  type='text' placeholder='E-mail' alt='Imagem de login' onChange={(e) => setEmail(e.target.value)} />
                  <button type='submit'>Enviar Email de Recuperação</button>
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
                <div>
                    <Link href={"javascript:history.back()"}>Voltar</Link>
                </div>
            </div>
        </main>
    );
}


