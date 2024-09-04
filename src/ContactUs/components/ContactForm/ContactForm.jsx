import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  const onsubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <section className={`${styles.container}`}>
      <div>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<MdMessage fontSize="24px" />} />
        </div>
        <div className={`${styles.btn2}`}>
          <Button
            isOutline={true}
            text="VIA EMAIL "
            icon={<MdMessage fontSize="24px" />}
          />

          <form onsubmit={onsubmit}>
            <div className={`${styles.form_name}`}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>

            <div className={`${styles.form_name}`}>
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" />
            </div>

            <div className={`${styles.form_name}`}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows={8} />
            </div>

            <div className={`${styles.last_btn}`}>
              <Button text="SUBMIT" />
            </div>
          </form>
        </div>
      </div>

      <div className={`${styles.img}`}>
        <img src="/public/ContactUs/images/contact.svg" alt="customer img" />
      </div>
    </section>
  );
};

export default ContactForm;
