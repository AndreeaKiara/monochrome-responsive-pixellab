import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import HomeCatalogPreview from '@/components/home/HomeCatalogPreview';
import HomeContent from '@/components/home/HomeContent';

const productImages1 = [
  {
    main: '/images/products/recently_viewed_thumbnail_2-5.png',
    alt: '/images/products/recently_viewed_thumbnail_2-1.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-1.png',
    alt: '/images/products/recently_viewed_thumbnail_2-10.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-2.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-3.png',
  },
];

const productImages2 = [
  {
    main: '/images/products/recently_viewed_thumbnail_2-3.png',
    alt: '/images/products/recently_viewed_thumbnail_2-5.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-5.png',
    alt: '/images/products/recently_viewed_thumbnail_2-2.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-2.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-7.png',
  },
];

const productImages3 = [
  {
    main: '/images/products/recently_viewed_thumbnail_2-7.png',
    alt: '/images/products/recently_viewed_thumbnail_2-1.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-2.png',
    alt: '/images/products/recently_viewed_thumbnail_2-3.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-10.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-5.png',
  },
];

const productImages4 = [
  {
    main: '/images/products/recently_viewed_thumbnail_2-3.png',
    alt: '/images/products/recently_viewed_thumbnail_2-8.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-5.png',
    alt: '/images/products/recently_viewed_thumbnail_2-15.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-1.png',
  },
  {
    main: '/images/products/recently_viewed_thumbnail_2-5.png',
  },
];

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <Header></Header>
      </header>

      <main className="content container">
        <div className="layout-grid">
          <HomeCatalogPreview
            title="New Stuff"
            secondaryTitle="Spring Collection"
            images={productImages1}
            index={0}
          ></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
          <HomeCatalogPreview
            title="Most loved"
            secondaryTitle="Best reviewed"
            images={productImages2}
            index={1}
          ></HomeCatalogPreview>
        </div>

        <HomeContent></HomeContent>

        <div className="layout-grid">
          <HomeCatalogPreview
            title="WOMEN'S"
            secondaryTitle="MEN'S"
            images={productImages4}
            index={2}
          ></HomeCatalogPreview>
        </div>

        <div className="layout-grid">
          <HomeCatalogPreview
            title="MEN'S"
            secondaryTitle="WOMEN'S"
            images={productImages3}
            index={3}
          ></HomeCatalogPreview>
        </div>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}
