import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/About.module.css";
import Nav from "@/components/_navigation";

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
      <motion.div
        initial={{ opacity: 0 }} // 初期状態
        animate={{ opacity: 1 }} // マウント時
        exit={{ opacity: 0 }} // アンマウント時
      >
        <Nav />
        <main className={styles.main}>
          <div className={styles.card}>
            <h1>
              <span style={{ color: "#0390fc" }}>Q</span>What's Novelia?
            </h1>
          </div>
          <div className={styles.card}>
            <p>
              <span style={{ color: "#f52a2a" }}>A</span>Novelia is The Platform
              which can share your Works.
            </p>
          </div>
        </main>
      </motion.div>
    </>
  );
}
