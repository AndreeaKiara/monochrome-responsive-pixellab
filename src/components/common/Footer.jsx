export default function Footer() {
  return (
    <>
      <div className="footer-inner">
        <section className="footer-contact d-none d-lg-block">
          <div className="footer-contact-inner">
            <ul>
              <li>
                <a tel="+44 (0)10 23456789">call us</a>
              </li>

              <li>
                <a tel="+44 (0)10 23456789">+44 (0)10 23456789</a>
              </li>

              <li>
                <a mailto="email customer care">email customer care</a>
              </li>
            </ul>
          </div>
        </section>

        <nav className="footer-nav">
          <section className="footer-nav-inner container">
            <header className="d-block d-lg-none">
              <h1>How can we help?</h1>
            </header>
            <div className="footer-nav-content">
              <ul className="d-lg-block">
                <li>
                  <a href="/" title="style & fit advice">
                    <span className="d-none d-lg-inline">
                      style & fit advice
                    </span>
                    <span className="d-lg-none">style and fit</span>
                  </a>
                </li>

                <li>
                  <a href="/" title="faqs">
                    faqs
                  </a>
                </li>

                <li>
                  <a href="/" title="delivery">
                    delivery
                  </a>
                </li>

                <li>
                  <a href="/" title="exchange & returns">
                    <span className="d-none d-lg-inline">
                      exchange & returns
                    </span>
                    <span className="d-lg-none">returns</span>
                  </a>
                </li>
              </ul>

              <ul className="d-lg-block">
                <li>
                  <a href="/" title="about us">
                    about us
                  </a>
                </li>

                <li>
                  <a href="/" title="careers">
                    careers
                  </a>
                </li>

                <li>
                  <a href="/" title="affiliates">
                    affiliates
                  </a>
                </li>

                <li>
                  <a href="/" title="advertising">
                    advertising
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-consent d-lg-none">
              <a href="/">terms & conditions</a>
              <a href="/">privacy & cookies</a>
            </div>
          </section>
        </nav>

        <section className="footer-connect">
          <div className="footer-connect-inner container">
            <h1 className="d-lg-none">Let&rsquo;s connect</h1>
            <form className="footer-newsletter">
              <div className="newsletter">
                <label htmlFor="newsletter-sign-up" className="d-lg-none">
                  Be the first to receive exclusive offers
                </label>
                <label
                  htmlFor="newsletter-sign-up"
                  className="d-none d-lg-block label-lg"
                >
                  sign up for our newsletter
                </label>
                <input
                  type="email"
                  id="newsletter-sign-up"
                  name="newsletter-sign-up"
                  placeholder="Email address"
                />
              </div>

              <button type="submit" className="button button-secondary">
                Submit
              </button>
              <div className="consent">
                <input
                  type="checkbox"
                  name="newsletter-consent"
                  id="newsletter-consent"
                />
                <label htmlFor="newsletter-consent">
                  I agree with <a href="/">Privacy Policy</a> and I want to
                  receive emails from Monochrome
                </label>
              </div>
            </form>

            <div className="footer-social">
              <h1 className="d-lg-none">We are highly likeable</h1>
              <ul>
                <li>
                  <a href="/" title="YouTube">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Facebook">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Twitter">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a href="/" title="Instagram">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
