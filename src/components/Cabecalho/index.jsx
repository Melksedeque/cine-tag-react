import { Link } from "react-router-dom";
import logo from "public/imagens/logo.png";
import styles from "./Cabecalho.module.css";
import MenuLink from "@/components/MenuLink";

export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo do CineTag" />
      </Link>
      <nav>
        <MenuLink url="./">Home</MenuLink>
        <MenuLink url="./favoritos">Favoritos</MenuLink>
      </nav>
    </header>
  );
}
