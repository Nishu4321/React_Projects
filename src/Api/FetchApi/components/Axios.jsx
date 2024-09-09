import { useEffect, useState } from "react";
import CardAxios from "./CardAxios";
import axios from "axios";
const Axios = () => {
  const [weathers, setWeathers] = useState([]);
  useEffect(() => {
    axios.get("https://freetestapi.com/api/v1/weathers").then((res) => {
      setWeathers(res.data);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          margin: "20px 0px",
        }}
      >
        {weathers.map((weather) => (
          <div key={weather.id}>
            <CardAxios weathers={weather} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Axios;
