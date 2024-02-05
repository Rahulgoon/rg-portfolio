export function Portfolio(){
    return(
        <>
         {/* ======= Portfolio Section ======= */}
         <section id="portfolio" className="portfolio section-bg">
          <div className="container">
            <div className="section-title">
              <h2>Portfolio</h2>
              <p>
               These are all my completed project where I used MERN Stack(MongoDB,ExpressJS,RractJS,NodeJS),HTML5,CSS3,Bootstrap5,JavaScript.
              </p>
            </div>
            {/* <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div> */}
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
        </>
    );
}