import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
function Contact() {
  return (
    <>
      <h2
        className="conatct-title"
        style={{ marginLeft: "5%", marginTop: "30px" }}
      >
        Contact To Me
      </h2>
      <div data-aos="fade-down" className="contact">
        <section data-aos="fade-down" id="contact-details" class="section-p1">
          <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Contact Me today</h2>
            <h3>Happy To Viste My Protofolio </h3>
            <div>
              <li>
                <i class="fa-brands fa-linkedin"></i>
                <p>www.linkedin.com/in/omar-samir-433565278</p>
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                <p>omarmokdad2022@gmail.com</p>
              </li>
              <li>
                <i class="fa-brands fa-github"></i>
                <p>https://github.com/omarsamir8</p>
              </li>
              <li>
                <i class="fa-solid fa-phone"></i>
                <p>01558849371 </p>
              </li>
              <li>
                <i class="fa-solid fa-clock"></i>
                <p>Every Day From 9.00am to 11.59pm</p>
              </li>
            </div>
          </div>
          <div class="map">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55027.080294860956!2d31.229621645016255!3d30.458984714963442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2z2KjZhtmH2KfYjCDZgtiz2YUg2KjZhtmH2KfYjCDYqNmG2YfYp9iMINmF2K3Yp9mB2LjYqSDYp9mE2YLZhNmK2YjYqNmK2Kk!5e0!3m2!1sar!2seg!4v1699728870318!5m2!1sar!2seg"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
export default Contact;
