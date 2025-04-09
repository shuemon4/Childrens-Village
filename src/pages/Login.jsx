import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleResetEmailChange = (e) => {
    setResetEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the login credentials to a server for authentication
    console.log('Login attempt:', formData);
    // For demo purposes, we'll just redirect to a mock dashboard
    window.location.href = '/';
  };
  
  const handleForgotPassword = (e) => {
    e.preventDefault();
    // In a real application, you would send a password reset email
    console.log('Password reset requested for:', resetEmail);
    setResetEmailSent(true);
  };
  
  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
    setResetEmailSent(false);
  };
  
  return (
    <div className="bg-neutral-light min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Parent Portal Login</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Access your child's information, view updates, and manage your account.
          </p>
        </div>
      </section>
      
      {/* Login Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            {showForgotPassword ? (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Reset Password</h2>
                
                {resetEmailSent ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <p>If an account exists with this email, you will receive password reset instructions shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleForgotPassword} className="space-y-6">
                    <div>
                      <label htmlFor="resetEmail" className="block text-gray-700 font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        id="resetEmail"
                        value={resetEmail}
                        onChange={handleResetEmailChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
                    >
                      Send Reset Link
                    </button>
                  </form>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    onClick={toggleForgotPassword}
                    className="text-primary hover:underline font-medium"
                  >
                    Back to Login
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">Login to Your Account</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Enter your password"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Remember me
                      </label>
                    </div>
                    
                    <button
                      type="button"
                      onClick={toggleForgotPassword}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Forgot your password?
                    </button>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg"
                  >
                    Sign In
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600">
                    Don't have an account yet?{' '}
                    <a href="/enroll" className="text-primary hover:underline font-medium">
                      Enroll your child
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Brightwheel Integration Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Brightwheel Integration</h2>
            <p className="text-lg text-gray-600 mb-8">
              We use Brightwheel to keep you connected with your child's daily activities, 
              share photos, send announcements, and manage billing. If you're already using 
              Brightwheel, you can access it directly.
            </p>
            <a 
              href="https://mybrightwheel.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-secondary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg inline-block"
            >
              Access Brightwheel
            </a>
          </div>
        </div>
      </section>
      
      {/* Help Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Need Help?</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Login Issues</h3>
              <p className="text-gray-600">
                If you're having trouble logging in, please try resetting your password. If you continue 
                to experience issues, contact our office for assistance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">First-Time Login</h3>
              <p className="text-gray-600">
                After enrolling your child, you will receive an email with instructions to set up your 
                parent portal account. If you haven't received this email, please check your spam folder 
                or contact us.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">Contact Support</h3>
              <p className="text-gray-600">
                For technical support or questions about your account, please contact us at (913) 888-0434 
                or email CVMSinfo@gmail.com during our office hours (Monday - Friday, 7:00 am - 5:00 pm).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
