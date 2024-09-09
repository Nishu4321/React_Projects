import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./CardAxios.module.css";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { TiWeatherSunny } from "react-icons/ti";
import { TiWeatherDownpour } from "react-icons/ti";
import { TiWeatherWindy } from "react-icons/ti";
import { TiWeatherWindyCloudy } from "react-icons/ti";
import { WiWindBeaufort0 } from "react-icons/wi";
import { WiWindBeaufort1 } from "react-icons/wi";
import { GiColdHeart } from "react-icons/gi";
import { LuCloudRainWind } from "react-icons/lu";
import { CiCloudSun } from "react-icons/ci";
import { FiSun } from "react-icons/fi";
import { IoMdCloudOutline } from "react-icons/io";
import { WiDayCloudyHigh } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { IoRainyOutline } from "react-icons/io5";
import { TiWeatherShower } from "react-icons/ti";
import { IoThunderstormOutline } from "react-icons/io5";
import { TiWeatherCloudy } from "react-icons/ti";

export default function BasicCard({ weathers }) {
  //   const [foreCast, setForeCast] = useState([]);

  //   useEffect(() => {
  //     setForeCast(weathers.forecast);
  //   }, []);
  //   console.log(foreCast?.[0]?.date);

  dayjs("2019-01-25").format("D MMM");

  function getIcon(humidity) {
    if (humidity <= 20) {
      return <TiWeatherSunny />;
    } else if (humidity <= 60) {
      return <TiWeatherShower />;
    } else if (humidity <= 100) {
      return <TiWeatherDownpour />;
    }
    return <TiWeatherSunny />;
  }

  function getIconWindSpeed(wind_speed) {
    if (wind_speed <= 5) {
      return <WiWindBeaufort0 style={{ width: "25px", height: "25px" }} />;
    } else if (wind_speed <= 10) {
      return <WiWindBeaufort1 style={{ width: "25px", height: "25px" }} />;
    } else if (wind_speed <= 15) {
      return <TiWeatherWindy style={{ width: "20px", height: "20px" }} />;
    } else if (wind_speed <= 20) {
      return <TiWeatherWindyCloudy style={{ width: "25px", height: "25px" }} />;
    }
    return <WiWindBeaufort0 />;
  }

  function getIconTemperature(temperature) {
    if (temperature <= 10) {
      return <GiColdHeart style={{ width: "25px", height: "25px" }} />;
    } else if (temperature <= 20) {
      return <LuCloudRainWind style={{ width: "25px", height: "25px" }} />;
    } else if (temperature <= 30) {
      return <CiCloudSun style={{ width: "25px", height: "25px" }} />;
    } else if (temperature <= 40) {
      return <FiSun style={{ width: "25px", height: "25px" }} />;
    }
    return <LuCloudRainWind style={{ width: "25px", height: "25px" }} />;
  }

  function getIconWeatherDescription(weather_description) {
    if (weather_description == "Clear sky") {
      return <IoMdCloudOutline style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Partly cloudy") {
      return <WiDayCloudyHigh style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Sunny") {
      return <TiWeatherSunny style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Cloudy") {
      return <WiCloudy style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Rain showers") {
      return <IoRainyOutline style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Rain") {
      return <TiWeatherShower style={{ width: "30px", height: "30px" }} />;
    } else if (weather_description == "Scattered clouds") {
      return (
        <IoThunderstormOutline style={{ width: "30px", height: "30px" }} />
      );
    }
    return <TiWeatherCloudy />;
  }
  return (
    <Card
      sx={{
        minWidth: 350,
        backgroundColor: "rgb(243, 211, 171)",
        boxShadow: "revert-layer",
      }}
    >
      <CardContent sx={{ padding: "16px !important" }}>
        <Typography
          gutterBottom
          sx={{
            color: "text.secondary",
            fontSize: 15,
          }}
        >
          <div>
            <div className={`${styles.humi_wind_country_main}`}>
              <div className={`${styles.humi_wind_country}`}>
                <div className={`${styles.humiditydiv}`}>
                  {getIcon(weathers.humidity)}
                  <p>{weathers.humidity}</p>
                </div>

                <div>
                  <p>{weathers.country}</p>
                </div>

                <div className={`${styles.wind_speed}`}>
                  {getIconWindSpeed(weathers.wind_speed)}
                  <p>{weathers.wind_speed}</p>
                </div>
              </div>

              <div className={`${styles.temp_weather}`}>
                <div className={`${styles.temperature}`}>
                  <p>{weathers.temperature}</p>
                  {getIconTemperature(weathers.temperature)}
                </div>
                <div className={`${styles.weather}`}>
                  {getIconWeatherDescription(weathers.weather_description)}

                  <p>{weathers.weather_description}</p>
                </div>
              </div>

              <div className={`${styles.bigcity}`}>
                <p>{weathers.city}</p>
              </div>
            </div>
          </div>

          <div className={`${styles.second_div}`}>
            {weathers.forecast.map((forcastItem) => (
              <div className={`${styles.second_div_one}`}>
                <div className={`${styles.verticaldiv}`}>
                  <p>{dayjs(forcastItem.date).format("D MMM")}</p>
                  <div className={`${styles.temperature_img}`}>
                    <p>{forcastItem.temperature}</p>
                    {getIconTemperature(weathers.temperature)}
                  </div>
                  <div className={`${styles.tempDiv}`}>
                    {getIconWeatherDescription(weathers.weather_description)}
                    <p>{forcastItem.weather_description}</p>
                  </div>
                </div>

                <div className={`${styles.horizondiv}`}>
                  <div className={`${styles.humiditydiv}`}>
                    {getIcon(weathers.humidity)}
                    <p>{forcastItem.humidity}</p>
                  </div>
                  <div className={`${styles.wind_speed}`}>
                    {getIconWindSpeed(weathers.wind_speed)}
                    <p>{forcastItem.wind_speed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}
