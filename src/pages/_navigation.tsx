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
    console.log("Hide!");
    setAge(-280);
  };

  const NavS = () => {
    console.log("Show!");
    setAge(0);
  };

  /*
  const [ leftNavpos, tmpleftNavpos ] = useState(0);

  const NavH = () =>{
    console.log("clk")
    tmpleftNavpos(0);
  }

  const NavS = () =>{
    console.log("clk")
    tmpleftNavpos(-260);
  }*/

  return (
    <>
      <p className={styles.fakenav}></p>
      <nav className={styles.top_navigation}>
        <div className={styles.navigation}>
          <div className={styles.navobjl} onClick={NavS}>
            <FontAwesomeIcon icon={faBars} width="28" className={styles.nbar} />
          </div>
          <div className={styles.navobjc}>
            <p className={styles.Logo}>Novelia</p>
          </div>
          <div className={styles.navobjr}>
            <center>
              <div className={styles.hiden}>
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
              </div>
            </center>
          </div>
        </div>
      </nav>
      <nav className={styles.side} style={{ left: age }}>
        <div className={styles.navobjl} onClick={NavH}>
          <FontAwesomeIcon icon={faXmark} width="28" className={styles.nbar} />
        </div>
      </nav>
    </>
  );
}
