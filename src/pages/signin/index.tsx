import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Login.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Novelia|Login</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.forms}>
          <div className={styles.grid}>
            <div className={styles.cel}>
              <center>
                <input
                  type="text"
                  placeholder="ID or UserName"
                  className={styles.userinput}
                />
                <FontAwesomeIcon
                  icon={faUser}
                  width="28"
                  className={styles.usinico}
                />
              </center>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.cel}>
              <center>
                <input
                  type="password"
                  placeholder="Your Password"
                  className={styles.userinput}
                />
                <FontAwesomeIcon
                  icon={faLock}
                  width="28"
                  className={styles.usinico}
                />
              </center>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.cel}>
              <center>
                <button className={styles.lgnbtn}>Login</button>
              </center>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
