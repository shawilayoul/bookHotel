import "./home.css";
import Header from "../../components/header/Header";
import Features from "../../components/features/Features";
import Property from "../../components/property/Property";
import HGuest from "../../components/HGuests/HGuest";
import Footer from "../../components/footer/Footer";


const Home = () => {
 
  return (
    <div>
      <div className="homeNav">
        <Header />
      </div>
      <div className="homeContainer">
        <Features />
        <h2>Browser by property type</h2>
        <Property />
        <h2>Home guests love</h2>
        <HGuest />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
