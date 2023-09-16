import CatalogPreview from '../catalog/CatalogPreview';

export default function HomeCatalogPreview() {
  return (
    <section className="home-catalog-preview container">
      <header>
        <h1>New Arrivals</h1>
      </header>

      <CatalogPreview></CatalogPreview>
    </section>
  );
}
