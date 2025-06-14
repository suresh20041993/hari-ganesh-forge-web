
const VideoSection = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Manufacturing Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our state-of-the-art turning and milling operations in action, 
            delivering precision components for various industries.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <video
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            controls
            poster="/assets/IMG_20250601_151321.jpg"
          >
            <source src="/assets/VID_20250601_151324.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Precision Turning</h3>
            <p className="text-gray-600">High-precision CNC turning for complex cylindrical components</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">M</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced Milling</h3>
            <p className="text-gray-600">Multi-axis milling for intricate geometries and tight tolerances</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">Q</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Rigorous quality control ensuring industry-leading standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
