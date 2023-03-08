import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import styles from "@/styles/Notification.module.css";
import Nav from "@/components/_navigation";
import Card from "@/components/_card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSpinner } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export default function Notification() {
  const [ntfdata, setNtfData] = useState([]);
  const [load, setLoad] = useState("block");
  useEffect(() => {
    const fetchNotif = async () => {
      const response = await fetch("/api/notification");
      const data = await response.json();
      setLoad("none")
      setNtfData(data.notes);
    };
    fetchNotif();
  }, []);

  return (
    <>
      <Head>
        <title>Novelia|通知</title>
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
          <center style={{display:load}}>
            <FontAwesomeIcon icon={faSpinner} className={styles.loader} />
          </center>
          <div>
            <ul>
              {ntfdata.map((note: any) => (
                <Card key={note.id} title={note.title} text={note.text} />
              ))}
            </ul>
          </div>
        </main>
      </motion.div>
    </>
  );
}
