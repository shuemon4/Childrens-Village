import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };
  
  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Reach out with questions about our programs, enrollment, or to schedule a tour.
          </p>
        </div>
      </section>
      
      {/* Contact Information & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Get in Touch</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you as soon as possible.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Map & Contact Info */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Visit Us</h2>
              
              {/* Map Placeholder - In a real application, you would integrate Google Maps here */}
              <div className="bg-gray-300 h-48 md:h-64 mb-8 rounded-lg flex items-center justify-center p-4 text-center">
                <p className="text-gray-600 text-sm md:text-base">Map Placeholder - 10026 W 88th St, Overland Park, KS, 66212</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Address</h3>
                  <p className="text-gray-600">10026 W 88th St</p>
                  <p className="text-gray-600">Overland Park, KS, 66212</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Contact Information</h3>
                  <p className="text-gray-600">Phone: (913) 888-0434</p>
                  <p className="text-gray-600">Email: CVMSinfo@gmail.com</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Hours of Operation</h3>
                  <p className="text-gray-600">Monday - Friday: 7:00 am - 5:00 pm</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">How do I enroll my child?</h3>
              <p className="text-gray-600">
                You can start the enrollment process by filling out our online enrollment form or by contacting us directly. 
                We'll then schedule a tour and discuss the next steps based on availability in your child's age group.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">What are your COVID-19 policies?</h3>
              <p className="text-gray-600">
                We follow all local health department guidelines and have enhanced cleaning procedures in place. 
                Please contact us for the most up-to-date information on our health and safety protocols.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Do you provide meals?</h3>
              <p className="text-gray-600">
                Yes, we provide two snacks and lunch daily for all programs except infants. All meals are nutritionally 
                balanced and prepared fresh each day. We accommodate food allergies and dietary restrictions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">What is your staff-to-child ratio?</h3>
              <p className="text-gray-600">
                Our staff-to-child ratios exceed state requirements. For infants, we maintain a 1:4 ratio; 
                toddlers 1:6; preschool and pre-K 1:12. This ensures each child receives the attention they need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
