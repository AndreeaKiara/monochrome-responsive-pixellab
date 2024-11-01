export default function Footer2() {
  return (
    <>
      <div className="footer-inner container">
        <section className="footer-contact d-none">
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
        </section>

        <nav className="footer-nav">
          <h2 class="d-lg-none">How can we help?</h2>
          <ul>
            <li>
              <a href="/" title="style & fit advice">
                style & fit advice
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
                exchange & returns
              </a>
            </li>
          </ul>

          <ul>
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

          <a href="/" class="d-lg-none">
            terms & conditions
          </a>
          <a href="/" class="d-lg-none">
            privacy & cookies
          </a>
        </nav>

        <section className="footer-connect d-none">
          <form className="footer-newsletter">
            <label htmlFor="newsletter-sign-up">
              sign up for our newsletter
            </label>
            <input
              type="email"
              id="newsletter-sign-up"
              name="newsletter-sign-up"
              placeholder="Email address"
            />

            <input
              type="checkbox"
              name="newsletter-consent"
              id="newsletter-consent"
            />
            <label htmlFor="newsletter-consent">
              I agree with <a href="/">Privacy Policy</a> and I want to receive
              emails from Monochrome
            </label>

            <button type="submit">Submit</button>
          </form>

          <div className="footer-social">
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
        </section>
      </div>
    </>
  );
}
