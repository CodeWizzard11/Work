import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  HeartHandshake, 
  Sparkles,
  Phone,
  Calendar,
  Clock,
  Info
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface FeesFinancingPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const FeesFinancingPage: React.FC<FeesFinancingPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const paymentOptions = [
    {
      badge: '02',
      title: 'No interest',
      description: 'Our payment plans carry no interest charges — what you see is what you pay'
    },
    {
      badge: '03',
      title: 'No credit checks',
      description: "We don't run credit checks to set up a payment plan"
    },
    {
      badge: '04',
      title: 'No hidden fees',
      description: 'All costs are discussed and agreed upon before treatment begins — fully transparent, no surprises'
    },
    {
      badge: '01',
      title: 'Flexible monthly payment plans',
      description: 'Spread the cost of treatment over time with a payment plan tailored to your budget'
    }
  ];

  const faqs = [
    {
      q: 'Which insurance companies do you direct bill?',
      a: 'Planet Dental direct bills almost all major Canadian dental insurance providers. Bring your insurance card and plan information to your first appointment and our team will confirm your coverage and handle the submission on your behalf.'
    },
    {
      q: "What if my insurance doesn't cover the full cost of treatment?",
      a: 'If your insurance covers only a portion of the fee, you will only be responsible for paying the remaining balance (the co-pay) at the time of your appointment. We can also arrange a flexible, interest-free payment plan for larger out-of-pocket amounts.'
    },
    {
      q: 'Do I need insurance to be a patient at Planet Dental?',
      a: 'No! Many of our patients do not have private dental insurance. We follow the Alberta Dental Fee Guide for fair, transparent pricing, accept all government dental programs (CDCP, NIHB, AISH), and offer flexible in-house monthly payment plans with no interest and no credit checks.'
    },
    {
      q: 'Can I get a treatment estimate before committing?',
      a: 'Absolutely. We believe in complete financial transparency. Before starting any non-emergency procedure, our team provides a detailed estimate outlining the total cost, what your insurance is expected to cover, and any out-of-pocket balance.'
    },
    {
      q: 'Do you accept the Canada Dental Care Plan?',
      a: 'Yes! Planet Dental is a registered provider for the Canadian Dental Care Plan (CDCP). We help eligible seniors, adults with disabilities, children, and families access their benefits seamlessly with direct billing.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030b19] text-white selection:bg-[#38bdf8]/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Screenshot 1) */}
      {/* ========================================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden pt-12 pb-24 border-b border-sky-950/40">
        {/* Background Image with Vignette & Cosmic Starfield */}
        <div className="absolute inset-0 z-0">
          <img 
            src={DENTIST_WORK_URL} 
            alt="Planet Dental Clinical Care" 
            className="w-full h-full object-cover object-right-top filter brightness-[0.78] contrast-[1.05]"
          />
          {/* Gradients blending with dark navy cosmic theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030b19] via-[#030b19]/80 to-transparent w-full lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b19] via-transparent to-black/40" />
          {/* Subtle starry glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl space-y-6 text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.12]"
            >
              <span className="text-[#38bdf8]">Fees & Financing</span>
              <br />
              <span className="text-white">at Planet Dental</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal"
            >
              Transparent pricing, flexible payment options, and direct billing to most major insurers — so cost is never a barrier to the care you need.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={() => onOpenBooking('Fees & Financing Consultation')}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#38bdf8] hover:bg-[#2faee8] text-[#050e1f] font-bold text-[15px] shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Book an Appointment</span>
                <div className="w-5 h-5 rounded-full bg-[#050e1f] text-[#38bdf8] flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Center Bottom: "Take a Tour" with Mouse Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs text-gray-300 font-medium tracking-wide">Take a Tour</span>
          <button 
            onClick={() => {
              const el = document.getElementById('direct-billing-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll down"
            className="cursor-pointer group flex items-center justify-center"
          >
            <div className="relative w-8 h-12 rounded-full border-2 border-[#86efac]/80 bg-[#86efac]/20 flex items-start justify-center p-1.5 shadow-[0_0_15px_rgba(134,239,172,0.4)] group-hover:border-[#86efac] group-hover:shadow-[0_0_20px_rgba(134,239,172,0.6)] transition-all">
              <div className="w-2 h-2 rounded-full bg-[#38bdf8] animate-bounce" />
            </div>
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT BILLING TO INSURANCE (Screenshot 1) */}
      {/* ========================================================================= */}
      <section id="direct-billing-section" className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background stars & celestial nebula */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/2 -left-20 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl" />
          {/* Subtle star particles */}
          <div className="absolute top-16 left-1/3 w-1 h-1 bg-white rounded-full opacity-60" />
          <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-sky-400 rounded-full opacity-70" />
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-lime-300 rounded-full opacity-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Office Team Photo with Neon Orbital Dots */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-sky-500/20 bg-[#05142b]">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" 
                alt="Planet Dental Financial & Insurance Coordination Team"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030b19]/60 via-transparent to-transparent" />
            </div>

            {/* Glowing Accent Orbit Dots matching Screenshot 1 */}
            <div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-[#a3e635] shadow-[0_0_16px_#a3e635]" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8]" />
            <div className="absolute -bottom-3 right-12 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635]" />
            <div className="absolute bottom-1/4 -right-4 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
          </div>

          {/* Right Column: Direct Billing Text Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
              Direct billing to <span className="text-[#38bdf8]">insurance</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At Planet Dental, we handle the insurance paperwork so you don&apos;t have to. We offer direct billing to almost all major insurance companies — which means we submit your dental claims on your behalf. You pay only your portion at the time of your appointment, and we take care of the rest.
            </p>

            <p className="text-gray-100 font-semibold text-sm sm:text-base tracking-tight">
              No upfront payment. No waiting for reimbursement. No chasing your insurer.
            </p>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our administrative team is experienced in handling treatment estimates, predeterminations, and coverage questions. If you&apos;re unsure what your plan covers, bring your insurance information to your appointment and we&apos;ll review it with you — before treatment begins, so there are no surprises.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GOVERNMENT DENTAL PROGRAMS WE ACCEPT (Screenshot 2) */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight">
            <span className="text-[#38bdf8]">Government dental programs</span> <span className="text-white">we accept</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Planet Dental proudly participates in the following federal and provincial dental assistance programs:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Canadian Dental Care Plan (CDCP) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#06162d]/90 border border-sky-900/60 hover:border-sky-400/50 shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
            {/* Header Banner Graphic matching Screenshot 2 */}
            <div className="h-44 sm:h-48 relative overflow-hidden bg-gradient-to-br from-[#f6a09a] via-[#e87a90] to-[#7dbb91] flex items-end p-5">
              <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80" 
                  alt="CDCP Eligible Families" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 text-left">
                <h4 className="text-2xl font-extrabold text-[#051124] tracking-tight leading-none">
                  Canadian<br />Dental<br />Care Plan
                </h4>
                <p className="text-[11px] font-bold text-[#051124]/80 tracking-wider mt-2 uppercase">
                  CANADA.CA/DENTAL
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col text-left space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Canadian Dental Care Plan (CDCP)
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                The CDCP is a federal government program designed to help eligible Canadians access oral health care regardless of their financial situation. Planet Dental is a registered CDCP provider. Eligible patients can access a wide range of covered services — see our dedicated CDCP page for full details on eligibility and co-payment tiers.
              </p>
            </div>
          </div>

          {/* Card 2: Non-Insured Health Benefits (NIHB) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#06162d]/90 border border-sky-900/60 hover:border-sky-400/50 shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
            {/* Header Banner Graphic matching Screenshot 2 */}
            <div className="h-44 sm:h-48 relative overflow-hidden bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 flex flex-col items-center justify-center p-5 text-center">
              <div className="flex items-center gap-1.5 text-black">
                <span className="text-3xl font-black tracking-tight font-serif">Canada</span>
                <span className="text-red-600 text-2xl font-bold">🍁</span>
              </div>
              <p className="text-[13px] font-black tracking-widest text-[#0c2340] mt-3 uppercase">
                NON INSURED<br />HEALTH BENEFITS
              </p>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col text-left space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Non-Insured Health Benefits (NIHB)
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                The NIHB program provides dental coverage for eligible First Nations and Inuit patients in Canada. Planet Dental directly bills the NIHB program on behalf of eligible patients, ensuring that accessing covered services is as straightforward as possible.
              </p>
            </div>
          </div>

          {/* Card 3: AISH / Alberta Dental Service Corporation (ADSC) */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#06162d]/90 border border-sky-900/60 hover:border-sky-400/50 shadow-2xl overflow-hidden transition-all duration-300 flex flex-col group">
            {/* Header Banner Graphic matching Screenshot 2 */}
            <div className="h-44 sm:h-48 relative overflow-hidden bg-gradient-to-b from-slate-100 via-slate-200 to-slate-300 flex flex-col items-center justify-center p-5 text-center">
              <div className="text-[#0d5257] italic font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                Alberta
              </div>
              <div className="text-[#0d5257] italic font-serif text-xl sm:text-2xl font-semibold -mt-1">
                Dental Care
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-7 flex-1 flex flex-col text-left space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                AISH / Alberta Dental Service Corporation (ADSC)
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                Patients receiving Assured Income for the Severely Handicapped (AISH) benefits in Alberta are entitled to dental coverage through the Alberta Dental Service Corporation. Planet Dental accepts and directly bills ADSC coverage for eligible patients.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-normal pt-1">
                If you are unsure whether you qualify for any of the above programs, our team will help you understand your eligibility and walk you through the covered services before your appointment.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FLEXIBLE PAYMENT OPTIONS (Screenshot 2 & 3) */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-sky-950/40">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight">
            <span className="text-white">Flexible</span> <span className="text-[#38bdf8]">payment options</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            We believe that the cost of dental care should never stand between you and your health. For patients without insurance — or for treatments not fully covered by their plan — Planet Dental offers flexible payment options designed to make care manageable:
          </p>
        </div>

        {/* 4 Cards Grid matching Screenshot 2 & 3: [02] [03] [04] [01] */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {paymentOptions.map((opt, idx) => (
            <div 
              key={idx}
              className="rounded-2xl sm:rounded-3xl bg-[#06142a]/95 border border-sky-900/60 hover:border-sky-400/50 p-6 sm:p-7 flex flex-col justify-between text-left shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4">
                {/* Number Badge Pill */}
                <div className="inline-block">
                  <span className="px-4 py-1.5 rounded-xl bg-gradient-to-b from-[#0b2b54] to-[#061730] border border-sky-400/50 text-white font-bold text-sm shadow-[0_0_12px_rgba(56,189,248,0.35)]">
                    {opt.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight pt-1">
                  {opt.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {opt.description}
                </p>
              </div>

              {/* Bottom Glowing Glass Shelf / Highlight Strip */}
              <div className="mt-8 pt-4">
                <div className="w-full h-8 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-400/20 to-sky-500/10 border border-sky-400/20 group-hover:border-sky-400/40 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice Text */}
        <p className="text-center text-gray-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Our team will walk you through all treatment costs at your consultation and help you design a payment schedule that works comfortably within your budget.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* 5. HOW WE HANDLE YOUR COVERAGE (Screenshot 3 & 4) */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-sky-950/40">
        {/* Background cosmic glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dental Clinicians Photo with Glowing Orbit Dots */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-sky-500/20 bg-[#05142b]">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                alt="Planet Dental Doctors and Care Coordinators"
                className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030b19]/60 via-transparent to-transparent" />
            </div>

            {/* Glowing Accent Orbit Dots matching Screenshot 3 & 4 */}
            <div className="absolute -top-3 right-8 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635]" />
            <div className="absolute top-1/2 -left-4 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8]" />
            <div className="absolute bottom-6 -right-3 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8]" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635]" />
          </div>

          {/* Right Column: Coverage Details & Checklist */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
              How we handle your <span className="text-[#38bdf8]">coverage</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At Planet Dental, our treatment coordinators take the guesswork out of dental insurance and financing. We work transparently with you and your provider so you always have full visibility into your benefits.
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Here&apos;s how it works:
              </h4>

              <div className="space-y-3 text-xs sm:text-sm text-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Review your insurance plan and confirm your coverage and annual maximums</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Provide a treatment estimate so you know your out-of-pocket costs in advance</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Submit predeterminations to your insurer when required for larger treatments</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Direct bill your insurer so you only pay your remaining copay on the appointment day</span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Answer any questions you have about your benefits clearly and without jargon</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-2">
              We want every patient to feel fully informed and financially comfortable before a single appointment begins. If you have questions about your coverage or want to discuss payment options, our team is available to help — just call or ask at the front desk.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (Screenshot 4) */}
      {/* ========================================================================= */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-sky-950/40">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        {/* Accordions matching Screenshot 4 */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl bg-[#06162d]/90 border border-sky-900/60 hover:border-sky-500/40 transition-all overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-sky-400 text-[#050e1f] flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(56,189,248,0.5)]">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-sky-950/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. QUESTIONS ABOUT FEES OR COVERAGE? CTA (Screenshot 5) */}
      {/* ========================================================================= */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center border-t border-sky-950/40">
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight">
            Questions about <span className="text-[#38bdf8]">fees or coverage?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Our team is here to help you understand your options — whether you have insurance, a government benefit, or neither. Reach out and we&apos;ll walk you through everything before your first visit.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onOpenBooking('Fees & Insurance Inquiries')}
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#38bdf8] hover:bg-[#2faee8] text-[#050e1f] font-bold text-[15px] shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] transition-all transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <div className="w-5 h-5 rounded-full bg-[#050e1f] text-[#38bdf8] flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* 3 Status Badges matching Screenshot 5 */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <span className="px-4 py-1.5 rounded-full bg-[#092244] border border-sky-500/30 text-xs sm:text-sm text-gray-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              Planet Dental
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#092244] border border-sky-500/30 text-xs sm:text-sm text-gray-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              East Hills, Calgary
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#092244] border border-sky-500/30 text-xs sm:text-sm text-gray-200 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
              Open 7 Days a Week
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CLINIC VIRTUAL TOUR GALLERY (Screenshot 5) */}
      {/* ========================================================================= */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Photo 1: Lobby Wave Pod Seating & Counter */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-sky-800/40 shadow-2xl relative group bg-[#05142b]">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Clinic Lobby" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030b19]/80 via-transparent to-transparent" />
          </div>

          {/* Photo 2: Arched Spaceship Corridor & Pac-Man Arcade */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-sky-800/40 shadow-2xl relative group bg-[#05142b]">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Spaceship Corridor & Pac-Man Arcade" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030b19]/80 via-transparent to-transparent" />
          </div>

          {/* Photo 3: State-of-the-Art Operatory Suite */}
          <div className="rounded-3xl overflow-hidden aspect-[4/3] border border-sky-800/40 shadow-2xl relative group bg-[#05142b]">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
              alt="Planet Dental Advanced Dental Operatory" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030b19]/80 via-transparent to-transparent" />
          </div>

        </div>
      </section>

    </div>
  );
};
