import { useEffect, useState } from "react";

import styles from "./Quality.module.css";
import HourlyChart from "./components/HourlyChart";

function Quality() {
  const [data, setData] = useState(null);
  const [hours, setHours] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=birch_pollen,grass_pollen`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData(data);
        setHours(data.hourly.time);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={`${styles.mainDiv}`}>
        {data ? (
          <div>
            <div className={`${styles.firstdiv1}`}>
              <h3>Latitude: {data.latitude}</h3>
              <h3>Longitude: {data.longitude}</h3>
              <h3>Elevation: {data.elevation}</h3>
              <h3>Time Zone: {data.timezone}</h3>
            </div>
            <div className={`${styles.sec_div}`}>
              <div className={`${styles.div1}`}>
                <h3>Hourly Data</h3>
              </div>
              <div className={`${styles.div2}`}>
                {hours.length > 0 ? (
                  <HourlyChart hours={hours} />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Quality;
