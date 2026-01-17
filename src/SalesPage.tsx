import { motion, useInView, useScroll, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineChatAlt2,
  HiOutlineCode
} from 'react-icons/hi';
import {
  FaInstagram,
  FaChartLine,
  FaRocket,
  FaStar,
  FaQuoteLeft,
  FaCog,
  FaCalendarAlt,
  FaShoppingCart,
  FaPlug
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { BsArrowRight, BsCheckLg, BsFire, BsLightning } from 'react-icons/bs';
import { RiTimerFlashLine } from 'react-icons/ri';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import LeadCaptureModal from './components/LeadCaptureModal';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -1000 : 1000,
    opacity: 0
  })
};

// Reusable component for scroll animations
function AnimatedSection({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function SalesPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollY } = useScroll();

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com';

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowStickyCTA(latest > 800);
    });
  }, [scrollY]);

  const navigatePackages = (newIndex: number) => {
    setDirection(newIndex > currentPackageIndex ? 1 : -1);
    setCurrentPackageIndex(newIndex);
  };

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-primary-bg text-white overflow-x-hidden">

      {/* Sticky CTA Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: showStickyCTA ? 0 : -100 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 bg-secondary-bg/95 backdrop-blur-lg border-b border-accent-cyan/20 shadow-lg"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BsFire className="text-accent-orange text-2xl" />
            <span className="font-display font-bold text-lg">Limited Spots This Month</span>
          </div>
          <button
            onClick={handleCTAClick}
            className="group relative px-8 py-3 bg-accent-cyan text-primary-bg font-display font-bold text-sm uppercase tracking-wider overflow-hidden transition-all hover:-translate-y-1"
          >
            <span className="relative z-10">Book Free Call</span>
            <div className="absolute inset-0 bg-accent-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
          </button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background orbs - more pronounced */}
        <div className="absolute top-0 right-0 w-[80%] h-[120%] -translate-y-1/2 translate-x-1/4 opacity-40">
          <motion.div
            className="w-full h-full rounded-full bg-accent-cyan blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -50, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[80%] translate-y-1/3 -translate-x-1/10 opacity-30">
          <motion.div
            className="w-full h-full rounded-full bg-accent-orange blur-[150px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-7xl"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="text-accent-cyan text-sm font-bold uppercase tracking-[0.15em]">
                Marketing Strategy + Custom Software
              </span>
              <div className="flex items-center gap-2 px-3 py-1 bg-accent-orange/20 border border-accent-orange/50">
                <RiTimerFlashLine className="text-accent-orange" />
                <span className="text-accent-orange text-xs font-bold uppercase">Only 5 Spots Left</span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-8 max-w-6xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              We Build Systems That Generate Customers
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed font-light"
            >
              Marketing campaigns, custom booking systems, business automation, and conversion-focused web applications — all built and managed under one roof.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-8 mb-12 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FaChartLine className="text-accent-cyan text-2xl" />
                <div>
                  <div className="text-2xl font-black text-white">500K+</div>
                  <div className="text-xs uppercase tracking-wider">Revenue Generated</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-700" />
              <div className="flex items-center gap-2">
                <HiOutlineSparkles className="text-accent-cyan text-2xl" />
                <div>
                  <div className="text-2xl font-black text-white">50+</div>
                  <div className="text-xs uppercase tracking-wider">Systems Built</div>
                </div>
              </div>
              <div className="h-12 w-px bg-gray-700" />
              <div className="flex items-center gap-2">
                <FaStar className="text-accent-yellow text-2xl" />
                <div>
                  <div className="text-2xl font-black text-white">4.9/5</div>
                  <div className="text-xs uppercase tracking-wider">Client Rating</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <button
                onClick={handleCTAClick}
                className="group relative px-10 py-5 bg-accent-cyan text-primary-bg font-display font-bold text-base uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10">Book a Free Strategy Call</span>
                <div className="absolute inset-0 bg-accent-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              </button>

              <a
                href="#solution"
                className="group px-10 py-5 border-2 border-gray-500 text-white font-display font-bold text-base uppercase tracking-wider transition-all hover:border-accent-cyan hover:text-accent-cyan hover:-translate-y-1"
              >
                See How It Works
                <BsArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative bg-secondary-bg border-t border-accent-cyan/20 py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              The Problem
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Struggling to Get Real Results Online?
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            {[
              'You run ads but your website can\'t handle bookings or payments',
              'You need a reservation system but developers quote 6+ months',
              'Your marketing agency can\'t build the automation you need',
              'You\'re juggling freelancers who don\'t understand your business goals'
            ].map((pain, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, rotateY: 2 }}
                className="relative bg-tertiary-bg p-10 border-l-4 border-accent-orange group hover:border-accent-cyan transition-all duration-300 cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <IoClose className="absolute top-6 right-6 text-4xl text-accent-orange/30 group-hover:rotate-90 transition-transform duration-300" />
                <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                  {pain}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="text-center py-12 border-t border-b border-tertiary-bg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-accent-cyan">
                The issue isn't effort — you need a team that does both marketing AND engineering.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="relative bg-primary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              Our Advantage
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-12 max-w-5xl leading-tight">
              Most Agencies Can't Code. Most Developers Can't Market.
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl leading-relaxed mb-16">
              Our team combines <span className="text-accent-cyan font-bold">development expertise</span> with <span className="text-accent-cyan font-bold">marketing strategy</span>. We build the systems, run the campaigns, and deliver results — all under one roof.
            </p>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div
              variants={scaleIn}
              className="relative bg-secondary-bg p-12 border-l-4 border-accent-cyan"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent-cyan/10 rounded-full">
                  <FaChartLine className="text-5xl text-accent-cyan" />
                </div>
                <h3 className="font-display text-3xl font-black">Marketing Strategy</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                  <span>Paid campaigns (Meta, Google, TikTok)</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                  <span>Social media management & content</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                  <span>Funnel strategy & conversion optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                  <span>Analytics & performance tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative bg-secondary-bg p-12 border-l-4 border-accent-orange"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-accent-orange/10 rounded-full">
                  <HiOutlineCode className="text-5xl text-accent-orange" />
                </div>
                <h3 className="font-display text-3xl font-black">Custom Development</h3>
              </div>
              <ul className="space-y-3 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-orange mt-1 flex-shrink-0" />
                  <span>Booking & reservation systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-orange mt-1 flex-shrink-0" />
                  <span>Business automation that saves time</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-orange mt-1 flex-shrink-0" />
                  <span>Custom web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <BsCheckLg className="text-accent-orange mt-1 flex-shrink-0" />
                  <span>Payment processing & integrations</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <AnimatedSection>
            <div className="mt-16 text-center">
              <div className="inline-block px-8 py-4 bg-tertiary-bg border-l-4 border-accent-yellow">
                <p className="text-xl font-bold text-accent-yellow">
                  = You get growth campaigns that actually convert + the systems to scale them
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-secondary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              What We Build
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Full-Stack Growth Services
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FaInstagram />,
                title: 'Get Found Online',
                highlight: 'Visibility',
                items: [
                  'Professional website or landing page',
                  'Social media content & posting',
                  'Facebook & Google Ads',
                  'Show up when customers search'
                ]
              },
              {
                icon: <FaCalendarAlt />,
                title: 'Get More Bookings',
                highlight: 'Appointments',
                items: [
                  'Online booking system',
                  'Automated SMS/Email reminders',
                  'Ads to fill your calendar',
                  'Reduce no-shows by 80%'
                ]
              },
              {
                icon: <FaShoppingCart />,
                title: 'Sell Online',
                highlight: 'E-commerce',
                items: [
                  'Online store setup',
                  'Accept card & mobile payments',
                  'Product launch campaigns',
                  'Manage orders & inventory'
                ]
              },
              {
                icon: <FaCog />,
                title: 'Automate & Scale',
                highlight: 'Efficiency',
                items: [
                  'Automate repetitive tasks',
                  'Lead capture & follow-up',
                  'Connect all your tools',
                  'Monthly performance reports'
                ]
              },
              {
                icon: <FaRocket />,
                title: 'Launch & Grow',
                highlight: 'Growth',
                items: [
                  'Custom web application',
                  'Brand launch campaign',
                  'Ongoing optimization',
                  'Dedicated support'
                ]
              },
              {
                icon: <FaPlug />,
                title: 'Custom Solution',
                highlight: 'Tailored',
                items: [
                  'Tell us what you need',
                  'We design it together',
                  'Built to your specs',
                  'Marketing included'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: 1.03, rotateY: 3 }}
                className="group relative bg-primary-bg p-10 border border-tertiary-bg hover:border-accent-cyan transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,217,255,0.1)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="flex items-center justify-between mb-6">
                  <div className="text-5xl text-accent-cyan group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-gradient-to-r from-accent-cyan/20 to-accent-orange/20 text-white">
                    {service.highlight}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-black mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
                      <BsArrowRight className="text-accent-orange mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Requirements CTA */}
          <AnimatedSection>
            <div className="mt-16 p-10 bg-gradient-to-r from-accent-cyan/10 to-accent-orange/10 border border-tertiary-bg text-center">
              <h3 className="font-display text-2xl md:text-3xl font-black mb-4">
                Have Something Specific in Mind?
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Don't see exactly what you need? No problem. Bring your idea, and we'll build a custom solution that fits your business and budget.
              </p>
              <button
                onClick={handleCTAClick}
                className="inline-block px-8 py-4 border-2 border-accent-cyan text-accent-cyan font-display font-bold text-sm uppercase tracking-wider transition-all hover:bg-accent-cyan hover:text-primary-bg hover:-translate-y-1"
              >
                Let's Discuss Your Project
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-secondary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              Success Stories
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Real Results From Real Businesses
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {[
              {
                quote: "They built us a custom booking system with automated SMS reminders. Our no-shows dropped 80% and bookings increased 300%. The system paid for itself in one month.",
                author: "Marie D.",
                role: "Owner, Beauty Salon",
                result: "300% More Bookings"
              },
              {
                quote: "We needed an e-commerce platform with inventory sync and payment processing. They delivered in 6 weeks. Our online sales now account for 60% of revenue.",
                author: "James M.",
                role: "Founder, Retail Business",
                result: "60% Revenue Online"
              },
              {
                quote: "Finally found a team that can run ads AND build the landing pages that convert. No more back-and-forth between agencies and developers.",
                author: "Aisha T.",
                role: "CMO, Consulting Firm",
                result: "12% Conversion Rate"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="relative bg-primary-bg p-8 border-l-4 border-accent-cyan"
              >
                <FaQuoteLeft className="text-4xl text-accent-cyan/20 mb-4" />
                <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-accent-yellow" />
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-tertiary-bg">
                  <div className="text-accent-orange font-bold text-sm uppercase tracking-wider">
                    {testimonial.result}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="relative bg-primary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              Investment
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-12 max-w-4xl leading-tight">
              Choose Your Growth Path
            </h2>
          </AnimatedSection>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <button
              onClick={() => navigatePackages(Math.max(0, currentPackageIndex - 3))}
              disabled={currentPackageIndex === 0}
              className="p-3 bg-secondary-bg border border-tertiary-bg hover:border-accent-cyan hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <HiChevronLeft className="text-2xl text-accent-cyan" />
            </button>
            <div className="flex gap-2">
              {[0, 3, 6].map((startIndex) => (
                <button
                  key={startIndex}
                  onClick={() => navigatePackages(startIndex)}
                  className={`h-3 rounded-full transition-all ${
                    currentPackageIndex === startIndex ? 'bg-accent-cyan w-8' : 'bg-gray-600 w-3'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => navigatePackages(Math.min(6, currentPackageIndex + 3))}
              disabled={currentPackageIndex >= 6}
              className="p-3 bg-secondary-bg border border-tertiary-bg hover:border-accent-cyan hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <HiChevronRight className="text-2xl text-accent-cyan" />
            </button>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPackageIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
              >
                {[
                  // Page 1: Marketing packages (original from PDF)
                  {
                    badge: 'Starter',
                    title: 'Online Presence Starter',
                    subtitle: 'Ideal for small businesses',
                    features: [
                      'Social media management',
                      'Professional business website',
                      'Monthly performance reports'
                    ],
                    price: '350,000',
                    currency: 'FCFA'
                  },
                  {
                    badge: 'Popular',
                    title: 'Lead Generation System',
                    subtitle: 'Ideal for service-based businesses',
                    features: [
                      'Paid campaign setup (Meta & Google)',
                      'Landing page design',
                      'Conversion tracking setup',
                      'Campaign optimization'
                    ],
                    price: '500,000',
                    currency: 'FCFA',
                    featured: true
                  },
                  {
                    badge: 'Growth',
                    title: 'Growth Retainer',
                    subtitle: 'Ideal for scaling brands',
                    features: [
                      'Monthly social media management',
                      'Ongoing ad optimization',
                      'Performance tracking & reporting'
                    ],
                    price: 'Monthly',
                    currency: 'Plans Available'
                  },
                  // Page 2: Entry + Dev packages
                  {
                    badge: 'Essential',
                    title: 'Website Essentials',
                    subtitle: 'Perfect for getting started',
                    features: [
                      'Professional landing page or simple website',
                      'Mobile responsive design',
                      'WhatsApp button integration',
                      'Contact form',
                      'Google Maps (if needed)',
                      '5-7 day delivery'
                    ],
                    price: '150,000',
                    currency: 'FCFA'
                  },
                  {
                    badge: 'E-commerce',
                    title: 'Online Store + Launch',
                    subtitle: 'Sell online with ads',
                    features: [
                      'Custom e-commerce website',
                      'Product catalog & inventory',
                      'Payment processing (cards/mobile money)',
                      'Order management system',
                      'Launch campaign (ads + social)',
                      'WhatsApp integration'
                    ],
                    price: '500,000',
                    currency: 'FCFA'
                  },
                  {
                    badge: 'Automation',
                    title: 'Business Automation + Leads',
                    subtitle: 'Automate & capture leads',
                    features: [
                      'Custom automation workflows',
                      'Lead capture forms',
                      'Email/SMS automation',
                      'CRM integration',
                      'Basic marketing setup',
                      'Analytics dashboard'
                    ],
                    price: '450,000',
                    currency: 'FCFA'
                  },
                  // Page 3: Premium dev package
                  {
                    badge: 'Premium',
                    title: 'Custom Platform + Marketing',
                    subtitle: 'Full system + growth strategy',
                    features: [
                      'Custom web application',
                      'User management & dashboards',
                      'Mobile-responsive design',
                      'Business automation',
                      'Brand launch campaign',
                      '3 months support & optimization'
                    ],
                    price: 'Custom',
                    currency: 'Starting 450K FCFA',
                    featured: true
                  },
                  {
                    badge: 'Booking',
                    title: 'Booking System Package',
                    subtitle: 'Appointments + reminders',
                    features: [
                      'Custom booking/reservation system',
                      'Automated email/SMS reminders',
                      'Payment integration',
                      'WhatsApp notifications',
                      'Basic landing page',
                      'Google Calendar sync'
                    ],
                    price: '750,000',
                    currency: 'FCFA'
                  },
                  {
                    badge: 'Custom',
                    title: 'Custom Quote',
                    subtitle: 'Need something specific?',
                    features: [
                      'We build custom solutions',
                      'Monthly retainers available',
                      'À la carte services',
                      'Flexible payment plans',
                      'Book a call to discuss',
                      'Tailored to your budget'
                    ],
                    price: "Let's Talk",
                    currency: 'Custom Quote'
                  }
                ].slice(currentPackageIndex, currentPackageIndex + 3).map((pkg, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ scale: pkg.featured ? 1.02 : 1.03, y: -8 }}
                className={`relative bg-secondary-bg p-10 border-2 transition-all duration-500 ${
                  pkg.featured
                    ? 'lg:scale-110 border-accent-cyan shadow-[0_0_80px_rgba(0,217,255,0.3)]'
                    : 'border-tertiary-bg hover:border-accent-cyan hover:shadow-[0_30px_80px_rgba(0,217,255,0.15)]'
                }`}
              >
                <div className="absolute -top-4 left-10 bg-accent-orange text-primary-bg px-6 py-2 text-xs font-bold uppercase tracking-wider">
                  {pkg.badge}
                </div>

                {pkg.featured && (
                  <div className="absolute -top-4 right-10 bg-accent-cyan text-primary-bg px-4 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <BsFire />
                    Best Value
                  </div>
                )}

                <h3 className="font-display text-2xl md:text-3xl font-black mb-2 mt-4">
                  {pkg.title}
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  {pkg.subtitle}
                </p>

                <div className="mb-8">
                  <div className="text-5xl font-black text-accent-cyan mb-2">
                    {pkg.price === 'Custom' ? pkg.price : `${pkg.price}`}
                  </div>
                  <div className="text-sm text-gray-400">{pkg.currency}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <BsCheckLg className="text-accent-cyan mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTAClick}
                  className={`block w-full text-center py-4 font-display font-bold uppercase tracking-wider transition-all ${
                    pkg.featured
                      ? 'bg-accent-cyan text-primary-bg hover:bg-accent-orange'
                      : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-primary-bg'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatedSection>
            <div className="mt-12 p-8 bg-tertiary-bg border-l-4 border-accent-yellow">
              <div className="flex items-start gap-4">
                <BsLightning className="text-accent-yellow text-3xl flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-bold text-white mb-2">
                    Starting from 150,000 FCFA
                  </p>
                  <p className="text-gray-400">
                    Exact pricing discussed during the strategy call. Need something specific? We can build custom packages tailored to your needs and budget.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative bg-secondary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              Why Us
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Why Choose Us
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { icon: <HiOutlineCode />, title: 'Development + Marketing Experts' },
              { icon: <HiOutlineChartBar />, title: 'Focus on Revenue, Not Vanity Metrics' },
              { icon: <FaRocket />, title: 'We Build AND Market Your Systems' },
              { icon: <HiOutlineChatAlt2 />, title: 'Fast Execution, Clear Communication' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-cyan to-accent-orange flex items-center justify-center text-4xl text-white transition-transform"
                  whileHover={{ rotate: 45, scale: 1.1 }}
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative bg-primary-bg py-32 lg:py-40 text-center overflow-hidden border-t border-accent-cyan/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-cyan/10 blur-[100px] animate-pulse-glow" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-3 mb-6">
              <BsFire className="text-accent-orange text-3xl" />
              <span className="text-accent-orange font-bold uppercase tracking-wider">Only 5 Spots Available This Month</span>
              <BsFire className="text-accent-orange text-3xl" />
            </div>

            <h2
              className="font-display text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #00d9ff, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Ready to Build Systems That Scale?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Book a free 30-minute strategy call. We'll review your business, show you how to automate your processes, and create a plan to grow your revenue — no obligation.
            </p>

            <div className="flex flex-col items-center gap-6 mb-8">
              <button
                onClick={handleCTAClick}
                className="group relative inline-block px-14 py-6 bg-accent-cyan text-primary-bg font-display font-bold text-lg uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10">Book Your Free Call Now</span>
                <div className="absolute inset-0 bg-accent-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              </button>

              <p className="text-sm text-gray-500">
                ⚡ Most projects delivered in 4-8 weeks
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lead Capture Modal */}
      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendlyUrl={calendlyUrl}
      />
    </div>
  );
}
