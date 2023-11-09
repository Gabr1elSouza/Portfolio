import React from "react";

import Style from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <div className={Style.Contact_me} id="Contact">
        <p>Let Me Get You a Beautiful Website.</p>
        <a class={Style.Button_two} href="#">
          Hire Me
        </a>
      </div>
    </div>
  );
}

export default Contact;
