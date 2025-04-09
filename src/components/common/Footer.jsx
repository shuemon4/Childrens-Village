import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-dark text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Children's Village</h3>
            <p className="mb-2">10026 W 88th St</p>
            <p className="mb-2">Overland Park, KS, 66212</p>
            <p className="mb-2">Phone: (913) 888-0434</p>
            <p className="mb-2">Email: CVMSinfo@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Hours</h3>
            <p className="mb-2">Monday - Friday: 7:00 am - 5:00 pm</p>
            <p className="mb-2">Saturday - Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-secondary">Home</a></li>
              <li><a href="/about" className="hover:text-secondary">About Us</a></li>
              <li><a href="/programs" className="hover:text-secondary">Programs</a></li>
              <li><a href="/enroll" className="hover:text-secondary">Enroll</a></li>
              <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Children's Village Montessori School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
