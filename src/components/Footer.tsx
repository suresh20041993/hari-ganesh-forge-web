
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">HGE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Hari Ganesh Engineering</h3>
                <p className="text-gray-400">Precision Turning & Milling</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Leading manufacturer of high-precision turned and milled components for industrial applications. 
              We deliver quality engineering solutions with state-of-the-art CNC machinery and experienced craftsmanship.
            </p>
            <div className="text-sm text-gray-400">
              <p>ISO 9001:2015 Certified</p>
              <p>Quality • Precision • Excellence</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-blue-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div>
                <p className="font-medium">Address:</p>
                <p className="text-sm">Industrial Estate, Sector 15<br />Mumbai, Maharashtra 400015</p>
              </div>
              <div>
                <p className="font-medium">Phone:</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-sm">info@hariganesheng.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <h4 className="text-lg font-semibold mb-4">Our Services</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
            <div>
              <ul className="space-y-1">
                <li>• CNC Turning</li>
                <li>• Precision Turning</li>
                <li>• Auto Components</li>
                <li>• Shaft Manufacturing</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• CNC Milling</li>
                <li>• Multi-axis Milling</li>
                <li>• Complex Geometries</li>
                <li>• Prototype Development</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• Quality Inspection</li>
                <li>• Material Testing</li>
                <li>• CAD/CAM Services</li>
                <li>• Reverse Engineering</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-1">
                <li>• Custom Components</li>
                <li>• Batch Production</li>
                <li>• Assembly Services</li>
                <li>• Supply Chain Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} Hari Ganesh Engineering. All rights reserved.</p>
          </div>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <p>Designed & Developed with precision engineering excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
