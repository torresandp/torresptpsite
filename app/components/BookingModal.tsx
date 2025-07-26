
'use client';

import { useState, useEffect } from 'react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export default function BookingModal({ isOpen, onClose, preSelectedService }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    if (preSelectedService && isOpen) {
      setFormData(prev => ({
        ...prev,
        service: preSelectedService
      }));
    }
  }, [preSelectedService, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
          'form-id': 'booking-form',
          'name': formData.name,
          'email': formData.email,
          'phone': formData.phone,
          'service': formData.service,
          'preferredDate': formData.preferredDate,
          'preferredTime': formData.preferredTime,
          'message': formData.message
        }).toString()
      });
      
      if (response.ok) {
        setSubmitStatus('Consultation scheduled successfully! We will contact you within 24 hours to confirm your appointment.');
        setFormData({ name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '' });
      } else {
        setSubmitStatus('Sorry, there was an error scheduling your consultation. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error scheduling your consultation. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-amber-100">
        <div className="p-8 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Schedule Your Free Consultation</h2>
              <p className="text-gray-600 mt-2">Book a personalized consultation with our certified professionals</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full cursor-pointer transition-all duration-200"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>
          </div>
        </div>

        <div className="p-8">
          <form id="booking-form" onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-name" className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="booking-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="booking-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="booking-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="booking-service" className="block text-sm font-semibold text-gray-700 mb-3">
                  Service Needed *
                </label>
                <select
                  id="booking-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm pr-8 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="tax-preparation">Tax Preparation</option>
                  <option value="bookkeeping">Bookkeeping Services</option>
                  <option value="payroll">Payroll Processing</option>
                  <option value="consulting">Financial Consulting</option>
                  <option value="business-planning">Business Planning</option>
                  <option value="general">General Consultation</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="booking-date" className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="booking-date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="booking-time" className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Time *
                </label>
                <select
                  id="booking-time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm pr-8 transition-all duration-300"
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="booking-message" className="block text-sm font-semibold text-gray-700 mb-3">
                Additional Information
              </label>
              <textarea
                id="booking-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm resize-none transition-all duration-300"
                placeholder="Tell us about your specific needs, questions, or any documents you'd like to discuss..."
              />
              <p className="text-xs text-gray-500 mt-2 text-right">{formData.message.length}/500 characters</p>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="whitespace-nowrap flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap flex-1 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none"
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Consultation'}
              </button>
            </div>
            
            {submitStatus && (
              <div className={`text-center p-4 rounded-xl font-semibold ${
                submitStatus.includes('scheduled') 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
