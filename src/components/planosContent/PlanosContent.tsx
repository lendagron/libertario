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
          </ul>
          <Link href={"/cadastroMises"}>Assine Agora</Link>
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
          </ul>
          <Link href={"/cadastroHoppe"}>Assine Agora</Link>
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

          <Link href={"/cadastroKonkin"} className={styles.disabled}>
            Em Breve
          </Link>
        </div>
      </div>
      <p>
        Também na opção de pagamento anual. Iremos adicionar pagamento com
        boleto e criptomoedas em breve.
      </p>
    </div>
  );
}
