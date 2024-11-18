import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreview({
  title,
  secondaryTitle,
  images,
  viewAll,
}) {
  return (
    <section className="home-catalog-preview container">
      <header>
        <h1 className="d-lg-block d-none">{title}</h1>
        <h1 className="d-lg-none">{secondaryTitle}</h1>
      </header>

      <CatalogPreview images={images}></CatalogPreview>
      {viewAll && (
        <a
          href="/"
          title="View all products"
          className="button button-primary d-inline-block"
        >
          view all
        </a>
      )}
    </section>
  );
}
