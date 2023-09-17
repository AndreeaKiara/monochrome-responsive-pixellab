import Footer from '@/components/common/Footer';
import Header2 from '@/components/common/Header2';
import ProductTile from '@/components/catalog/ProductTile';
import CatalogPreview from '@/components/catalog/CatalogPreview';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeContent from '@/components/home/HomeContent';
// import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Header2></Header2>
      </header>

      <main className="content">
        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <HomeContent></HomeContent>

        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
          <HomeCatalogPreview></HomeCatalogPreview>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
