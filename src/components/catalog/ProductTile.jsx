export default function ProductTile({ productImage, altImage }) {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <a href="/" title="Monochrome">
          <picture className="product-tile-image">
            <img
              src={productImage}
              alt="Monochrome"
              className="d-none d-lg-block"
            />
            <img src={altImage} alt="Monochrome" className="d-lg-none" />
          </picture>
        </a>

        <a href="/" className="product-fav" title="Add to favourites">
          <i className="fa-regular fa-heart"></i>
        </a>

        <h1 className="product-tile-title">
          <a href="/" title="Monochrome">
            Monochrome
          </a>
        </h1>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>
    </article>
  );
}
