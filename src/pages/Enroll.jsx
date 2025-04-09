import React, { useState } from 'react';

const Enroll = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Parent Information
    parentFirstName: '',
    parentLastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    
    // Child Information
    childFirstName: '',
    childLastName: '',
    childDOB: '',
    childGender: '',
    allergies: '',
    specialNeeds: '',
    
    // Program Selection
    program: '',
    schedule: '',
    startDate: '',
    
    // Additional Information
    emergencyContact: '',
    emergencyPhone: '',
    howDidYouHear: '',
    additionalComments: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };
  
  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>1</div>
          <div className={`h-1 w-12 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>2</div>
          <div className={`h-1 w-12 ${step >= 3 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>3</div>
          <div className={`h-1 w-12 ${step >= 4 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 4 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>4</div>
        </div>
      </div>
    );
  };
  
  const renderParentInformation = () => {
    return (
      <div>
        <h3 className="text-2xl font-heading font-bold mb-6">Parent/Guardian Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="parentFirstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              id="parentFirstName"
              name="parentFirstName"
              value={formData.parentFirstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="parentLastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              id="parentLastName"
              name="parentLastName"
              value={formData.parentLastName}
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
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">ZIP Code</label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={nextStep}
            className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  };
  
  const renderChildInformation = () => {
    return (
      <div>
        <h3 className="text-2xl font-heading font-bold mb-6">Child Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="childFirstName" className="block text-gray-700 font-medium mb-2">First Name</label>
            <input
              type="text"
              id="childFirstName"
              name="childFirstName"
              value={formData.childFirstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="childLastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
            <input
              type="text"
              id="childLastName"
              name="childLastName"
              value={formData.childLastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="childDOB" className="block text-gray-700 font-medium mb-2">Date of Birth</label>
            <input
              type="date"
              id="childDOB"
              name="childDOB"
              value={formData.childDOB}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="childGender" className="block text-gray-700 font-medium mb-2">Gender</label>
            <select
              id="childGender"
              name="childGender"
              value={formData.childGender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="allergies" className="block text-gray-700 font-medium mb-2">Allergies or Medical Conditions (if any)</label>
            <textarea
              id="allergies"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="specialNeeds" className="block text-gray-700 font-medium mb-2">Special Needs or Accommodations (if any)</label>
            <textarea
              id="specialNeeds"
              name="specialNeeds"
              value={formData.specialNeeds}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg"
          >
            Previous Step
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  };
  
  const renderProgramSelection = () => {
    return (
      <div>
        <h3 className="text-2xl font-heading font-bold mb-6">Program Selection</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label htmlFor="program" className="block text-gray-700 font-medium mb-2">Program</label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Program</option>
              <option value="infant">Infant (2 weeks - 12 months)</option>
              <option value="toddler">Toddler (12 months - 2 years)</option>
              <option value="terrific-twos">Terrific Twos (2 years - 3 years)</option>
              <option value="preschool-non-potty">Preschool - Non-Potty Trained (3 years - 4 years)</option>
              <option value="preschool-potty">Preschool - Potty Trained (3 years - 4 years)</option>
              <option value="pre-k">Pre-Kindergarten (4 years - 5 years)</option>
            </select>
          </div>
          <div>
            <label htmlFor="schedule" className="block text-gray-700 font-medium mb-2">Schedule</label>
            <select
              id="schedule"
              name="schedule"
              value={formData.schedule}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Schedule</option>
              <option value="full-week">Full Week (Monday - Friday)</option>
              <option value="4-days">4 Days per Week</option>
              <option value="3-days">3 Days per Week</option>
            </select>
          </div>
          <div>
            <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Desired Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg"
          >
            Previous Step
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
          >
            Next Step
          </button>
        </div>
      </div>
    );
  };
  
  const renderAdditionalInformation = () => {
    return (
      <div>
        <h3 className="text-2xl font-heading font-bold mb-6">Additional Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="emergencyContact" className="block text-gray-700 font-medium mb-2">Emergency Contact Name</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="emergencyPhone" className="block text-gray-700 font-medium mb-2">Emergency Contact Phone</label>
            <input
              type="tel"
              id="emergencyPhone"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="howDidYouHear" className="block text-gray-700 font-medium mb-2">How did you hear about us?</label>
            <select
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select an option</option>
              <option value="friend">Friend or Family</option>
              <option value="google">Google Search</option>
              <option value="social">Social Media</option>
              <option value="website">Website</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="additionalComments" className="block text-gray-700 font-medium mb-2">Additional Comments or Questions</label>
            <textarea
              id="additionalComments"
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
        </div>
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-6 rounded-lg"
          >
            Previous Step
          </button>
          <button
            type="submit"
            className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
          >
            Submit Enrollment
          </button>
        </div>
      </div>
    );
  };
  
  const renderThankYou = () => {
    return (
      <div className="text-center py-12">
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8 inline-block">
          <svg className="w-6 h-6 inline-block mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span className="font-bold">Enrollment Form Submitted Successfully!</span>
        </div>
        <h2 className="text-3xl font-heading font-bold mb-4">Thank You for Your Interest!</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We've received your enrollment application for {formData.childFirstName} {formData.childLastName}. 
          A member of our team will review your application and contact you within 2-3 business days to discuss 
          the next steps in the enrollment process.
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          If you have any immediate questions, please don't hesitate to contact us at (913) 888-0434 or 
          email us at CVMSinfo@gmail.com.
        </p>
        <a href="/" className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg inline-block">
          Return to Home
        </a>
      </div>
    );
  };
  
  return (
    <div className="bg-neutral-light">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Enroll Your Child</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Begin your child's journey with Children's Village Montessori School by completing our enrollment form.
          </p>
        </div>
      </section>
      
      {/* Enrollment Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {formSubmitted ? (
              renderThankYou()
            ) : (
              <form onSubmit={handleSubmit}>
                {renderStepIndicator()}
                
                {step === 1 && renderParentInformation()}
                {step === 2 && renderChildInformation()}
                {step === 3 && renderProgramSelection()}
                {step === 4 && renderAdditionalInformation()}
              </form>
            )}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Enrollment FAQ</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">What happens after I submit the enrollment form?</h3>
              <p className="text-gray-600">
                After submitting your enrollment form, our admissions team will review your application and contact you 
                within 2-3 business days to discuss availability, schedule a tour if you haven't already visited, 
                and guide you through the next steps in the enrollment process.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Is there an enrollment fee?</h3>
              <p className="text-gray-600">
                Yes, there is a one-time, non-refundable enrollment fee of $100 per child. This fee is due upon 
                acceptance of your child's enrollment and helps cover administrative costs and classroom materials.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">What documents will I need to provide?</h3>
              <p className="text-gray-600">
                You will need to provide your child's birth certificate, immunization records, and a completed 
                health assessment form signed by your child's physician. These documents will be requested after 
                your initial application is accepted.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Do you offer financial assistance?</h3>
              <p className="text-gray-600">
                We understand that quality childcare is a significant investment. We offer limited financial 
                assistance based on need and availability. Please contact our office directly to discuss 
                potential options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enroll;
