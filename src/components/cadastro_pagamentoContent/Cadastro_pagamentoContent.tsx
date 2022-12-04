import Link from "next/link";
import React, { useState } from "react";
import styles from "./cadastro_pagamentoContent.module.scss";
import ModalPagamento from "./modalPagamento/ModalPagamento";

export default function Cadastro_pagamentoContent() {
  const [modalPagamento, setModalPagamento] = useState(false);

  function handlePagamento() {
    setModalPagamento(true);
  }

  return (
    <div className={styles.wrapper}>
      <div>cadastro_pagamentoContent</div>

      {modalPagamento ? (
        <ModalPagamento />
      ) : (
        <button onClick={handlePagamento}>Pagamento</button>
      )}
    </div>
  );
}
