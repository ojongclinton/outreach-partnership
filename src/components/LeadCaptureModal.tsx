import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { saveLeadToFirestore } from '../lib/firebase';
import type { LeadData } from '../lib/firebase';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl: string;
}

export default function LeadCaptureModal({ isOpen, onClose, calendlyUrl }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState<LeadData>({
    full_name: '',
    email: '',
    telephone: '',
    business_name: '',
    goal: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.full_name || !formData.email || !formData.telephone) {
      setError('Please fill in all required fields');
      return;
    }

    // Redirect to Calendly immediately (don't wait for Firebase)
    window.open(calendlyUrl, '_blank');
    onClose();

    // Save to Firebase in background (fire and forget)
    saveLeadToFirestore(formData).catch(err => {
      console.error('Failed to save lead:', err);
    });

    // Reset form
    setFormData({
      full_name: '',
      email: '',
      telephone: '',
      business_name: '',
      goal: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-md bg-secondary-bg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-1">
                  Book Your Free Strategy Call
                </h2>
                <p className="text-white/60 text-sm">
                  Tell us a bit about yourself so we can prepare for our call
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full_name" className="block text-white/80 text-sm mb-1.5">
                  Full Name <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-primary-bg border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 text-sm mb-1.5">
                  Email Address <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-primary-bg border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="telephone" className="block text-white/80 text-sm mb-1.5">
                  Phone Number <span className="text-accent-orange">*</span>
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  placeholder="+237 6XX XXX XXX"
                  className="w-full px-4 py-3 bg-primary-bg border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="business_name" className="block text-white/80 text-sm mb-1.5">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  placeholder="Your Company Ltd."
                  className="w-full px-4 py-3 bg-primary-bg border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan transition-colors"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-white/80 text-sm mb-1.5">
                  What's your main goal?
                </label>
                <textarea
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  placeholder="I want to grow my online presence and get more customers..."
                  rows={3}
                  className="w-full px-4 py-3 bg-primary-bg border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-accent-cyan text-primary-bg font-display font-bold hover:bg-accent-orange transition-colors"
              >
                Continue to Schedule Call
              </button>

              <p className="text-white/40 text-xs text-center">
                Your information is secure and will only be used to prepare for your call.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
