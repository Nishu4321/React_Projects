import axios from "axios";

import AxiosGet from "./components/AxiosGet";

const AxiosPost = () => {
  axios
    .post("http://localhost:3000/todos", {
      title: "nishanth",
      description: "hi am nishu",
    })
    .then((res) => {
      console.log(res.data);
    });

  return (
    <div>
      <AxiosGet />
    </div>
  );
};

export default AxiosPost;
