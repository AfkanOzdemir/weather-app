import Head from "next/head";
import styles from "../styles/weather.module.css";
import headerStyle from "../styles/header.module.css";
import logo from "../images/logo/white.png";
import test from "../images/weatherMoods/1.png";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  let [www, setWww] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather App</title>
        <meta name="description" content="Created By Afkan Ozdemir" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.screen}>
          <div className={headerStyle.header}>
            <span className={headerStyle.logoContainer}>
              <Image
                src={logo}
                alt="logo"
                width={32}
                height={24}
                className={headerStyle.logo}
              />
            </span>
            <span className={headerStyle.menuContainer}>
              <span>
                <div></div>
                <div></div>
                <div></div>
              </span>
            </span>
          </div>
          <div className={styles.weatherContent}>
            <h3 className={styles.location}>Kiev</h3>
            <h1 className={styles.degree}>18°</h1>
            <div className={styles.weatherIcons}>
              <Image
                src={test}
                alt="logo"
                width={155}
                height={116}
                className={headerStyle.logo}
              />
            </div>
            <div className={styles.sunTime}>
              <div className={styles.sunRiseContainer}>
                <p>Sunrise</p>
                <p>06:05</p>
              </div>
              <div className={styles.sunsetContainer}>
                <p>Sunset</p>
                <p>18:45</p>
              </div>
            </div>
            <div className={styles.timer}>
              <div className={styles.timerLine}>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
