import React from 'react'
import Head from 'next/head'
import { Header } from '../components/header/Header'
import NewPswd from '../components/newpswd/NewPswd'

export default function redefinir() {
  return (
    <>

        <Head>
            <title>Clube da Liberdade | Insira sua nova Senha</title>
        </Head>
        <Header />
        <NewPswd />
    </>
  )
}
