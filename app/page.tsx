import Banner from "./components/Banner";
import HomeContainer from "./components/Home";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />
      <HomeContainer />
      <Footer />
    </main>
  );
}
