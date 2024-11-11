import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeContent from '@/components/home/HomeContent';
// import HomeContent from '@/components/home/HomeContent';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Header></Header>
      </header>

      <main className="content container">
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
