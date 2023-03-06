import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/nav.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Carousel(props: any) {

  const Tmp:JSX.Element = (<></>);
  /*
  for (let i = 0; i < Object.keys(props.imglist).length; i++) {
    Tmp = (
      <>
        <li>{props.imglist[i]}</li>
        <Tmp />
      </>
    );
  }*/
  return (
    <>
      <ul>
        </ul>
    </>
  );
}
