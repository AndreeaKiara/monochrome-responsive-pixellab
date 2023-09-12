// import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <div className="home">
      <header className="header container">
        <Header></Header>
      </header>
      <button className="button button-primary">view all</button>
    </div>
  );
}
