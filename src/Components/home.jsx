import { ReactTyped } from "react-typed";
export function Home() {
  return (
    <>
      {/* ======= Mobile nav toggle button ======= */}
      {/*offcanvas */}
      <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="bi bi-list mobile-nav-toggle d-xl-none" /></button>
      <h5 id="offcanvasRightLabel"></h5>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">

          <div className="d-flex flex-column">
            <div className="profile">
              <img
                src="https://avatars.githubusercontent.com/u/139760670?v=4"
                alt=""
                className="img-fluid rounded-circle"
              />
              <h1 className="text-light">
                <a style={{ display: "flex", justifyContent: "center" }} href="index.html">Rahul Goon</a>
              </h1>
              <div id="heade1" className="social-links mt-3 text-center">
                <a href="https://x.com/RGoon63059?t=FzzOpfzrtOKoLxeCgz-6IA&s=09" className="twitter">
                  <i className="bx bxl-twitter" />
                </a>
                <a href="https://www.facebook.com/rahulgoon.goon?mibextid=JRoKGi" className="facebook">
                  <i className="bx bxl-facebook" />
                </a>
                <a href="https://www.instagram.com/rahulgoon?igsh=anpxb3RweWtoa2I0" className="instagram">
                  <i className="bx bxl-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/rahul-goon-26b299266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin">
                  <i className="bx bxl-linkedin" />
                </a>
                <a href="https://github.com/Rahulgoon" className="google-plus">
                  <i class="bi bi-github" />
                </a>
              </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="/" className="nav-link scrollto active">
                    <i className="bx bx-home" /> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="about" className="nav-link scrollto">
                    <i className="bx bx-user" /> <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="resume" className="nav-link scrollto">
                    <i className="bx bx-file-blank" /> <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href="portfolio" className="nav-link scrollto">
                    <i className="bx bx-book-content" /> <span>Portfolio</span>
                  </a>
                </li>
                <li>
                  <a href="contact" className="nav-link scrollto">
                    <i className="bx bx-envelope" /> <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* .nav-menu */}
          </div>
        </div>
      </div>
      {/*offcanvas */}
      {/* ======= Header ======= */}
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/139760670?v=4"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Rahul Goon</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="https://x.com/RGoon63059?t=FzzOpfzrtOKoLxeCgz-6IA&s=09" className="twitter">
                <i className="bx bxl-twitter" />
              </a>
              <a href="https://www.facebook.com/rahulgoon.goon?mibextid=JRoKGi" className="facebook">
                <i className="bx bxl-facebook" />
              </a>
              <a href="https://www.instagram.com/rahulgoon?igsh=anpxb3RweWtoa2I0" className="instagram">
                <i className="bx bxl-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/rahul-goon-26b299266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin">
                <i className="bx bxl-linkedin" />
              </a>
              <a href="https://github.com/Rahulgoon" className="google-plus">
                <i class="bi bi-github" />
              </a>
            </div>
          </div>
          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="/" className="nav-link scrollto active">
                  <i className="bx bx-home" /> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="about" className="nav-link scrollto">
                  <i className="bx bx-user" /> <span>About</span>
                </a>
              </li>
              <li>
                <a href="resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank" /> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content" /> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="contact" className="nav-link scrollto">
                  <i className="bx bx-envelope" /> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Rahul Goon</h1>
          <p>
            I'm{" "}
            <ReactTyped 
              strings={[
                "Full Stack Web Developer",
                "ThoughtSpot Developer",
                "Freelancer",
                "Designer",
              ]}
              typeSpeed={50}
              backSpeed={50}
              attr="placeholder"
              loop
            >
              <input style={{ backgroundColor: "transparent", border: "0", }} type="text" />
            </ReactTyped>
          </p>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title">
              <h2>About</h2>
              <p>
                I'm a Full Stack Web Developer. I've experience in MERN Stack. <br />
                In <strong>FrontEnd</strong>  : HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, REACTJS, RESTAPI <br />
                In <strong>BackEnd</strong>  : NODEJS, EXPRESSJS, MONGODB <br />
                In <strong>Tools</strong> : THOUGHTSPOT, NETLIFY, VERCEL, GIT, GITHUB, NPM, VISUAL STUDIO <br />
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img
                  src="assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Full Stack Web Developer.</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Birthday:</strong> <span>24 september 1997</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Phone:</strong> <span>+91 62950 86933</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>City:</strong>{" "}
                        <span>Jalpaiguri, West Bengal, India </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                        <span>26</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>PhEmailone:</strong> <span>rahulgoon23@gmail.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right" />{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Section */}
        {/* ======= Skills Section ======= */}
        <section id="skills" className="skills section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Skills</h2>
              <p>
                I'm a FULL STACK WEB DEVELOPER . I've experience in MERN Stack . I know HTML5 , CSS3 , JS , BootStrap5 , MongoDB  , ExpressJS , ReactJS , NodeJS
              </p>
            </div>
            <div className="row skills-content">
              <div className="col-lg-6" data-aos="fade-up">
                <div className="progress">
                  <span className="skill">
                    HTML <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    CSS <i className="val">95%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    bootstrap <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    JavaScript <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <div className="progress">
                  <span className="skill">
                    mongodb <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    expressjs <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    reactjs <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
                <div className="progress">
                  <span className="skill">
                    nodeJs <i className="val">70%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Skills Section */}
        {/* ======= Resume Section ======= */}
        <section id="resume" className="resume">
          <div className="container">
            <div className="section-title">
              <h2>Resume</h2>
              <p>
                Fresher who wants to work in a competitive
                environment of an organization which povides me
                the opportunity to improve my skills and
                knowledge to grow along with the organization
                objective.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Sumary</h3>
                <div className="resume-item pb-0">
                  <h4>Rahul Goon</h4>
                  <p>
                    <em>
                      A Full Stack Web Developer  , ThoughtSpot Developer , Designer , Freelancer
                    </em>
                  </p>
                  <ul>
                    <li>College Para , Jalpaiguri - 735102 , West Benagal , India</li>
                    <li>+91 62950 86933</li>
                    <li>rahulgoon23@gmail.com</li>
                  </ul>
                </div>
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Full Stack Web Development </h4>
                  <h5>JAN 2023 - AUG 2023</h5>
                  <p>
                    <em>Edureka Learning Center(ELC) , Jalpaiguri , West Bengal</em>
                  </p>
                  <p>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Masters of Arts in Sociology</h4>
                  <h5>2019 - 2021</h5>
                  <p>
                    <em>North Bengal University , Darjeeling , West Bengal</em>
                  </p>
                  <p>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Arts in Sociology</h4>
                  <h5>2015 - 2019</h5>
                  <p>
                    <em>Ananda Chandra College , N.B.U , West Bengal</em>
                  </p>
                  <p>
                  </p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Professional Experience</h3>+
                <div className="resume-item">
                  <h4>RG TECHNOLOGIES</h4>
                  <h5>2023 - Present</h5>
                  <p>
                    <em>Jalpaiguri , West Bengal , India </em>
                  </p>
                  <ul>
                    <li>
                      Information Technology Analyst in RG Technologies.
                    </li>
                    <li>
                      Web Developer in RG Technologies
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
              These are all my completed project where I used MERN Stack(MongoDB,ExpressJS,RractJS,NodeJS),HTML5,CSS3,Bootstrap5,JavaScript.
              </p>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-12 col-md-12 portfolio-item filter-app">
                <h1 className="ab">eBloodBank</h1>
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/Screenshot-ebloodbank.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/Screenshot-ebloodbank.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="https://ebloodbank-mgsok2ebv-rahulgoon.vercel.app/" title="More Details">
                      <i className="bi bi-browser-chrome" />
                    </a>
                  </div>
                </div>
                <h5 className="abt">This Website hepls you to find and donate blood in any district from West Bengal.</h5>
                <h1 className="ab">Tripoto</h1>
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/Screenshot-tripoto.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/Screenshot-tripoto.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="https://animated-meerkat-b0b516.netlify.app/" title="More Details">
                      <i className="bi bi-browser-chrome" />
                    </a>
                  </div>
                </div>
                <h5 className="abt">This is the website where you can book a hotel for your dream Touristspot.</h5>
                <h1 className="ab"> RG Calculator</h1>
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/Screenshot-rgcal.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-links">
                    <a
                      href="assets/img/Screenshot-rgcal.jpg"
                      data-gallery="portfolioGallery"
                      className="portfolio-lightbox"
                      title="App 1"
                    >
                      <i className="bx bx-plus" />
                    </a>
                    <a href="https://65bb58ad1d08eb509d335a10--heartfelt-marigold-a9821c.netlify.app/" title="More Details">
                      <i className="bi bi-browser-chrome" />
                    </a>
                  </div>
                </div>
                <h5 className="abt">This is a basic Mathematical Calculator where you can calculate your Mathematical operation.</h5>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                Here you can contact with Mr. Rahul Goon.
              </p>
            </div>
            <div className="row" data-aos="fade-in">
              <div className="col">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt" />
                    <h4>Location:</h4>
                    <p>College Para , Jalpaiguri - 735102 , West Benagal , India</p>
                  </div>
                  <div className="email">
                    <i className="bi bi-envelope" />
                    <h4>Email:</h4>
                    <p>rahulgoon23@gmail.com</p>
                  </div>
                  <div className="phone">
                    <i className="bi bi-phone" />
                    <h4>Call:</h4>
                    <p>+91 62950 86933</p>
                  </div>
                  <br />
                  <div id="heade1" className="social-links mt-3 text-center">
                    <a href="https://x.com/RGoon63059?t=FzzOpfzrtOKoLxeCgz-6IA&s=09" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="https://www.facebook.com/rahulgoon.goon?mibextid=JRoKGi" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="https://www.instagram.com/rahulgoon?igsh=anpxb3RweWtoa2I0" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-goon-26b299266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                    <a href="https://github.com/Rahulgoon" className="google-plus">
                      <i className="bi bi-github" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="container">
          {/* <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>RG TECHNOLOGIES</span>
            </strong>
          </div> */}
          <div className="credits">
            Designed by <a href="https://www.linkedin.com/in/rahul-goon-26b299266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><strong>Rahul Goon</strong></a>
          </div>
        </div>
      </footer>
      {/* End  Footer */}
    </>
  );
}