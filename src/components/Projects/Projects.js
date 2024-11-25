import "./Projects.css";
import studentportalimg from "../../Assets/student_portal.jpg";
import StaticEcommerce from "../../Assets/ecommerce.png";
import FullStackEcommerce from "../../Assets/full stack ecommerce.png";
import chatGPT from "../../Assets/chgpt.png";
import APISearch from "../../Assets/Api seacrh.png";
import Cruds from "../../Assets/Cruds.png";
import ecommerceByjs from "../../Assets/Ecommerce js.png";
import Tourism from "../../Assets/Tourism.png";
import Eductions from "../../Assets/Education platdorm.png";
import Honey from "../../Assets/honey.png";
import Template1 from "../../Assets/Template1.png";
import Landing from "../../Assets/Landing Page.png";
import elfursanshop from "../../Assets/elfursanshop.png";
import ntiproject from "../../Assets/ntiproject.png";

function Projects() {
  return (
    <>
      <div className="projects">
        <h2>Projects</h2>
        <div className="projectcontainer">
          <div data-aos="fade-up-right" className="project">
            <img src={elfursanshop} alt=""></img>
            <h3>El Fursan Shop</h3>
            <p>
            El-Fursan Shop for the finest types of spices, therapeutic and aromatic natural oils, and all kinds of confectionery ingredients{" "}
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Express</p>
              <p>Mongo DB</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://el-fursan-design.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/El-Fursan-Design",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={studentportalimg} alt=""></img>
            <h3>Student Portal </h3>
            <p>
              this project Made for developing learning in colleges and provide
              more servicie for student & doctor & affairs{" "}
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Express</p>
              <p>Mongo DB</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://graduation-project-beryl-seven.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Graduation-Project",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>

          <div data-aos="fade-up-right" className="project">
            <img src={FullStackEcommerce} alt=""></img>
            <h3>Big E-commerce </h3>
            <p>
              this project Made Provide Dashboard For Admin ,Show All Clients ,
              Orders , Categorys , Products , Coupons
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Express</p>
              <p>Mongo DB</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button>Demo</button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Full-Stack-E-commerce",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
         
          <div data-aos="fade-up-left" className="project">
            <img src={StaticEcommerce} alt=""></img>
            <h3>Static E-commerce </h3>
            <p>
              this project Show More Category Of Clothing For Mens ,Wommens ,
              Childrens And Smart Cart You Add Prodct In It.
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Routes</p>
              <p>Restful Api</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-react-project-green.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/E-COMMERCE-REACT-PROJECT",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={ntiproject} alt=""></img>
            <h3>Nti-Final-Project </h3>
            <p>
            A system to display all smart electronic devices, such as mobile phones, laptops, screens, and some other devices
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button onClick={() => {
                  window.open(
                    "https://nti-final-project.vercel.app/",
                    "_blank"
                  );
                }}>Demo</button>
              <button
               onClick={() => {
                window.open(
                  "https://github.com/omarsamir8/Nti-Final-Project",
                  "_blank"
                );
              }}
              >Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={chatGPT} alt=""></img>
            <h3>ChatGPT </h3>
            <p>
              this project Made for developing learning in colleges and provide
              more servicie for student & doctor & affairs{" "}
            </p>
            <div className="protools">
              <p>Html</p>
              <p>Css</p>
              <p>Bootstrap</p>
              <p>Saas</p>
              <p>Routes</p>
              <p>Restful Api</p>
              <p>React.JS</p>
              <p>Node.js</p>
              <p>JS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://chat-bot-jade-nine.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/ChatBot",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={APISearch} alt=""></img>
            <h3>Image Search App</h3>
            <p>
              this project Provide Fast And Easy Serach For Any Things Like Cats
              , Dogs , Players , Clubs , Flowers , Balls And Diffrent Things
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p>
              <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://api-search-app-pi.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Api-Search-App",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Cruds} alt=""></img>
            <h3>Cruds Project </h3>
            <p>
              this project Provide The Cruds Operatons Create , Update , Read ,
              Delete for any products and Other Services
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://cruds-operations-beryl.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/CRUDS-Operations",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={ecommerceByjs} alt=""></img>
            <h3>Ecommerce By JS </h3>
            <p>
              this project Made Provide Alot Of Types Of Clothes High Quality ,
              Alot of Services To Show Single Page Of Any Product
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-of-clothes.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/E-commerce-Of-Clothes",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Tourism} alt=""></img>
            <h3>Tourism In Egypt </h3>
            <p>
              this project Provides Services For Tourists And Provide Best
              Places In Egypt To Visite It And Enjoy in Egypt Vibes
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>js</p> <p>saas</p>
              <p> APIS</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://tourism-rho-ochre.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Tourism",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Eductions} alt=""></img>
            <h3>Education platform </h3>
            <p>
              this project Provides Services For Student And Instructors Show
              the Profile , Settings , Projects , Files , Friends , Dashboard
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://eductaion-plateform.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Eductaion-Plateform",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-right" className="project">
            <img src={Honey} alt=""></img>
            <h3>Honey Shop </h3>
            <p>
              this project Provides Services For Customers Need Best Type Of
              Honey Look Like Honey With Queen bee , Rosemary honey
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://e-commerce-of-honey.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/E-commerce-Of-Honey",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Template1} alt=""></img>
            <h3>Buty Template </h3>
            <p>
              this Template Provides Alot Of Services And Some Photes of Natural
              And Can Contact With US By Form Easy
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://template-by-html-css.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Template_by_html_css",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
          <div data-aos="fade-up-left" className="project">
            <img src={Landing} alt=""></img>
            <h3>Landing Page </h3>
            <p>
              this Landing Page Provides Many Sections Shows My Skills In Html &
              CSS & bootstrap And More Skills By Animations , Media Query
            </p>
            <div className="protools">
              <p>html</p>
              <p>css</p>
              <p>bootstrap</p>
              <p>Font Awsome</p>
              <p>Diffrent Tools ..!</p>
            </div>
            <div className="navigate">
              <button
                onClick={() => {
                  window.open(
                    "https://landing-page-huai.vercel.app/",
                    "_blank"
                  );
                }}
              >
                Demo
              </button>
              <button
                onClick={() => {
                  window.open(
                    "https://github.com/omarsamir8/Landing-Page",
                    "_blank"
                  );
                }}
              >
                Sourse
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
