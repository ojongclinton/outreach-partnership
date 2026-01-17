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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Basic validation
    if (!formData.full_name || !formData.email || !formData.telephone) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const result = await saveLeadToFirestore(formData);

    if (result.success) {
      // Redirect to Calendly
      window.open(calendlyUrl, '_blank');
      onClose();
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        telephone: '',
        business_name: '',
        goal: '',
      });
    } else {
      setError('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
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
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-accent-cyan to-accent-cyan/80 text-primary-bg font-display font-bold rounded-lg hover:shadow-lg hover:shadow-accent-cyan/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Continue to Schedule Call'
                )}
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
