import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

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
