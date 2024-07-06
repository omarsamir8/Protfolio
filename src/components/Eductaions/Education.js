import "./Eductaion.css";
function Education() {
  return (
    <>
      <div className="Education">
        <div className="education-title">
          <h2>Educations & Courses</h2>
        </div>
        <div className="edu-conatiner">
          <div data-aos="fade-up-right" className="edu">
            <div className="lines-style">
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
            </div>
            <div className="edu-details">
              <div data-aos="fade-down" className="courses">
                <p>2022-2023</p>
                <h4>ElZero Shcool</h4>
                <p>
                  I Studied Basics Of Launguage Programming and Some Of Skills
                  Of Web Developments
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "5px" }}
              >
                <p>2020-2024</p>
                <h4>Bachelor's Degree </h4>
                <p>
                  I Studied 4 Years Of Computer Science And Got Alot Of Skills
                  And Knowledge Of Launguages Programming & Technologies
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-15px" }}
              >
                <p>2023-2024</p>
                <h4>Software Engineering Future (SEF)</h4>
                <p>
                  I Studied Front End Tools Very Good "HTML & CSS & BOOTSTRAP &
                  JAVA SCRIPT & React.js" To Make Very Interactivity Websites &
                  Resposives
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up-left" className="edu">
            <div className="lines-style">
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
              <i data-aos="fade-down" class="fa-solid fa-graduation-cap"></i>
              <div className="line"></div>
            </div>
            <div className="edu-details">
              <div data-aos="fade-down" className="courses">
                <p>2022-2023</p>
                <h4>NTI </h4>
                <p>
                  I Studied Front End Tools Very Good "HTML & CSS & BOOTSTRAP &
                  JAVA SCRIPT" To Make Very Interactivity Websites & Resposives
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-20px" }}
              >
                <p>2020-2024</p>
                <h4>Jonas Courses </h4>
                <p>
                  I Studied 1 Years Of Jounas Courses Of Js & Node.Js And Got
                  Alot Of Skills And Knowledge Of Launguages Programming &
                  Technologies
                </p>
              </div>
              <div
                data-aos="fade-down"
                className="courses"
                style={{ marginTop: "-20px" }}
              >
                <p>2023-2024</p>
                <h4>English Language </h4>
                <p>
                  I Studied English And My Level Is Middle , I will Develop
                  Myself In The Near Future
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Education;
