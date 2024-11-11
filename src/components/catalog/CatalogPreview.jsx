import ProductTile from './ProductTile';

export default function CatalogPreview({ images = [] }) {
  return (
    <ul className="catalog-preview">
      {images.map((image, index) => (
        <li key={index}>
          <ProductTile
            productImage={image.main}
            altImage={image.alt}
          ></ProductTile>
        </li>
      ))}
    </ul>
  );
}
