export default function Header() {
  return (
    <>
      <section className="header-secondary">
        <div className="header-mobile d-lg-none container">
          <h1 className="header-mobile-title">Monochrome</h1>
          <ul>
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

        <div className="header-secondary-inner container">
          <div className="header-connect d-none d-lg-block">
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

          <div className="header-controls d-none d-lg-block">
            <ul>
              <li>
                <form className="header-search-bar">
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
        <div className="container d-none d-lg-block">
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

        <div className="header-search d-block d-lg-none container">
          <ul>
            <li>
              <button
                type="button"
                title="Menu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </li>

            <li>
              <form className="header-search-bar">
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
          </ul>
        </div>
      </section>
    </>
  );
}
