import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faUser, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Home.module.css";

import Nav from "./_navigation";

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
      <Nav />
    </>
  );
}
