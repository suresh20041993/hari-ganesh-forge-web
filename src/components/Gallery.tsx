
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "/assets/IMG_20250601_151321.jpg",
      title: "CNC Turning Machine",
      description: "High-precision turning operations"
    },
    {
      url: "/assets/IMG_20250601_151451.jpg",
      title: "Milling Operations", 
      description: "Advanced multi-axis milling"
    },
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Quality Control",
      description: "Precision measurement and inspection"
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      title: "Finished Components",
      description: "High-quality machined parts"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Capabilities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our state-of-the-art manufacturing facility and precision-engineered components
          </p>
        </div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].title}
              className="w-full h-full object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-2xl font-semibold mb-2">{images[currentImage].title}</h3>
              <p className="text-gray-200">{images[currentImage].description}</p>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                currentImage === index ? 'border-blue-600 scale-105' : 'border-gray-300'
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
