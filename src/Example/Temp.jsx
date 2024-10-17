// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Temp = () => {
//   const [data, setData] = useState(0);
//   const [data1, setData1] = useState(0);
//   useEffect(() => {
//     console.log("mounting");

//     return () => {
//       console.log("unmounting");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("updating");
//   }, [data, data1]);

//   return (
//     <div>
//       <button
//         onClick={() => {
//           setData(data + 1);
//         }}
//       >
//         button1-{data}
//       </button>
//       <button
//         onClick={() => {
//           setData1(data1 + 1);
//         }}
//       >
//         button2-{data1}
//       </button>
//     </div>
//   );
// };

// export default Temp;

import React from "react";

const Temp = () => {
  function aysnFun(dataId) {
    return new Promise((resole, reject) => {
      setTimeout(() => {
        console.log("Data: ", dataId);
        resole("success");
      }, 2000);
    });
  }
  return (
    <div>
      <button
        onClick={() => {
          aysnFun(23).then((res) => {
            aysnFun(20);
          });
        }}
      >
        btn
      </button>
    </div>
  );
};

export default Temp;

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import "./Temp.css";

// const Temp = () => {
//   const [datas, setDatas] = useState([]);
//   const [statusCode, setStatusCode] = useState();
//   useEffect(() => {
//     axios
//       .post("https://jsonplaceholder.typicode.com/todos", {
//         title: "Request to Update",
//         userId: 1,
//       })
//       .then((res) => {
//         console.log("created:", res.data);
//         setDatas(res.data);
//         console.log("Status Code", res.status);
//         setStatusCode(res.status);
//       })
//       .catch((err) => {
//         console.log("network error");
//       });
//   }, []);
//   console.log(datas);
// return (
//   <div className="div_one">
//     <h3>My Data</h3>
//     <p>Post Id: {datas.id}</p>
//     <p>Title: {datas.title}</p>
//     <p>Staus Code: {statusCode}</p>
//   </div>
// );

//   const ThemeContext = React.createContext("light");

//   function ThemeDisplay() {
//     const theme = useContext(ThemeContext);
//     return <p>Current Theme : {theme}</p>;
//   }

//   return (
//     <>
//       <ThemeContext.Provider value="dark">
//         <ThemeDisplay />
//       </ThemeContext.Provider>
//     </>
//   );

//   const lists = [
//     { id: 1, name: "Nishanth" },
//     { id: 2, name: "Nish" },
//     { id: 3, name: "Nisha" },
//   ];

//   return (
//     <>
//       <ul>
//         {lists.map((list) => <li key={list.id}>{list.name}</li>).reverse()}
//       </ul>
//     </>
//   );
// };

// export default Temp;
