export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-secondary-inner container">
          <div className="header-connect">
            <ul>
              <li>
                <a
                  href="/"
                  title="YouTube"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title="Facebook"
                >
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title="Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title="Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

              <li>
                <a
                  href="tel:+44 (0)10 2345 6789"
                  title="Call us"
                >
                  call us +44 (0)10 2345 6789
                </a>
              </li>
            </ul>
          </div>

          <div className="header-controls">
            <ul>
              <li>
                <form>
                  <input
                    type="text"
                    placeholder="Search"
                    name="search-bar"
                    id="search-bar"
                  />
                  <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>
              <li>
                <a
                  href="/"
                  title="Account"
                >
                  <i class="fa-solid fa-user"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title="Favourites"
                >
                  <i class="fa-solid fa-heart"></i>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title="Cart"
                >
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="header-primary">
        <div className="container">
          <ul>
            <li>
              <a
                href="/"
                title="New Arrivals"
              >
                New Arrivals
              </a>
            </li>

            <li>
              <a
                href="/"
                title="Brands"
              >
                Brands
              </a>
            </li>

            <li>
              <a
                href="/"
                title="Mens"
              >
                Mens
              </a>
            </li>

            <li>
              <a
                href="/"
                title="Womens"
              >
                Womens
              </a>
            </li>

            <li>
              <a
                href="/"
                title="Accessories"
              >
                Accessories
              </a>
            </li>

            <li>
              <a
                href="/"
                title="Lookbook"
              >
                Lookbook
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
