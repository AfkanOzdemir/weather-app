import Head from "next/head";
import styles from "../styles/weather.module.css";
import headerStyle from "../styles/header.module.css";
import panelStyle from "../styles/panel.module.css";
import logo from "../images/logo/white.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import "swiper/css";

export default function Home() {
  const [weather, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  let [changeLineLocation, setLineLocation] = useState(true);
  let [changePanel, setPanel] = useState(0);

  const fetchData = async () => {
    await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=3ffb882b90a94dc9bba175653221808&q=Istanbul&days=7&aqi=yes&alerts=yes`
    )
      .then(async (response) => {
        return response.json();
      })
      .then(async (data) => {
        setUsers(data);
        setLoading(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let now = moment().format("HH");
  const newValue = (value) => {
    switch (value) {
      case "6":
        return { x: 0, y: 0 };
      case "7":
        return { x: 15, y: -3 };
      case "8":
        return { x: 30, y: -6 };
      case "9":
        return { x: 50, y: -10 };
      case "10":
        return { x: 70, y: -12 };
      case "11":
        return { x: 90, y: -14 };
      case "12":
        return { x: 110, y: -15 };
      case "13":
        return { x: 130, y: -15 };
      case "14":
        return { x: 150, y: -15 };
      case "15":
        return { x: 170, y: -14 };
      case "16":
        return { x: 190, y: -12 };
      case "17":
        return { x: 210, y: -10 };
      case "18":
        return { x: 230, y: -6 };
      case "19":
        return { x: 240, y: -3 };
      case "20":
        return { x: 250, y: 0 };
      default:
        return { x: 1000, y: 0 };
    }
  };
  let value = newValue(now);

  let todayPanel = () => {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        className={panelStyle.mySwiper}
      >
        {weather.forecast.forecastday[0].hour.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={panelStyle.weather}>
                <p>{moment.unix(value.time_epoch).format("LT")}</p>
                <div className={panelStyle.imageContainer}>
                  {
                    <Image
                      src={"https:" + value.condition.icon}
                      alt="icon"
                      width={64}
                      height={64}
                      className={panelStyle.icon}
                    />
                  }
                </div>
                <h3>{value.temp_c}&deg;</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  let weekPanel = () => {
    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        freeMode={true}
        className={panelStyle.mySwiper}
      >
        {weather.forecast.forecastday.map((value, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={panelStyle.weather}>
                <p>{moment.unix(value.date_epoch).format("ddd")}</p>
                <div className={panelStyle.imageContainer}>
                  {
                    <Image
                      src={"https:" + value.day.condition.icon}
                      alt="icon"
                      width={64}
                      height={64}
                      className={panelStyle.icon}
                    />
                  }
                </div>
                <h3>{value.day.avgtemp_c}&deg;</h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  if (loading) {
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
                  className={headerStyle.icon}
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
              <h3 className={styles.location}>{weather.location.name}</h3>
              <h1 className={styles.degree}>{weather.current.temp_c}&deg;</h1>
              <div className={styles.weatherIcons}>
                {
                  <Image
                    src={"https:" + weather.current.condition.icon}
                    alt="weatherMood"
                    width={128}
                    height={128}
                    className={headerStyle.icon}
                  />
                }
              </div>
              <div className={styles.sunTime}>
                <div className={styles.sunRiseContainer}>
                  <p>Sunrise</p>
                  <p>{weather.forecast.forecastday[0].astro.sunrise}</p>
                </div>
                <div className={styles.sunsetContainer}>
                  <p>Sunset</p>
                  <p>{weather.forecast.forecastday[0].astro.sunset}</p>
                </div>
              </div>
              <div className={styles.timer}>
                <div className={styles.timerCurve}></div>
                <span
                  className={styles.timeCircle}
                  style={{
                    transform: `translateX(${value.x}px) translateY(${value.y}px)`,
                  }}
                ></span>
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
                <div
                  className={
                    changeLineLocation
                      ? panelStyle.lineDefault
                      : panelStyle.lineChanged
                  }
                >
                  <p
                    onClick={() => {
                      setPanel(0);
                      setLineLocation(true);
                    }}
                  >
                    Today
                  </p>
                  <p
                    onClick={() => {
                      setPanel(1);
                      setLineLocation(false);
                    }}
                  >
                    Week
                  </p>
                </div>
                <div className={panelStyle.weatherMood}>
                  {changePanel == 0 ? todayPanel() : weekPanel()}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return "loading";
  }
}
