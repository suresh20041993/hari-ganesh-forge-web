
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import VideoSection from "../components/VideoSection";
import Gallery from "../components/Gallery";
import EnquiryForm from "../components/EnquiryForm";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroBanner />
      <VideoSection />
      <Gallery />
      <EnquiryForm />
      <Footer />
    </div>
  );
};

export default Index;
