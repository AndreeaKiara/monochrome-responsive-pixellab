import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
// import ProductTile from '@/components/catalog/ProductTile';
// import CatalogPreview from '@/components/catalog/CatalogPreview';
// import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Header></Header>
      </header>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
