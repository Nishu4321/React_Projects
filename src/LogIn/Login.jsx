import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handelLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user")); // JSON.prase converts string to object
    // console.log(loggedUser);
    if (
      input.email === loggedUser.email &&
      input.password === loggedUser.password
    ) {
      localStorage.setItem("loggedin", true);
      // alert("logged in Successfully");
      navigate("/Calculator", { replace: true });
    } else {
      alert("wrong Password or Email");
    }
  };
  // console.log(input);
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.header}`}>
          <div className={`${styles.text}`}>Log in</div>
          <div className={`${styles.underline}`}> </div>
        </div>

        <form onSubmit={handelLogin}>
          <div className={`${styles.input}`}>
            <i class="fa-regular fa-envelope"></i>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className={`${styles.input}`}>
            <i class="fa-solid fa-lock"></i>
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className={`${styles.btn_div}`}>
            <button type="submit" className={`${styles.log_button}`}>
              Log in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// import React, { useState } from "react";
// import styles from "./Login.module.css";

// const LoginSignUp = () => {
//   const [action, setAction] = useState("Login");
//   //   const [input, setInput] = useState({
//   //     name: "",
//   //     email: "",
//   //     password: "",
//   //   });
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handelSubmit = async (event) => {
//     event.preventDefault();
//     console.log("handel clicked");
//     setMessage("");

//     try {
//       if (action === "Login") {
//         await fakeApiCall(email, password);
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", password);
//         setMessage("Log-In Successful");
//       } else {
//         await fakeApiCall(name, email, password);
//         localStorage.setItem("name", name);
//         localStorage.setItem("email", email);
//         localStorage.setItem("password", password);
//         setMessage("Sing_up Successful You can Now Log in.");
//       }
//     } catch (error) {
//       setMessage("An error occured. please try again");
//     }
//   };

//   const fakeApiCall = (...args) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (args.some((arg) => arg === "")) {
//           reject("all fields are required");
//         } else {
//           resolve("success");
//         }
//       }, 1000);
//     });
//   };

//   return (
//     <>
//       <div className={`${styles.container}`}>
//         <div className={`${styles.header}`}>
//           <div className={`${styles.text}`}>{action} </div>
//           <div className={`${styles.underline}`}> </div>
//         </div>

//         <form onSubmit={handelSubmit} className={`${styles.inputs}`}>
//           <div>
//             {action === "Login" ? (
//               <div></div>
//             ) : (
//               <div className={`${styles.input}`}>
//                 <i class="fa-regular fa-user"></i>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => {
//                     setName(e.target.value);
//                   }}
//                   required={action === "sign Up"}
//                 />
//                 {console.log(name)}
//               </div>
//             )}

//             <div className={`${styles.input}`}>
//               <i class="fa-regular fa-envelope"></i>
//               <input
//                 type="email"
//                 placeholder="Email Id"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {console.log(email)}
//             </div>
//             <div className={`${styles.input}`}>
//               <i class="fa-solid fa-lock"></i>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               {console.log(password)}
//             </div>
//           </div>
//           {action === "Sign Up" ? (
//             <div></div>
//           ) : (
//             <div className={`${styles.forgot_password}`}>
//               Forgot Password? <span>Click here</span>
//             </div>
//           )}

//           <div className={`${styles.message}`}>{message}</div>

//           <div className={`${styles.submit_container}`}>
//             <button
//               className={
//                 action === "Login"
//                   ? `${styles.submit} ${styles.gray}`
//                   : styles.submit
//               }
//               type="submit"
//               onClick={() => {
//                 setAction("Sign Up");
//               }}
//             >
//               SignUp
//             </button>
//             <button
//               className={
//                 action === "Sign Up"
//                   ? `${styles.submit} ${styles.gray}`
//                   : styles.submit
//               }
//               type="submit"
//               onClick={() => {
//                 setAction("Login");
//               }}
//             >
//               Login
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LoginSignUp;
