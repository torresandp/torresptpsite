
'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          'form-id': 'contact-form',
          'email': 'richard.torres@torresptp.com',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'message': formData.message
        }).toString()
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We will contact you within 24 hours.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '(484) 767-1741',
      description: 'Call us for immediate assistance'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'richard.torres@torresptp.com',
      description: 'Send us an email anytime'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Lehigh County, PA',
      description: 'Serving all of Pennsylvania'
    },
    {
      icon: 'ri-time-line',
      title: 'Business Hours',
      value: 'Flexible Schedule Available',
      description: 'Mon-Thu: 6PM-8PM, Sat-Sun: 9AM-8PM'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-amber-50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-semibold text-lg tracking-wide uppercase">Contact Us</span>
          <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Contact us today for a free consultation and discover how we can help you achieve your financial goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start bg-white p-6 rounded-2xl shadow-lg border border-amber-100">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                    <p className="text-lg text-amber-600 font-semibold mb-1">{info.value}</p>
                    <p className="text-gray-600">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-100">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Why Choose T&P Professional Services?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 text-xl mr-3"></i>
                  <span className="text-gray-700">Certified professionals with 15+ years experience</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 text-xl mr-3"></i>
                  <span className="text-gray-700">Personalized service tailored to your needs</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 text-xl mr-3"></i>
                  <span className="text-gray-700">Competitive pricing with no hidden fees</span>
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 text-xl mr-3"></i>
                  <span className="text-gray-700">Year-round support and consultation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-amber-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h3>
            
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={500}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none transition-all duration-300"
                  placeholder="Tell us about your needs or questions..."
                />
                <p className="text-xs text-gray-500 mt-2 text-right">{formData.message.length}/500 characters</p>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className={`p-4 rounded-xl text-center font-semibold ${
                  submitMessage.includes('Thank you') 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
