
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const EnquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    serviceType: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    // Send enquiry data to backend API
  fetch("https://mail-service-wtzm.onrender.com/send-mail", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    to: "hariganeshengg2012@gmail.com",
    subject:"New Enquiry from Website",
    message: `
      📩 New Enquiry Received!

      👤 Name       : ${formData.name}
      📧 Email      : ${formData.email}
      📱 Phone      : ${formData.phone}
      🏢 Company    : ${formData.company}
      🛠️ Service    : ${formData.serviceType}
      📝 Message    : ${formData.message}
    `,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    company: formData.company,
    serviceType: formData.serviceType
  })
}).catch((err) => {
  toast({
    title: "Error",
    description: "Failed to send enquiry. Please try again later.",
    variant: "destructive"
  });
});


    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your enquiry. We'll get back to you within 24 hours !.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      serviceType: ""
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your precision engineering requirements? Send us an enquiry and our team will respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
         <div className="w-full px-0">
  <Card className="w-full">
    <CardHeader>
      <CardTitle className="text-2xl text-blue-600">Contact Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">

      {/* Address + Map Section */}
      <div className="flex flex-col md:flex-row md:gap-8 gap-4 w-full">
        {/* Address */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-600">
            No 2/84 VM Building, Nethaji Nagar,<br />
            1st cross Mookandapalli, Hosur(TK) <br />
            635126 - Krishnagiri<br />
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full md:w-1/2 rounded-lg overflow-hidden border border-gray-300 shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4332.362171742479!2d77.80063937198129!3d12.750773295548361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70e2a3c22b27%3A0x20e6182a083fdc71!2sHARI%20GANESH%20ENGINEERING!5e1!3m2!1sen!2sin!4v1749918034787!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Phone */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Phone</h3>
        <p className="text-gray-600">+91 9043414421</p>
      </div>

      {/* Email */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Email</h3>
        <p className="text-gray-600">hariganeshengg2012@gmail.com</p>
      </div>

      {/* Business Hours */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
        <p className="text-gray-600">Sunday: Closed</p>
      </div>

    </CardContent>
  </Card>
</div>




          {/* Enquiry Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Send Enquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="serviceType">Service Type</Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Service</option>
                      <option value="Turning">Turning</option>
                      <option value="Milling">Milling</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message / Requirements *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Please describe your requirements, specifications, quantity, timeline, etc."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
