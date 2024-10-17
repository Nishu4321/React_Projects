import { RiEjectFill } from "@remixicon/react";
import axios from "axios";
import { resolve } from "chart.js/helpers";

// function asyncfun(num) {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching Data${num}....`);

//     fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         resolve("success");
//       })
//       .catch((err) => {
//         reject(err);
//         // console.log(err);
//       });
//   });
// }

// function asyncfun1(num) {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching Data${num}....`);

//     fetch(`https://jsonplaceholder.typicodecom/todos/${num}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         resolve("success");
//       })
//       .catch((err) => {
//         reject(err);
//         // console.log(err);
//       });
//   });
// }

// async function getData(num) {
//   try {
//     let result1 = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/1`
//     ).then((res) => res.json());
//     console.log(JSON.stringify(result1));
//     let result2 = await fetch(
//       `https://jsonplaceholder.typicodecom/todos/2`
//     ).then((res) => res.json());
//     console.log(JSON.stringify(result2));
//   } catch (err) {
//     console.log("Network Error");
//   }
// }
// getData();

// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     fetch(`https://jsonplaceholder.typicodecom/todos/2`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log("error 2");
//       });
//   })
//   .catch((err) => {
//     console.log("error 1");
//   });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     console.log("Gettting The data....");
//     setTimeout(() => {
//       console.log("data", dataId);
//       // if (dataId) {
//       resolve("Promise resolved");
//       // } else {
//       //   reject("promise rejected");
//       // }
//     }, 2000);
//   });
// }

// async await
// async function getalldata() {
//   await getData(1);
//   await getData(12345);
// }
// getalldata();

//Promise then
// getData(1)
//   .then((res) => {
//     return getData(2);
//   })
//   .then((res) => {
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// async function data() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/2000"
//     );
//     const json = await response.json();
//     console.log(json);
//   } catch (err) {
//     console.log(err);
//   }
// }
// data();

// axios
//   .get("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log("some error");
//   });

// axios
//   .post("https://jsonplaceholder.typicodecom/posts", {
//     title: "new Post",
//     body: "this is the content of the newpost created",
//     userId: 1,
//   })
//   .then((res) => {
//     console.log("post created", res.data);
//   })
//   .catch((err) => {
//     console.log("error while creating post");
//   });

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     title: "Updated title",
//     body: "Updated body content",
//     userId: 1,
//   })
//   .then((res) => {
//     console.log("updated data", res.data);
//   })
//   .catch((err) => {
//     console.log("error while trying to update the content");
//   });

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1")
//   .then((res) => {
//     console.log("post deleted", res.data);
//   })
//   .catch((err) => {
//     console.log("error while deleting post");
//   });

// async function fetchData() {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response.data);
//   } catch (err) {
//     console.log("error fetching data");
//   }
// }
// fetchData();

// console.log(0.2 + 0.8 == 1);
// console.log(0.2 + 0.8 === 1);

// console.log(0.2 + 0.1);
// console.log(0.1 + 0.2 === 0.3);

// function getData(dataId, nextDataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (nextDataId) {
//       nextDataId();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   console.log("getting data 2....");
//   getData(2, () => {
//     console.log("success");
//   });
// });

function asyncFun(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data);
    }, 2000);
  });
}
function asyncFun1(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", data);
    }, 2000);
  });
}
console.log("data1 fetching....");
asyncFun(12).then((res) => {
  console.log("data2 fetching....");
  asyncFun1(21).then((res) => {});
});
