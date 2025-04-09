import React from 'react';

const About = () => {
  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our history, mission, and the dedicated team behind Children's Village Montessori School.
          </p>
        </div>
      </section>
      
      {/* Introduction / History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/SchoolBuilding.jpg" 
                  alt="Children's Village Montessori School Building" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Story</h2>
              <p className="mb-4">
                Children's Village Montessori School was founded with a simple mission: to provide high-quality, 
                nurturing care and education for young children in a safe and stimulating environment.
              </p>
              <p className="mb-4">
                Since our founding, we have been dedicated to the Montessori philosophy, which emphasizes 
                child-centered learning, independence, and respect for each child's natural development.
              </p>
              <p>
                Today, we continue to grow and evolve, but our core values remain the same: to foster a 
                love of learning, build confidence, and help each child develop to their fullest potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Staff Profiles Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Charissa.jpg" 
                  alt="Charissa Meyers - Director" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Charissa Meyers</h3>
                <p className="text-primary font-medium mb-4">Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in early childhood education, Charissa leads our school 
                  with passion and dedication. She holds a Master's degree in Education and is certified in 
                  Montessori teaching methods.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Michelle.jpg" 
                  alt="Michelle Shuey - Assistant Director" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Michelle Shuey</h3>
                <p className="text-primary font-medium mb-4">Assistant Director</p>
                <p className="text-gray-600">
                  Michelle brings a wealth of knowledge in child development and curriculum planning. 
                  She works closely with our teaching staff to ensure the highest quality educational 
                  experience for all children.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/Toby.jpg" 
                  alt="Toby Oberzan - Lead Teacher" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Toby Oberzan</h3>
                <p className="text-primary font-medium mb-4">Lead Teacher</p>
                <p className="text-gray-600">
                  Toby specializes in early childhood development and has been with Children's Village 
                  for over 8 years. His creative approach to learning engages children and makes every 
                  day an adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy and Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Philosophy</h2>
            <p className="mb-8 text-lg">
              At Children's Village Montessori School, we believe that every child is unique and deserves 
              an education tailored to their individual needs, interests, and developmental stage.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Child-Centered Learning</h3>
                <p className="text-gray-600">
                  We follow the Montessori approach, which places the child at the center of the learning 
                  experience. Our classrooms are designed to allow children to explore and discover at their 
                  own pace, with teachers serving as guides rather than instructors.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Holistic Development</h3>
                <p className="text-gray-600">
                  We focus on the whole child—intellectual, physical, social, and emotional development. 
                  Our curriculum includes activities that promote fine and gross motor skills, language 
                  development, social interaction, and cognitive growth.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Prepared Environment</h3>
                <p className="text-gray-600">
                  Our classrooms are carefully designed with child-sized furniture and materials that are 
                  accessible, organized, and inviting. This prepared environment allows children to develop 
                  independence and a sense of order.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Respect for the Child</h3>
                <p className="text-gray-600">
                  We treat each child with respect and dignity, acknowledging their thoughts, feelings, and 
                  ideas. We believe that this respect fosters self-confidence and a positive attitude toward 
                  learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Come See Us in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            The best way to understand our approach is to visit our school and see our classrooms in action. 
            Schedule a tour today to learn more about our programs and meet our staff.
          </p>
          <a href="/contact" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg inline-block">
            Schedule a Tour
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
