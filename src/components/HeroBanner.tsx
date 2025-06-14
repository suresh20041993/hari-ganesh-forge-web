
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Precision <span className="text-blue-300">Engineering</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Leading manufacturer of high-precision turned and milled components for industrial applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Get Quote
              </Button>
            </a>
            <a href="#gallery">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-300 text-blue-300 hover:bg-blue-700 px-8 py-3 text-lg"
              >
                View Gallery
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Industrial Pattern Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
