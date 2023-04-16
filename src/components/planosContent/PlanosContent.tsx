
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styles from "./planosContent.module.scss";

export default function PlanosContent() {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div className={styles.planosWrapper}>
      <h2>Compare os Planos</h2>
      <div className={styles.planosContainer}>
        <div className={styles.authorContainer}>
          <p>Mises</p>
          <span>GRÁTIS</span>
          <ul>
            <li>Cursos introdutórios</li>
            {/* <li>Desconto com Parceiros</li>
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
            </li> */}
          </ul>
          <Link href={"/cadastro"}>Assine agora</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Hoppe</p>
          <div>
            <span>R$ 49,90</span>
            <span>/mês</span>
          </div>
          <ul>
            <li>Todos os cursos</li>
            <li>
              Conteúdos introdutórios referente ao livro exclusivo lançado no
              Plano Konkin
            </li>
            {/* <li>Acesso a alguns Cursos</li>
            <li>Sem anúncios</li>
            <li>Grupos Exclusivos</li>
            <li>Aplicativo Exclusivo</li>
            <li>Aulas Presenciais</li>
            <li>Eventos Gratuitos</li>
            <li>Um Novo Curso Todo Mês</li>
            <li>Acesso Antecipado aos Conteúdos</li> */}
          </ul>
          <Link href={"/planos"}>Lançamento dia 5 de Maio</Link>
        </div>
        <div className={styles.authorContainer}>
          <p>Konkin</p>
          <div>
            <span>R$ 89,90</span>
            <span>/mês</span>
          </div>
          <ul>
            <li>Um livro capa dura e exclusivo por mês</li>
            <li>
              Desconto exclusivo de <b>25%</b> em qualquer livro e de <b>30%</b>{" "}
              nos combos
            </li>
            <li>Conteúdos referente ao livro exclusivo lançado</li>
            <li>
              Conteúdo sobre design da obra, falando sobre os motivos das
              escolhas
            </li>
            <li>
              <b>10%</b> de cashback em LUT para os primeiros <b>100</b> membros
            </li>
            <li>Todos os cursos</li>
            <li>Brindes</li>
            <li>Eventos Gratuitos</li>
            <li>Marca página do tema do livro</li>
          </ul>
          <Link href={"/planos"}>Lançamento dia 5 de Maio</Link>
        </div>
      </div>
      <p>
        Também na opção de pagamento anual. Iremos adicionar pagamento com
        boleto e criptomoedas também.
      </p>
    </div>
  );
}

