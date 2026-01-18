import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaStar, FaQuoteLeft, FaTimes, FaCheck } from 'react-icons/fa';
import { BsCheckLg, BsFire, BsX } from 'react-icons/bs';
import { HiOutlineArrowRight } from 'react-icons/hi';
import LeadCaptureModal from './components/LeadCaptureModal';

export default function SalesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';

  const handleCTAClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-primary-bg text-white">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/20 border border-accent-orange/50 mb-8">
              <BsFire className="text-accent-orange" />
              <span className="text-accent-orange text-sm font-bold uppercase tracking-wider">
                Only 5 Spots Left This Month
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-8">
              Get More Customers
              <br />
              <span className="text-accent-cyan">Without The Hassle</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              We handle your marketing and build the systems you need to grow — so you can focus on running your business.
            </p>

            <button
              onClick={handleCTAClick}
              className="px-12 py-5 bg-accent-cyan text-primary-bg font-display font-bold text-lg uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Book Your Free Strategy Call
            </button>

            <p className="mt-6 text-gray-500 text-sm">
              Free 30-minute call. No obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 lg:py-28 bg-secondary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
            Sound Familiar?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            If any of these hit home, you're in the right place.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "You know you need to be online, but you don't know where to start",
              "You've paid for ads before and got nothing back",
              "Your website looks outdated and you're embarrassed to share it",
              "You're losing customers to competitors who show up first on Google",
              "You've hired freelancers who disappeared or delivered garbage",
              "You're doing everything manually — bookings, follow-ups, invoices",
              "You don't have time to post on social media every day",
              "You've been \"meaning to\" fix your online presence for months",
            ].map((pain, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-primary-bg border-l-4 border-accent-orange"
              >
                <BsX className="text-accent-orange text-2xl flex-shrink-0 mt-1" />
                <p className="text-lg text-gray-300">{pain}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-2xl md:text-3xl font-bold text-white mb-8">
              You don't have a marketing problem.<br />
              <span className="text-accent-cyan">You have a "too many things to figure out" problem.</span>
            </p>
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Let Us Handle It
            </button>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
            Here's What You Get
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'More Visibility',
                description: 'Show up where your customers are searching. We run your ads and manage your social media.',
              },
              {
                title: 'More Leads',
                description: 'Capture interested customers with landing pages and lead forms that actually convert.',
              },
              {
                title: 'More Sales',
                description: 'Turn visitors into paying customers with a website built to sell.',
              },
              {
                title: 'Save Time',
                description: 'Automate your bookings, reminders, and follow-ups. Stop doing everything manually.',
              },
              {
                title: 'One Team',
                description: 'No more juggling freelancers. Marketing and tech handled under one roof.',
              },
              {
                title: 'Real Results',
                description: "Monthly reports showing what's working. We focus on revenue, not vanity metrics.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-secondary-bg border border-tertiary-bg"
              >
                <h3 className="font-display text-2xl font-bold text-accent-cyan mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-secondary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Simple process. No confusion. No runaround.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '01',
                title: 'Book a Call',
                description: "Schedule a free 30-minute strategy call. We'll talk about your business and goals.",
              },
              {
                step: '02',
                title: 'Get Your Plan',
                description: "We'll create a custom plan showing exactly what you need and what it costs.",
              },
              {
                step: '03',
                title: 'We Build & Launch',
                description: 'Sit back while we build your website, set up your ads, and launch everything.',
              },
              {
                step: '04',
                title: 'You Get Results',
                description: 'Watch the leads come in. We track everything and optimize for more.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent-cyan text-primary-bg font-display font-black text-2xl flex items-center justify-center">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
                {index < 3 && (
                  <HiOutlineArrowRight className="hidden md:block text-accent-cyan text-2xl mx-auto mt-6" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Start With Step 1
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                quote: "They built us a booking system with SMS reminders. No-shows dropped 80% and bookings went up 300%. Paid for itself in one month.",
                author: "Marie D.",
                role: "Beauty Salon Owner",
              },
              {
                quote: "We needed an online store with payment processing. They delivered in 6 weeks. Online sales now account for 60% of our revenue.",
                author: "James M.",
                role: "Retail Business Owner",
              },
              {
                quote: "Finally found a team that runs ads AND builds the pages. No more back-and-forth between different agencies.",
                author: "Aisha T.",
                role: "Consulting Firm",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-secondary-bg border-l-4 border-accent-cyan"
              >
                <FaQuoteLeft className="text-3xl text-accent-cyan/30 mb-4" />
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent-yellow" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* More detailed case studies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "I was spending 3 hours a day just managing appointments and sending reminders. Now it's all automated. I got my life back.",
                author: "Pauline K.",
                role: "Fitness Coach",
                result: "15+ hours saved per week",
              },
              {
                quote: "We went from zero online presence to ranking on the first page of Google in our area. The phone hasn't stopped ringing.",
                author: "Thomas E.",
                role: "Restaurant Owner",
                result: "40% increase in reservations",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-secondary-bg border border-tertiary-bg"
              >
                <FaQuoteLeft className="text-2xl text-accent-orange/30 mb-4" />
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent-yellow" />
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-tertiary-bg">
                  <span className="text-accent-cyan font-bold">{testimonial.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For / Not For */}
      <section className="py-20 lg:py-28 bg-secondary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
            Is This For You?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* This IS for you */}
            <div className="p-8 bg-primary-bg border-2 border-accent-cyan">
              <h3 className="font-display text-2xl font-bold text-accent-cyan mb-6 flex items-center gap-3">
                <FaCheck /> This IS For You If...
              </h3>
              <ul className="space-y-4">
                {[
                  "You're a business owner who wants more customers",
                  "You're tired of figuring out marketing yourself",
                  "You want a website that actually brings in money",
                  "You're ready to invest in growing your business",
                  "You value your time and want things done right",
                  "You want one team handling everything",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* This is NOT for you */}
            <div className="p-8 bg-primary-bg border-2 border-accent-orange">
              <h3 className="font-display text-2xl font-bold text-accent-orange mb-6 flex items-center gap-3">
                <FaTimes /> This is NOT For You If...
              </h3>
              <ul className="space-y-4">
                {[
                  "You're looking for the cheapest option possible",
                  "You want to micromanage every detail",
                  "You're not serious about growing your business",
                  "You expect results overnight with zero effort",
                  "You're not ready to invest in your success",
                  "You just want a pretty website with no strategy",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <BsX className="text-accent-orange text-xl mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-gray-400 mb-8">
              If you checked more boxes on the left, let's talk.
            </p>
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Book Your Free Call
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
            Your Options
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            You could keep doing what you're doing. Or...
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto">
              <thead>
                <tr className="border-b border-tertiary-bg">
                  <th className="p-4 text-left"></th>
                  <th className="p-4 text-center text-gray-400">Do It Yourself</th>
                  <th className="p-4 text-center text-gray-400">Hire Freelancers</th>
                  <th className="p-4 text-center bg-accent-cyan/10 text-accent-cyan">Work With Us</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Time investment', diy: 'Huge', freelance: 'Medium', us: 'Minimal' },
                  { feature: 'Learning curve', diy: 'Steep', freelance: 'Medium', us: 'None' },
                  { feature: 'Consistent results', diy: 'no', freelance: 'no', us: 'yes' },
                  { feature: 'Marketing + Tech together', diy: 'no', freelance: 'no', us: 'yes' },
                  { feature: 'Someone to call when things break', diy: 'no', freelance: 'Maybe', us: 'yes' },
                  { feature: 'Strategy included', diy: 'no', freelance: 'no', us: 'yes' },
                  { feature: 'Ongoing optimization', diy: 'no', freelance: 'Extra cost', us: 'yes' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-tertiary-bg">
                    <td className="p-4 font-medium text-white">{row.feature}</td>
                    <td className="p-4 text-center text-gray-400">
                      {row.diy === 'no' ? <FaTimes className="inline text-red-500" /> : row.diy}
                    </td>
                    <td className="p-4 text-center text-gray-400">
                      {row.freelance === 'no' ? <FaTimes className="inline text-red-500" /> : row.freelance}
                    </td>
                    <td className="p-4 text-center bg-accent-cyan/5 text-white font-medium">
                      {row.us === 'yes' ? <FaCheck className="inline text-accent-cyan" /> : row.us}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Choose The Easy Way
            </button>
          </div>
        </div>
      </section>

      {/* What Happens On The Call */}
      <section className="py-20 lg:py-28 bg-secondary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
            What Happens On The Call?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            No pressure. No hard sell. Just a real conversation.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                title: "We'll learn about your business",
                description: "What do you do? Who are your customers? What's working and what's not?",
              },
              {
                title: "We'll identify your biggest opportunities",
                description: "Where are you leaving money on the table? What quick wins can we spot?",
              },
              {
                title: "We'll show you what's possible",
                description: "Based on what we learn, we'll share ideas for how you could grow.",
              },
              {
                title: "We'll give you a clear next step",
                description: "Whether you work with us or not, you'll leave with actionable advice.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-primary-bg border border-tertiary-bg"
              >
                <div className="w-10 h-10 bg-accent-cyan text-primary-bg font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              30 minutes. Zero obligation. Worst case, you get free advice.
            </p>
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Book Your Free Call
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Pick what fits your needs. Custom packages available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Starter Website',
                price: '150,000',
                description: 'Perfect for getting started online',
                features: [
                  'Professional landing page',
                  'Mobile-friendly design',
                  'WhatsApp button',
                  'Contact form',
                  '5-7 day delivery',
                ],
              },
              {
                title: 'Marketing + Website',
                price: '350,000',
                description: 'Get found and convert visitors',
                features: [
                  'Professional website',
                  'Social media setup',
                  'Facebook/Google Ads setup',
                  'Monthly performance report',
                ],
                featured: true,
              },
              {
                title: 'Full Growth System',
                price: '500,000+',
                description: 'Marketing + custom tools',
                features: [
                  'Everything in Marketing',
                  'Booking/reservation system',
                  'Payment processing',
                  'Automated reminders',
                  'Ongoing optimization',
                ],
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`p-8 border-2 ${
                  pkg.featured
                    ? 'border-accent-cyan bg-secondary-bg'
                    : 'border-tertiary-bg bg-secondary-bg'
                }`}
              >
                {pkg.featured && (
                  <div className="text-accent-cyan text-xs font-bold uppercase tracking-wider mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold mb-2">
                  {pkg.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-accent-cyan">{pkg.price}</span>
                  <span className="text-gray-400 ml-2">FCFA</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleCTAClick}
                  className={`w-full py-4 font-bold uppercase tracking-wider transition-colors ${
                    pkg.featured
                      ? 'bg-accent-cyan text-primary-bg hover:bg-accent-orange'
                      : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary-bg'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12">
            Need something different? <button onClick={handleCTAClick} className="text-accent-cyan hover:underline">Let's talk about your project</button>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-secondary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-center mb-16">
            Common Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "How long does it take to see results?",
                a: "Most clients start seeing leads within the first 2-4 weeks after launch. For SEO and organic growth, expect 2-3 months for significant traction.",
              },
              {
                q: "What if I already have a website?",
                a: "Great! We can either improve your existing site or build you a new one. We'll recommend the best approach during our call.",
              },
              {
                q: "Do you work with small businesses?",
                a: "Absolutely. Most of our clients are small to medium businesses — salons, restaurants, consultants, retail shops, service providers.",
              },
              {
                q: "What's included in the monthly reports?",
                a: "Traffic, leads, ad performance, what's working, what we're testing next. Clear numbers, no fluff.",
              },
              {
                q: "Can I cancel anytime?",
                a: "For one-time projects, you pay once and own everything. For ongoing services, we work month-to-month. No long contracts.",
              },
              {
                q: "Do you offer payment plans?",
                a: "Yes, we can split payments for larger projects. Let's discuss what works for you on the call.",
              },
              {
                q: "What if I'm not happy with the work?",
                a: "We revise until you're satisfied. We don't consider a project done until you're happy with it.",
              },
              {
                q: "How do I know this will work for MY business?",
                a: "That's exactly what the free call is for. We'll look at your specific situation and tell you honestly if we can help.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-primary-bg border border-tertiary-bg"
              >
                <h3 className="font-display text-lg font-bold mb-3 text-white">
                  {item.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-400 mb-6">
              Still have questions? Ask us on the call.
            </p>
            <button
              onClick={handleCTAClick}
              className="px-10 py-4 bg-accent-cyan text-primary-bg font-display font-bold uppercase tracking-wider hover:bg-accent-orange transition-colors"
            >
              Book Your Free Call
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 bg-primary-bg text-center border-t border-tertiary-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-orange/20 border border-accent-orange/50 mb-8">
            <BsFire className="text-accent-orange" />
            <span className="text-accent-orange text-sm font-bold uppercase tracking-wider">
              Limited Availability
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Ready to Get More Customers?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Book your free 30-minute strategy call. We'll look at your business and show you exactly how we can help you grow.
          </p>
          <button
            onClick={handleCTAClick}
            className="px-12 py-5 bg-accent-cyan text-primary-bg font-display font-bold text-lg uppercase tracking-wider hover:bg-accent-orange transition-colors"
          >
            Book Your Free Call Now
          </button>
          <p className="mt-6 text-gray-500 text-sm">
            No credit card required. No obligation. Just a conversation.
          </p>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-secondary-bg/95 backdrop-blur-lg border-t border-accent-cyan/20 py-4 px-6"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden md:block">
            <span className="text-white font-bold">Ready to get more customers?</span>
          </div>
          <button
            onClick={handleCTAClick}
            className="w-full md:w-auto px-8 py-3 bg-accent-cyan text-primary-bg font-display font-bold text-sm uppercase tracking-wider hover:bg-accent-orange transition-colors"
          >
            Book Free Call
          </button>
        </div>
      </motion.div>

      {/* Spacer for sticky bar */}
      <div className="h-20" />

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
