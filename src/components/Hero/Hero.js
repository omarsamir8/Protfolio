import "./Hero.css";
import Pro_Img from "../../Assets/profolio.jpg";
function Hero() {
  return (
    <>
      <div className="hero">
        <div data-aos="fade-up-right" className="left">
          <h5>Welcom To My Protfolio</h5>
          <h1>
            Hi! I'am Omar Samir <span> Front End DeveloPer</span>
          </h1>
          <p>
            I am a front-end developer specializing in HTML5, CSS3, and
            JavaScript, with proficiency in Bootstrap, SASS, and React.js. I
            have a passion for crafting beautiful and responsive web
            applications. My portfolio showcases a variety of projects that
            highlight my skills in creating intuitive user interfaces and
            implementing modern web technologies.I am proficient in handling
            APIs and have successfully and creating animations
          </p>
          <div className="buttons">
            <button
              onClick={() => {
                window.scrollTo({
                  top: 600, // المسافة التي تريد الاسكرول لها (بالبيكسل)
                  behavior: "smooth", // لسلاسة الحركة
                });
              }}
              className="animate__animated animate__bounceInLeft explore"
            >
              Explore
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://drive.google.com/drive/folders/1F4rlA-6wJbvuoh9c6Ue7K2RWP1L9zfgN?hl=ar",
                  "_blank"
                );
              }}
              className="animate__animated animate__bounceInRight cv"
            >
              Download CV{" "}
              <i style={{ color: "brown " }} class="fa-solid fa-download"></i>
            </button>
          </div>
        </div>
        <div data-aos="fade-up-left" className="right">
          <img src={Pro_Img} alt="" />
        </div>
      </div>
    </>
  );
}
export default Hero;
