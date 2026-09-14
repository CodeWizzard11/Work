import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Smile,
  Clock,
  Sparkles,
  Heart
} from 'lucide-react';
import { CLINIC_INFO, DENTIST_WORK_URL, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface DentalCheckUpPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const DentalCheckUpPage: React.FC<DentalCheckUpPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 380;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const examSteps = [
    {
      id: 'history',
      title: 'Medical history review',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      description: 'We begin every appointment by reviewing your medical history, current medications, and any previous dental treatments. This helps us avoid adverse reactions, flag conditions that affect oral health, and tailor your care accordingly.'
    },
    {
      id: 'clinical',
      title: 'Clinical examination',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      description: 'Your dentist carefully examines your teeth, gums, and all supporting structures in the oral cavity—checking for signs of decay, gum disease, bite issues, and anything else that warrants attention.'
    },
    {
      id: 'xrays',
      title: 'Dental X-rays',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      description: 'Where clinically indicated, X-rays allow us to detect problems that aren\'t visible to the naked eye—hidden cavities between teeth, bone loss, root issues, and more. We use digital X-rays, which deliver significantly less radiation than traditional film.'
    },
    {
      id: 'cleaning',
      title: 'Professional cleaning & polishing',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      description: 'Even with regular brushing and flossing, plaque and tartar build up over time. Precision polishing removes stubborn deposits and surface stains, leaving your teeth smooth, squeaky-clean, and refreshed.'
    },
    {
      id: 'cancer-screening',
      title: 'Oral cancer screening',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      description: 'A swift, life-saving visual and tactile evaluation of your tongue, palate, throat tissues, and neck lymph nodes to detect unusual patches or abnormalities at their most treatable stage.'
    },
    {
      id: 'consultation',
      title: 'Transparent treatment discussion',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      description: 'We present our findings on chairside high-definition screens, answer your questions in plain terms, outline fee guide transparency, and formulate a comfortable step-by-step oral health plan.'
    }
  ];

  const faqs = [
    {
      q: 'How often should I go for a dental check-up?',
      a: 'For most people, twice a year is the standard recommendation. However, the right frequency for you depends on your current oral health. Patients with a history of gum disease, frequent cavities, or other risk factors may benefit from more frequent visits. Your dentist will recommend an interval that makes sense for your specific situation.'
    },
    {
      q: 'What is included in a routine dental check-up?',
      a: 'A routine dental check-up includes a comprehensive review of your medical history, a thorough visual examination of teeth and gums, digital X-rays when clinically indicated, an oral cancer screening, periodontal probing to measure gum health, and a personalized discussion of your treatment options and preventative care plan.'
    },
    {
      q: 'Is a dental check-up covered by insurance?',
      a: 'Yes, most dental insurance plans cover routine comprehensive dental exams, cleanings, and diagnostic X-rays either at 100% or with minimal out-of-pocket costs. At Planet Dental, we follow the current Alberta Dental Fee Guide and offer convenient direct billing (assignment of benefits) to most major insurance providers.'
    },
    {
      q: 'When should I bring my child for their first dental exam?',
      a: 'The Canadian Dental Association recommends that children have their first dental visit by their first birthday or within six months of their first tooth coming in. Early exams allow us to monitor tooth eruption, check for baby bottle tooth decay, and help your child build positive, stress-free feelings about going to the dentist.'
    },
    {
      q: 'Will my comprehensive dental exam hurt?',
      a: 'Not at all. Comprehensive dental examinations are entirely non-invasive and gentle. If you experience heightened tooth sensitivity or dental anxiety, simply let our team know—we can apply comforting topical numbing gels and tailor the pace of the appointment to your comfort level.'
    }
  ];

  return (
    <div className="bg-[#030914] text-white min-h-screen relative overflow-hidden selection:bg-[#38bdf8]/30 selection:text-white">
      
      {/* Background Cosmic Starfield & Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial from-sky-500/15 via-indigo-900/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[800px] -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[1600px] -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[400px] left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (Matching Screenshot 1)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        
        {/* Hero Background Image with Subtle Vignette & Cosmic Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=85" 
            alt="Comprehensive Dental Exams in East Hills, Calgary"
            className="w-full h-full object-cover object-[center_35%] opacity-40 brightness-75 scale-105 transform"
          />
          {/* Gradients to blend with dark header & cosmic theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/75 to-[#040b17]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4">
              <span className="text-[#38bdf8] block">Comprehensive Dental Exams</span>
              <span className="text-white block mt-1">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-200 sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
              A thorough, unhurried exam that gives you a clear picture of your oral health—and a confident path forward.
            </p>

            {/* Book Your Exam CTA Button matching screenshot */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Comprehensive Dental Exam / Check-up')}
                className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book Your Exam</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Take a Tour Indicator at Bottom Center matching Screenshot 1 */}
        <div 
          onClick={() => {
            const el = document.getElementById('what-is-exam');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group opacity-90 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs text-gray-300 font-medium tracking-wide">Take a Tour</span>
          <div className="relative flex items-center justify-center">
            {/* Elliptical orbit glow */}
            <div className="absolute -inset-2 rounded-full border border-sky-400/20 group-hover:border-sky-400/40 w-12 h-14 -rotate-12 transition-all" />
            <div className="w-8 h-12 rounded-full border-2 border-[#a3e635] group-hover:border-[#bef264] flex items-start justify-center pt-2 shadow-[0_0_12px_rgba(163,230,53,0.35)] transition-colors">
              <div className="w-1.5 h-3 rounded-full bg-[#38bdf8] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT IS A DENTAL EXAM? (Matching Screenshot 1)                */}
      {/* ========================================================================= */}
      <section id="what-is-exam" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image in Rounded Cosmic Card with Celestial Dots */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 1 */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            {/* Main Rounded Image Container */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Detailed clinical examination with precision dental instruments"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information matching Screenshot 1 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              What is a <span className="text-[#38bdf8]">dental exam?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                A comprehensive dental exam is more than a quick look at your teeth. It’s a systematic review of your entire oral health—teeth, gums, bite, jaw, and soft tissues—designed to detect problems early, when they’re easiest to treat.
              </p>
              <p>
                At Planet Dental, your exam is unhurried. We take time to understand your history, explain what we find, and help you make informed decisions about your care. Whether this is your first visit or a routine check-up, you’ll leave with a clear understanding of where your oral health stands and what steps, if any, come next.
              </p>
              <p className="text-white font-medium">
                If you’re looking for a trusted dental exam provider in East Hills, Calgary—you’ve arrived.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHAT HAPPENS AT A DENTAL EXAM? (Matching Screenshot 2)         */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#06142a]/40 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              What happens at a <span className="text-[#38bdf8]">dental exam?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Here’s a detailed overview of each step in a routine dental exam at Planet Dental:
            </p>
          </div>

          {/* Carousel Navigation Buttons for Large Screens */}
          <div className="flex justify-end items-center gap-3 mt-4">
            <button
              onClick={() => scrollCarousel('left')}
              className="p-2.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all cursor-pointer shadow-md"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="p-2.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-sky-400 hover:text-white hover:bg-sky-500/20 transition-all cursor-pointer shadow-md"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Card Strip matching Screenshot 2 */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 sm:px-8 lg:px-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {examSteps.map((step, idx) => (
            <div 
              key={step.id}
              className="flex-none w-[300px] sm:w-[350px] md:w-[380px] snap-start rounded-2xl overflow-hidden bg-[#07172e]/90 border border-sky-500/25 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#040b17]/80 backdrop-blur-md border border-sky-400/30 text-xs font-semibold text-[#38bdf8]">
                  Step 0{idx + 1}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-start">
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: BENEFITS OF REGULAR DENTAL CHECK-UPS (Matching Screenshot 3)   */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Timeline with Connected Cyan Nodes matching Screenshot 3 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Benefits of regular <span className="text-[#38bdf8]">dental check-ups</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Coming in once or twice a year is one of the most effective investments you can make in your long-term health:
            </p>

            {/* Connected Vertical Timeline */}
            <div className="relative pl-8 sm:pl-10 space-y-8">
              {/* Dashed vertical connector line */}
              <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-sky-400/40" />

              {/* Bullet 1 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Early detection of problems:</strong> Cavities caught early are quick to treat. Gum disease detected in its early stages is reversible. Oral cancer found early is far more treatable. Routine exams are how small issues get addressed before they become serious ones.
                </p>
              </div>

              {/* Bullet 2 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Better oral hygiene:</strong> Your hygienist and dentist can identify gaps in your home care routine that you might not notice yourself—and provide targeted guidance to close them.
                </p>
              </div>

              {/* Bullet 3 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Stronger overall health:</strong> Oral health is closely connected to systemic health. Gum disease has been linked to cardiovascular disease, diabetes, and complications in pregnancy. A healthy mouth contributes to a healthier body.
                </p>
              </div>

              {/* Bullet 4 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Confidence in your smile:</strong> Professional cleanings remove surface stains and tartar buildup, leaving your teeth looking and feeling noticeably cleaner.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image with Glowing Accent Dots matching Screenshot 3 */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 3 */}
            <div className="absolute -top-3 -right-2 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20 animate-pulse" />
            <div className="absolute -bottom-3 left-8 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635] z-20" />
            <div className="absolute bottom-20 -right-3 w-3 h-3 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] z-20" />

            {/* Image Container */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80" 
                alt="Smiling patient receiving gentle oral examination at Planet Dental"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (Matching Screenshot 4)             */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden border border-sky-400/25 bg-[#07172e]/85 backdrop-blur-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-sky-500/5 transition-colors"
                >
                  <span className="font-medium sm:font-semibold text-white text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0 text-[#050e1f]">
                    {isOpen ? (
                      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-sky-400/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: YOUR ORAL HEALTH STARTS HERE (Matching Screenshot 4 & 5)       */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 overflow-hidden">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Your <span className="text-[#38bdf8]">oral health</span> starts here
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            A comprehensive exam is the foundation of a healthy smile. Whether it’s been six months or six years since your last visit, we’re here to help you get back on track—without judgment, and at your own pace.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenBooking('Comprehensive Dental Exam / Check Up')}
              className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Location Badges matching Screenshot 4 & 5 */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>Planet Dental</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>East Hills, Calgary</span>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#091e3a] border border-sky-400/30 text-xs font-semibold text-gray-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
              <span>Open 7 Days a Week</span>
            </div>
          </div>
        </div>

        {/* 3 Clinic Gallery Photography Cards matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mb-16">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Clinic Reception & Waiting Lounge"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Futuristic Space Hallway and Arcade Room"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={DENTIST_WORK_URL} 
              alt="Planet Dental High-Tech Dental Operatory Suite"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>
        </div>

      </section>

    </div>
  );
};
