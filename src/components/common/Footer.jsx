export default function Footer() {
  return (
    <>
      <div className="footer-inner container">
        <section className="footer-contact">
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
        </nav>

        <section className="footer-connect">
          <form className="footer-newsletter">
            <label htmlFor="newsletter-sign-up">
              sign up for our newsletter
            </label>
            <input type="email" />

            <input
              type="checkbox"
              name="newsletter-consent"
              id="newsletter-consent"
            />
            <label htmlFor="newsletter-consent">
              I agree with <a href="/">Privacy Policy</a> and I want to receive
              emails from Monochrome
            </label>

            <button type="button">Submit</button>
          </form>

          <div className="footer-social">
            <ul>
              <li>
                <a href="/">
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="/">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="/">
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
