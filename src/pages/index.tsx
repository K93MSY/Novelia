//import modules
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";

//Images
import removed from '@/images/removed.png'

SwiperCore.use([Pagination, Navigation]);

//import styles
import styles from "@/styles/Home.module.css";

//import components
import Nav from "@/components/_navigation";

const inter = Inter({ subsets: ["latin"] });

const images = [
  removed,
  removed,
  removed,
  removed,
  removed,
  removed,
  removed,
  removed,
]

export default function Home() {
  const [cpView, setcpView] = useState(3);

  return (
    <>
      <Head>
        <title>Novelia</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Nav />
        <div className={styles.m}>
          <Swiper
            slidesPerView={cpView}
            pagination={{
              clickable: true,
            }}
            navigation
            loop={true}
            className={styles.carousel}
          >
            {images.map((src:any, index:any) => {
              return (
                <SwiperSlide key={index}>
                  <Image
                    src={src}
                    layout="responsive"
                    width={640}
                    height={400}
                    alt="test_image"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
}
