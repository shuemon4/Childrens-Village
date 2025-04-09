import React from 'react';

const ProgramCard = ({ title, ageRange, description, pricing, ratio, classSize, isFull = false }) => {
  // Function to get the image path based on the program title
  const getProgramImage = (title) => {
    switch(title) {
      case 'Infant':
        return '/Infants.jpg';
      case 'Toddler':
        return '/Toddlers.jpg';
      case 'Terrific Twos':
        return '/Twos.jpg';
      case 'Preschool (Non-Potty Trained)':
      case 'Preschool (Potty Trained)':
        return '/Preschool.jpg';
      case 'Pre-Kindergarten':
        return '/PreK.jpg';
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-48 overflow-hidden">
        <img 
          src={getProgramImage(title)} 
          alt={`${title} Program`} 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-heading font-bold">{title}</h3>
          {isFull && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
              Full
            </span>
          )}
        </div>
        <p className="text-primary font-medium mb-4">{ageRange}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="font-heading font-bold text-sm mb-1">Teacher-Child Ratio</h4>
            <p className="text-gray-600">{ratio}</p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm mb-1">Class Size</h4>
            <p className="text-gray-600">{classSize} children</p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-heading font-bold text-sm mb-2">Pricing Options</h4>
          <ul className="space-y-1">
            {pricing.map((price, index) => (
              <li key={index} className="text-gray-600">{price}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Programs = () => {
  const programsData = [
    {
      title: "Infant",
      ageRange: "2 weeks - 12 months",
      description: "In our infant program we teach baby sign language as well as developing first words. We introduce basic Montessori Work that focuses on fine motor skills and sensorial applications. We work with the child one-on-one based on their own gross motor skills (crawling, rolling over, walking, etc.) by using techniques that works for the child. We enrich the babies with love as they begin to grow and learn.",
      pricing: [
        "Weekly - $350",
        "4 days - $325",
        "3 days - $300"
      ],
      ratio: "1:4",
      classSize: 8,
      isFull: false
    },
    {
      title: "Toddler",
      ageRange: "12 months - 2 years",
      description: "For our toddler program, CVMS supplies 2 snacks and a lunch daily with milk. We teach baby sign language as well as using verbal cues. We introduce basic Montessori work that the children can use to improve their gross and fine motor skills. We introduce basic shapes, counting and recognizing numbers 1-10, and basic colors but our focus is language development. We use exploration of play and use different forms of sensorial activities such as textile objects and different craft media.",
      pricing: [
        "Weekly - $285",
        "4 days - $270",
        "3 days - $255"
      ],
      ratio: "1:6",
      classSize: 10,
      isFull: true
    },
    {
      title: "Terrific Twos",
      ageRange: "2 years - 3 years",
      description: "For our twos program, CVMS supplies 2 snacks and Lunch daily with Milk. We work on recognizing basic shapes, counting and recognizing numbers 1-10, and basic colors. We work on name recognition. We continue to expand on language development. We do a lot of different crafts to assist with fine motor development. We work on social, emotional, and some independent skills. We continue with a lot of sensory play activities and while still focusing on gross motor, we expand on fine motor skills. We also start to work on potty training.",
      pricing: [
        "Weekly - $285",
        "4 days - $270",
        "3 days - $255"
      ],
      ratio: "1:7",
      classSize: 14,
      isFull: false
    },
    {
      title: "Preschool (Non-Potty Trained)",
      ageRange: "3 years - 4 years",
      description: "For our preschool program. We continue to work on basic shapes and introduce more advanced shapes, counting and recognizing numbers 1-20, basic and secondary colors. We focus on handwriting skills such as tracing and work towards writing their names' independently. We work on pre-kindergarten readiness skills such as cutting straight lines and independent skills such as putting on socks and shoes with minimal assistance. In Preschool we focus on letter recognition and introduce beginning sounds. We follow a phonological awareness program called Heggerty. For Preschool, we do our Heggerty program 3 days a week.",
      pricing: [
        "Weekly - $285",
        "4 days - $270",
        "3 days - $255"
      ],
      ratio: "1:12",
      classSize: 24,
      isFull: false
    },
    {
      title: "Preschool (Potty Trained)",
      ageRange: "3 years - 4 years",
      description: "For our preschool program. We continue to work on basic shapes and introduce more advanced shapes, counting and recognizing numbers 1-20, basic and secondary colors. We focus on handwriting skills such as tracing and work towards writing their names' independently. We work on pre-kindergarten readiness skills such as cutting straight lines and independent skills such as putting on socks and shoes with minimal assistance. In Preschool we focus on letter recognition and introduce beginning sounds. We follow a phonological awareness program called Heggerty. For Preschool, we do our Heggerty program 3 days a week.",
      pricing: [
        "Weekly - $250",
        "4 days - $235",
        "3 days - $230"
      ],
      ratio: "1:12",
      classSize: 24,
      isFull: false
    },
    {
      title: "Pre-Kindergarten",
      ageRange: "4 years - 5 years",
      description: "For our pre-k program. This program is for students who will be turning 5 years old and entering Kindergarten. We work on many different kindergarten readiness skills. We focus on handwriting skills such as 'mastering' writing their names independently by the end of the school year, and handwriting the alphabet letters. We work on readiness skills such as cutting different lines and independent skills such as putting on socks and shoes with no assistance. We continue to teach letter recognition as well as recognizing phonetic sounds. We follow a phonological awareness program called Heggerty. For Prekindergarten, we do our Heggerty program 5 days a week.",
      pricing: [
        "Weekly - $250",
        "4 days - $235",
        "3 days - $220"
      ],
      ratio: "1:12",
      classSize: 12,
      isFull: false
    }
  ];

  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our age-appropriate programs designed to nurture your child's development from infancy through pre-kindergarten.
          </p>
        </div>
      </section>
      
      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6">Age-Appropriate Learning</h2>
            <p className="text-lg text-gray-600">
              At Children's Village Montessori School, we offer specialized programs for each developmental stage. 
              Our curriculum is designed to meet the unique needs of children at different ages, providing the right 
              balance of nurturing care, play-based learning, and academic preparation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Curriculum Approach */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading font-bold mb-6">Our Montessori Approach</h2>
              <p className="mb-4 text-gray-600">
                Our curriculum is inspired by Montessori principles, which emphasize hands-on learning, 
                self-directed activity, and collaborative play. We believe that children learn best when 
                they are engaged in activities that interest them and are appropriate for their developmental level.
              </p>
              <p className="mb-4 text-gray-600">
                Each classroom is carefully prepared with materials that invite exploration and discovery. 
                Our teachers serve as guides, observing each child's interests and abilities and providing 
                appropriate challenges and support.
              </p>
              <p className="text-gray-600">
                We integrate the Heggerty phonological awareness program into our preschool and pre-kindergarten 
                curriculum to build strong foundations for reading and language development.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/Playground.jpg" 
                  alt="Children playing in our outdoor playground" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Daily Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Sample Daily Schedule</h2>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-heading font-bold text-center">Preschool Program</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold w-24">7:00 AM</span>
                  <span className="text-gray-600">Arrival and Free Play</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">8:30 AM</span>
                  <span className="text-gray-600">Morning Circle Time</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">9:00 AM</span>
                  <span className="text-gray-600">Montessori Work Time</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">10:00 AM</span>
                  <span className="text-gray-600">Morning Snack</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">10:30 AM</span>
                  <span className="text-gray-600">Outdoor Play</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">11:30 AM</span>
                  <span className="text-gray-600">Lunch</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">12:30 PM</span>
                  <span className="text-gray-600">Rest/Nap Time</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">2:30 PM</span>
                  <span className="text-gray-600">Afternoon Snack</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">3:00 PM</span>
                  <span className="text-gray-600">Afternoon Activities (Art, Music, Science)</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">4:00 PM</span>
                  <span className="text-gray-600">Outdoor Play</span>
                </li>
                <li className="flex">
                  <span className="font-bold w-24">4:30 PM</span>
                  <span className="text-gray-600">Free Play and Departure</span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-gray-500 italic">
                Note: Schedules vary by age group and are adjusted to meet the needs of each classroom.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Enroll Your Child?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Spaces are limited in each program. Contact us today to check availability and start the enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/enroll" className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg">
              Enroll Now
            </a>
            <a href="/contact" className="bg-white hover:bg-opacity-90 text-primary font-bold py-3 px-6 rounded-lg">
              Schedule a Tour
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
