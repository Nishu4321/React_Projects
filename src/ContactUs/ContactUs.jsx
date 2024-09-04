import React from "react";
import "./ContactUs.css";
import ContactUsNavigation from "./components/ContactNavigation/ContactUsNavigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function CssCheck() {
  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "yellow",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "280px",
            paddingTop: "20px",
            backgroundColor: "black",
          }}
        ></div>
      </div>
      <div
        style={{
          height: "280px",
          paddingTop: "20px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            display: "flex",
            height: "240px",
            // marginTop: "20px",
            backgroundColor: "green",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "blue",
            }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "yellow",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

const ContactUs = () => {
  return (
    <div>
      <ContactUsNavigation />
      <main className="container">
        <ContactHeader className="main_container" />
        <ContactForm />
        {/* <CssCheck /> */}
      </main>
    </div>
  );
};

export default ContactUs;
