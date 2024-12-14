import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import GalleryPage from "./Pages/GalleryPage";
import LandingPage from "./Pages/LandingPage";
import LaunchingSoon from "./Pages/LaunchingSoon";
import Location from "./Pages/Location";
import Offers from "./Pages/Offers";
import QuoateSection from "./Pages/QuoateSection";
import WaitingList from "./Pages/WaitingList";
import WhyUs from "./Pages/WhyUs";

const App = () => {
  return (
    <div className=" bg-black text-white flex flex-col gap-2">
      <Header />
      <main className=" mt-[100px] md:mt-[100px]">
        <LandingPage />
        <LaunchingSoon />
        <section className=" p-4">
          <AboutUs />
          <WhyUs />
          <GalleryPage />
          <Offers />
          <WaitingList />
          <QuoateSection />
          <ContactUs />
          <Location />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
