import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

import styles from "@/styles/card.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Card(props: any) {
  const [scard, setScard] = useState("none");
  const [cardicon, setCardicon] = useState(
    <FontAwesomeIcon
      icon={faChevronDown}
      width="28"
      className={styles.opencard}
    />
  );
  const OpCard = (e: any) => {
    if (scard == "block") {
      setScard("none");
      setCardicon(
        <FontAwesomeIcon
          icon={faChevronDown}
          width="28"
          className={styles.opencard}
        />
      );
    } else {
      setScard("block");
      setCardicon(
        <FontAwesomeIcon
          icon={faChevronUp}
          width="28"
          className={styles.opencard}
        />
      );
    }
  };
  return (
    <>
      <li key={props.key}>
        <div className={styles.card}>
          <p className={styles.title}>{props.title}</p>
          <center className={styles.opcardbg} onClick={OpCard}>
            {cardicon}
          </center>
          <p className={styles.text} style={{ display: scard }}>
            {props.text}
          </p>
        </div>
      </li>
    </>
  );
}
