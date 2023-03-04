import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Novelia</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className={styles.fakenav}></p>
        <nav className={styles.top_navigation}>
          <div className={styles.navigation}>
            <div className={styles.navobjl}>
              <FontAwesomeIcon
                icon={faBars}
                width="28"
                className={styles.nbar}
              />
            </div>
            <div className={styles.navobjc}>
              <p className={styles.Logo}>Novelia</p>
            </div>
            <div className={styles.navobjr}>
              <center>
                <a href="/login">
                  <button className={styles.nv_btn}>
                    ログイン
                    <FontAwesomeIcon icon={faDoorOpen} width="16" />
                  </button>
                </a>
                <a href="/reg">
                  <button className={styles.nv_btn}>
                    新規登録
                    <FontAwesomeIcon icon={faUser} width="12" />
                  </button>
                </a>
              </center>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}
