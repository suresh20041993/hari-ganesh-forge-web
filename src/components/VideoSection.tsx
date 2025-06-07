
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
          <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Manufacturing Excellence</h3>
                <p className="text-gray-300">Click to watch our precision machining process</p>
              </div>
            </div>
            {/* Placeholder for actual video */}
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
              alt="Manufacturing process"
              className="w-full h-full object-cover opacity-30"
            />
          </div>
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
