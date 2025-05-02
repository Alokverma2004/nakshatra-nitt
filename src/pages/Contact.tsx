
import { useState, FormEvent, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  // Animation for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-space-darker">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-purple/30 via-transparent to-transparent opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6 text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to connect with Nakshatra? We'd love to hear from you!
          </p>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-card p-8 reveal">
              <h2 className="text-2xl font-bold font-poppins mb-6 text-white">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-space-purple/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-300 mt-1">nakshatra@nitt.edu</p>
                    <p className="text-gray-400 mt-1 text-sm">We typically respond within 24-48 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-space-purple/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Location</h3>
                    <p className="text-gray-300 mt-1">Department of Physics</p>
                    <p className="text-gray-300">National Institute of Technology</p>
                    <p className="text-gray-300">Tiruchirappalli, Tamil Nadu, India - 620015</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-space-purple/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-space-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Club Meetings</h3>
                    <p className="text-gray-300 mt-1">Every Friday, 6:00 PM - 8:00 PM</p>
                    <p className="text-gray-300">Physics Department Seminar Hall</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-space-darker text-gray-300 hover:text-white p-2 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-space-darker text-gray-300 hover:text-white p-2 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-space-darker text-gray-300 hover:text-white p-2 rounded-full transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="reveal">
              <div className="space-card p-8">
                <h2 className="text-2xl font-bold font-poppins mb-6 text-white">Send Us a Message</h2>
                {isSubmitted ? (
                  <div className="bg-green-700/20 border border-green-700 text-white p-4 rounded-md">
                    <h3 className="font-semibold text-lg mb-2">Thank you for your message!</h3>
                    <p>We've received your inquiry and will get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-space-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-space-purple"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-space-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-space-purple"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-space-purple"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Membership">Membership</option>
                        <option value="Events">Events</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-darker border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-space-purple"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className={`btn-primary w-full flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="section bg-space-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-poppins font-bold mb-4 heading">Find Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Visit us at the Department of Physics, NIT Trichy
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden h-96 reveal">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5732609407598!2d78.80855931091906!3d10.759823689351944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf0cb11eb1b33%3A0xda4e92c5bcd41c1f!2sNational%20Institute%20of%20Technology%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1651063560853!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="NIT Trichy Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section bg-space-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-poppins font-bold mb-4 heading">Frequently Asked Questions</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about Nakshatra and our activities
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-2">How can I join Nakshatra?</h3>
              <p className="text-gray-300">
                Any student at NIT Trichy with an interest in astronomy can join Nakshatra. We hold membership drives at the beginning of each academic year, but you can also reach out to us anytime through our contact form or by attending our weekly meetings.
              </p>
            </div>
            
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-2">Do I need prior knowledge of astronomy to join?</h3>
              <p className="text-gray-300">
                Not at all! We welcome members with all levels of astronomy knowledge, from complete beginners to experienced stargazers. Our activities and sessions cater to different levels, and we're always happy to help newcomers learn about the cosmos.
              </p>
            </div>
            
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-2">When and where are club meetings held?</h3>
              <p className="text-gray-300">
                We typically meet every Friday from 6:00 PM to 8:00 PM at the Physics Department Seminar Hall. Special events like stargazing sessions may be held at different times and locations, which we announce on our social media and through email to members.
              </p>
            </div>
            
            <div className="space-card p-6 reveal">
              <h3 className="text-xl font-bold text-white mb-2">Can non-NIT Trichy students participate in your events?</h3>
              <p className="text-gray-300">
                Many of our major events like AstroFest and public stargazing sessions are open to the wider community. However, regular club activities and meetings are primarily for NIT Trichy students. If you're interested in a specific event, please contact us for details on participation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
