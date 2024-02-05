export function About(){
    return(
        <>
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
        </>
    );
}