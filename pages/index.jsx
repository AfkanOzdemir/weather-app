import Head from "next/head";
import styles from "../styles/weather.module.css";
import headerStyle from "../styles/header.module.css";
import panelStyle from "../styles/panel.module.css";
import logo from "../images/logo/white.png";
import test from "../images/weatherMoods/1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  faCloudSun,
  faCloudRain,
  faRainbow,
  faCloud,
  faCloudBolt,
  faSnowflake,
  faCloudMoon,
  faWind,
  faTornado,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
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
              <div className={styles.timerLine}></div>
            </div>
          </div>
          <div className={panelStyle.weatherPanel}>
            <section>
              <div className={panelStyle.wave1}></div>
              <div className={panelStyle.wave2}></div>
              <div className={panelStyle.wave3}></div>
              <div className={panelStyle.wave4}></div>
            </section>
            <div className={panelStyle.panelContainer}>
              <div className={panelStyle.panelSelection}>
                <p>Today</p>
                <p>Week</p>
              </div>
              <div className={panelStyle.weatherMood}>
                <Swiper
                  spaceBetween={40}
                  slidesPerView={4}
                  freeMode={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  className={panelStyle.mySwiper}
                >
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>Now</p>
                      <FontAwesomeIcon
                        icon={faCloudSun}
                        className={panelStyle.icon}
                      />
                      <h3>18°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>7:00</p>
                      <FontAwesomeIcon
                        icon={faCloudSun}
                        className={panelStyle.icon}
                      />
                      <h3>27°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>8:00</p>
                      <FontAwesomeIcon
                        icon={faCloudSun}
                        className={panelStyle.icon}
                      />
                      <h3>24°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>9:00</p>
                      <FontAwesomeIcon
                        icon={faCloudRain}
                        className={panelStyle.icon}
                      />
                      <h3>18°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>10:00</p>
                      <FontAwesomeIcon
                        icon={faSnowflake}
                        className={panelStyle.icon}
                      />
                      <h3>16°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>11:00</p>
                      <FontAwesomeIcon
                        icon={faRainbow}
                        className={panelStyle.icon}
                      />
                      <h3>18°</h3>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={panelStyle.weather}>
                      <p>12:00</p>
                      <FontAwesomeIcon
                        icon={faWind}
                        className={panelStyle.icon}
                      />
                      <h3>20°</h3>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
