import { useEffect, useState } from "react";

import styles from "./APOD.module.css";

function APOD() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className={`${styles.main}`}>
        {data ? (
          <div className={`${styles.second_main}`}>
            <div className={`${styles.heading}`}>
              <h1> Astrology Photo Of The Day</h1>
              <h3>Date: {data.date}</h3>
            </div>

            <div className={`${styles.body}`}>
              <p>Title: {data.title}</p>
              <img src={data.hdurl} alt="img" />
            </div>
            <div className={`${styles.desc}`}>
              <p>ABOUT: {data.explanation}</p>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default APOD;
