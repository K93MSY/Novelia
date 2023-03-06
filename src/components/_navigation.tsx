import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDoorOpen,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/nav.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  const [age, setAge] = useState(-280);

  const NavH = () => {
    setAge(-280);
  };

  const NavS = () => {
    setAge(0);
  };

  return (
    <>
      <p className={styles.fakenav}></p>
      <nav className={styles.top_navigation}>
        <div className={styles.navigation}>
          <div className={styles.navobjl}>
            <FontAwesomeIcon icon={faBars} width="28" className={styles.nbar} onClick={NavS}/>
          </div>
          <div className={styles.navobjc}>
            <center>
              <a href="/" className={styles.Logo}>
                Novelia
              </a>
            </center>
          </div>
          <div className={styles.navobjr}>
            <center>
              <div className={styles.hiden}>
                <a href="/signin">
                  <button className={styles.nv_btn}>
                    ログイン
                    <FontAwesomeIcon icon={faDoorOpen} width="16" />
                  </button>
                </a>
                <a href="/signup">
                  <button className={styles.nv_btn}>
                    新規登録
                    <FontAwesomeIcon icon={faUser} width="12" />
                  </button>
                </a>
              </div>
            </center>
          </div>
        </div>
      </nav>
      <nav className={styles.side} style={{ left: age }}>
        <div className={styles.sidegrid}>
          <div className={styles.navobjl}>
            <FontAwesomeIcon
              icon={faXmark}
              width="28"
              className={styles.nbar}
              onClick={NavH}
            />
          </div>
          <div>
            <center>
              <a href="/about">
                <button className={styles.sidbtns}>Noveliaについて</button>
              </a>
            </center>
          </div>
        </div>
      </nav>
    </>
  );
}
