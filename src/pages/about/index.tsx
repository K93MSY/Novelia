import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/About.module.css";
import Nav from "../_navigation";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Novelia|About</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className={styles.fakenav}></p>
      <Nav />
      <main className={styles.main}>
        <div className={styles.card}>
            <h1><span style={{color:"#0390fc"}}>Q</span>What's Novelia?</h1>
        </div>
      </main>
    </>
  );
}
