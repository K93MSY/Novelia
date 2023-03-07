import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/car.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Carousel(props: any) {
  return (
    <>
      <div className={styles.cp}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          width="28"
          className={styles.leftarrow}
        />
        <ul className={styles.carousel}>
          {props.imglist.map((item: any) => (
            <li key={item} className={styles.carchild}>
              <img src={item} key={item} className={styles.imgchild} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
