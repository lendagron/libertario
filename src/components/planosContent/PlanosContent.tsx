import Link from "next/link";
import styles from "./planosContent.module.scss";

export default function PlanosContent() {
  return (
    <div className={styles.planosWrapper}>
      <h2>Compare os Planos</h2>
      <div className={styles.planosContainer}>
        <div className={styles.authorContainer}>
          <p>Mises</p>
          <span>GRÁTIS</span>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Contêm anúncios</li>
            <li>
              <s>Grupos Exclusivos</s>
            </li>
            <li>
              <s>Aplicativo Exclusivo</s>
            </li>
            <li>
              <s>Aulas Presenciais</s>
            </li>
            <li>
              <s>Eventos Gratuitos</s>
            </li>
            <li>
              <s>Um Novo Curso Todo Mês</s>
            </li>
            <li>
              <s>Acesso Antecipado aos Conteúdos</s>
            </li>
          </ul>
          <Link href={"/cadastro_pagamento"}>Assine agora</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Rothbard</p>
          <div>
            <span>R$ 49,90</span>
            <span>/mês</span>
          </div>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Sem anúncios</li>
            <li>
              <s>Grupos Exclusivos</s>
            </li>
            <li>Aplicativo Exclusivo</li>
            <li>Aulas Presenciais</li>
            <li>
              <s>Eventos Gratuitos</s>
            </li>
            <li>
              <s>Um Novo Curso Todo Mês</s>
            </li>
            <li>
              <s>Acesso Antecipado aos Conteúdos</s>
            </li>
          </ul>
          <Link href={"/cadastro_pagamento"}>Assine agora</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Hoppe</p>
          <div>
            <span>R$ 69,90</span>
            <span>/mês</span>
          </div>
          <ul>
            <li>Aulões e Tira Dúvidas</li>
            <li>Desconto com Parceiros</li>
            <li>Acesso a alguns Cursos</li>
            <li>Sem anúncios</li>
            <li>Grupos Exclusivos</li>
            <li>Aplicativo Exclusivo</li>
            <li>Aulas Presenciais</li>
            <li>Eventos Gratuitos</li>
            <li>Um Novo Curso Todo Mês</li>
            <li>Acesso Antecipado aos Conteúdos</li>
          </ul>
          <Link href={"/cadastro_pagamento"}>Assine agora</Link>
        </div>
      </div>
      <p>
        Também na opção de pagamento anual. Aceitamos cartões, boleto e
        criptomoedas.
      </p>
    </div>
  );
}
