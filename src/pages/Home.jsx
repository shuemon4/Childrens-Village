import React from 'react';
import NewsBanner from '../components/common/NewsBanner';

const Home = () => {
  return (
    <div className="bg-neutral-light">
      
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Welcome to Children's Village School
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading mb-6">
                Where Every Child Thrives
              </h2>
              <p className="text-lg mb-8">
                Providing a safe, nurturing environment with professional care and an easy enrollment process for children ages 2 weeks to 5 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://mybrightwheel.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white hover:bg-opacity-90 text-primary font-bold py-3 px-6 rounded-lg text-center"
                >
                  Brightwheel Login
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/SchoolBuilding.jpg" 
                  alt="Children's Village Montessori School Building" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Banner Section */}
      <NewsBanner />
      
      {/* Key Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Why Choose Children's Village?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2">Experienced Staff</h3>
              <p className="text-center text-gray-600">Our dedicated teachers have years of experience in early childhood education and are committed to your child's development.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2">Montessori Curriculum</h3>
              <p className="text-center text-gray-600">Our program follows Montessori principles, focusing on hands-on learning and individualized education plans.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2">Safe Environment</h3>
              <p className="text-center text-gray-600">Our facility is designed with safety in mind, featuring secure access, sanitized spaces, and age-appropriate equipment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Preview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/Infants.jpg" 
                  alt="Infant Program" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Infant Program</h3>
                <p className="text-gray-600 mb-4">For children 2 weeks to 12 months. We teach baby sign language and focus on developmental milestones.</p>
                <a href="/programs" className="text-primary font-bold hover:underline">Learn More →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/Toddlers.jpg" 
                  alt="Toddler Program" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Toddler Program</h3>
                <p className="text-gray-600 mb-4">For children 12 months to 2 years. We focus on language development and basic Montessori work.</p>
                <a href="/programs" className="text-primary font-bold hover:underline">Learn More →</a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src="/PreK.jpg" 
                  alt="Pre-K Program" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Pre-K Program</h3>
                <p className="text-gray-600 mb-4">For children 4 to 5 years. We prepare children for kindergarten with a focus on literacy and independence.</p>
                <a href="/programs" className="text-primary font-bold hover:underline">Learn More →</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/programs" className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg inline-block">View All Programs</a>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-heading font-bold">Sarah Johnson</h3>
                  <p className="text-sm text-gray-600">Parent of Alex, Pre-K</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"Children's Village has been a wonderful experience for our family. The teachers are caring and attentive, and our son has thrived in their Pre-K program. We've seen tremendous growth in his social skills and academic readiness."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-gray-300 w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <h3 className="font-heading font-bold">Michael Rodriguez</h3>
                  <p className="text-sm text-gray-600">Parent of Emma, Toddler Program</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"We were nervous about daycare at first, but Children's Village made the transition so smooth. The staff is professional and communicative, and our daughter loves going to school each day. The Montessori approach has really helped her develop independence."</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Enrollment is open for all age groups. Schedule a tour or start the enrollment process today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enroll" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg">Enroll Now</a>
            <a href="/contact" className="bg-white hover:bg-opacity-90 text-primary font-bold py-3 px-6 rounded-lg">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
