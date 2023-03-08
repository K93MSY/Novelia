import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import styles from "@/styles/Notification.module.css";
import Nav from "@/components/_navigation";
import Card from "@/components/_card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Notification() {

  return (
    <>
      <Head>
        <title>Novelia|設定</title>
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
          <p className={styles.head}>通知一覧</p>
        </main>
      </motion.div>
    </>
  );
}
