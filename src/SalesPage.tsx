import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  HiOutlineSparkles,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineChatAlt2
} from 'react-icons/hi';
import {
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaWhatsapp,
  FaChartLine,
  FaRocket
} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { BsArrowRight, BsCheckLg } from 'react-icons/bs';

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
  return (
    <div className="min-h-screen bg-primary-bg text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute top-0 right-0 w-[80%] h-[120%] -translate-y-1/2 translate-x-1/4 opacity-30">
          <motion.div
            className="w-full h-full rounded-full bg-accent-cyan blur-[150px]"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-[60%] h-[80%] translate-y-1/3 -translate-x-1/10 opacity-20">
          <motion.div
            className="w-full h-full rounded-full bg-accent-orange blur-[150px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -30, 0]
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
            className="max-w-6xl"
          >
            <motion.div
              variants={fadeInUp}
              className="text-accent-cyan text-sm font-bold uppercase tracking-[0.15em] mb-6"
            >
              Growth System
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 max-w-5xl"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #00d9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              We Help Businesses Turn Social Media & Ads Into Real Customers
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-12 leading-relaxed font-light"
            >
              Strategy, content, paid campaigns, and high-converting websites — all in one growth system designed to generate leads and sales.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a
                href="#contact"
                className="group relative px-10 py-5 bg-accent-cyan text-primary-bg font-display font-bold text-base uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] hover:-translate-y-1"
              >
                <span className="relative z-10">Book a Free Strategy Call</span>
                <div className="absolute inset-0 bg-accent-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
              </a>

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
              'You post consistently but engagement is low',
              'You run ads but get little or no leads',
              'Your website looks good but doesn\'t convert visitors',
              'You work with freelancers who don\'t understand business goals'
            ].map((pain, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-tertiary-bg p-10 border-l-4 border-accent-orange group hover:border-accent-cyan transition-all duration-300"
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
                The issue isn't effort — it's the absence of a clear growth system.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="relative bg-primary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              The Solution
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-20 max-w-4xl leading-tight">
              A Simple System That Turns Attention Into Customers
            </h2>
          </AnimatedSection>

          <div className="space-y-24 lg:space-y-32">
            {[
              {
                number: '01',
                title: 'Attract',
                description: 'We use social media content and paid ads to capture attention and drive qualified traffic.',
                icon: <HiOutlineSparkles />
              },
              {
                number: '02',
                title: 'Convert',
                description: 'We send that traffic to conversion-focused websites and landing pages built to generate leads.',
                icon: <HiOutlineLightningBolt />
              },
              {
                number: '03',
                title: 'Grow',
                description: 'We track performance, optimize campaigns, and improve results over time.',
                icon: <FaChartLine />
              }
            ].map((step, index) => (
              <AnimatedSection key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-16 items-start">
                  <div
                    className="text-8xl lg:text-9xl font-black leading-none"
                    style={{
                      background: 'linear-gradient(135deg, #00d9ff 0%, #ff6b35 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl text-accent-cyan">
                        {step.icon}
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl font-black">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-24">
              <p className="text-3xl md:text-4xl font-bold text-accent-yellow">
                We don't sell isolated services — we build growth systems.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-secondary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Services Built for Growth
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
                title: 'Social Media Management',
                items: [
                  'Content strategy and planning',
                  'Graphic design and captions',
                  'Consistent posting and engagement',
                  'Monthly performance reports'
                ]
              },
              {
                icon: <FaGoogle />,
                title: 'Paid Campaign Setup',
                items: [
                  'Meta and Google Ads setup',
                  'Audience targeting and funnel strategy',
                  'Conversion tracking (Pixel & Analytics)',
                  'Campaign launch and optimization'
                ]
              },
              {
                icon: <FaRocket />,
                title: 'Conversion-Focused Websites',
                items: [
                  'Business websites or landing pages',
                  'Mobile responsive and fast loading',
                  'WhatsApp, contact forms, analytics integration'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative bg-primary-bg p-10 border border-tertiary-bg hover:border-accent-cyan transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,217,255,0.1)]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-orange transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="text-4xl text-accent-cyan mb-6">
                  {service.icon}
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-black mb-6">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
                      <BsArrowRight className="text-accent-orange mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative bg-primary-bg py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <span className="text-accent-orange text-xs font-bold uppercase tracking-[0.2em]">
              Investment
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mt-4 mb-16 max-w-4xl leading-tight">
              Choose Your Growth Path
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
                badge: 'Starter',
                title: 'Online Presence Starter',
                subtitle: 'Ideal for small businesses',
                description: 'Includes social media management and a professional business website',
                price: 'Starting from 350,000 FCFA'
              },
              {
                badge: 'Popular',
                title: 'Lead Generation System',
                subtitle: 'Ideal for service-based businesses',
                description: 'Includes paid campaign setup, landing page, and tracking',
                price: 'Starting from 500,000 FCFA',
                featured: true
              },
              {
                badge: 'Scale',
                title: 'Growth Retainer',
                subtitle: 'Ideal for scaling brands',
                description: 'Includes monthly social media management and ad optimization',
                price: 'Monthly plans available'
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`relative bg-secondary-bg p-10 border-2 transition-all duration-500 hover:scale-105 hover:shadow-[0_30px_80px_rgba(0,217,255,0.15)] ${
                  pkg.featured ? 'border-accent-cyan' : 'border-tertiary-bg hover:border-accent-cyan'
                }`}
              >
                <div className="absolute -top-4 left-10 bg-accent-orange text-primary-bg px-6 py-2 text-xs font-bold uppercase tracking-wider">
                  {pkg.badge}
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-black mb-2 mt-4">
                  {pkg.title}
                </h3>

                <p className="text-gray-500 text-sm mb-8">
                  {pkg.subtitle}
                </p>

                <div className="py-8 border-t border-b border-tertiary-bg mb-8">
                  <p className="text-gray-300 text-base leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="text-3xl md:text-4xl font-black text-accent-cyan mb-8">
                  {pkg.price}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <div className="mt-12 p-8 bg-tertiary-bg border-l-4 border-accent-yellow text-center">
              <p className="text-lg text-gray-300">
                Exact pricing is discussed during the strategy call.
              </p>
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
              { icon: <HiOutlineSparkles />, title: 'Strategy-First Approach' },
              { icon: <HiOutlineChartBar />, title: 'Focus on Leads & Sales, Not Vanity Metrics' },
              { icon: <FaRocket />, title: 'Marketing and Development Under One Roof' },
              { icon: <HiOutlineChatAlt2 />, title: 'Clear Communication and Fast Execution' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-accent-cyan to-accent-orange flex items-center justify-center text-4xl text-white"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="relative bg-primary-bg py-32 lg:py-40 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-cyan/10 blur-[100px] animate-pulse-glow" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <AnimatedSection>
            <h2
              className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
              style={{
                background: 'linear-gradient(135deg, #00d9ff, #ff6b35)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Ready to Turn Your Online Presence Into Sales?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Book a free 30-minute strategy call where we review your business, identify growth opportunities, and outline a clear plan — no obligation.
            </p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert('Connect this to your booking calendar (Calendly, Cal.com, etc.)');
              }}
              className="group relative inline-block px-14 py-6 bg-accent-cyan text-primary-bg font-display font-bold text-lg uppercase tracking-wider overflow-hidden transition-all hover:shadow-[0_0_60px_rgba(255,107,53,0.4)] hover:-translate-y-1"
            >
              <span className="relative z-10">Book Your Free Call Now</span>
              <div className="absolute inset-0 bg-accent-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
