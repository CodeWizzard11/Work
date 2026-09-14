import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  Check,
  ShieldCheck,
  Smile,
  Sparkles,
  HeartPulse
} from 'lucide-react';
import { CLINIC_INFO, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface SedationDentistryPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const SedationDentistryPage: React.FC<SedationDentistryPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [activeSedationTab, setActiveSedationTab] = useState<'nitrous' | 'oral' | 'iv'>('nitrous');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const sedationOptions = {
    nitrous: {
      title: 'Nitrous oxide — laughing gas',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80',
      p1: 'Nitrous oxide is the gentlest and most widely used form of dental sedation. It is inhaled through a soft nose mask worn throughout the procedure and takes effect within minutes — producing a feeling of warmth, calm, and mild euphoria that significantly reduces anxiety without putting you to sleep.',
      p2: 'You remain fully awake, aware, and able to communicate throughout your appointment. When the mask is removed, the effects wear off within minutes — making this the only sedation option that allows you to drive yourself home afterward.',
      bestFor: 'mild to moderate anxiety, children, shorter or routine procedures, and patients who want to remain alert and drive home after their appointment',
      expect: 'light relaxation, reduced anxiety and discomfort, full awareness throughout, quick recovery — effects completely gone within minutes of removing the mask',
      safety: 'one of the most extensively studied and widely used sedation agents in dentistry, with an excellent safety record across all age groups'
    },
    oral: {
      title: 'Oral conscious sedation — calming medication',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80',
      p1: 'Oral sedation involves taking a carefully prescribed medication (such as triazolam) before your appointment. As it takes effect, you will feel deeply relaxed, drowsy, and at ease, allowing treatment to proceed smoothly and without distress.',
      p2: 'While you remain awake and able to respond to the dentist, time feels as though it passes quickly. Most patients remember very little of the procedure once the medication wears off.',
      bestFor: 'moderate dental anxiety, longer or multi-treatment appointments, patients with severe gag reflex or needle phobia',
      expect: 'deeper relaxation, drowsiness, peaceful calm, and partial or total amnesia of the treatment. Requires an adult companion to drive you home',
      safety: 'carefully calibrated medication dosing based on your medical profile, with constant monitoring of vital indicators throughout'
    },
    iv: {
      title: 'Intravenous (IV) sedation — deep twilight calm',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1000&q=80',
      p1: 'Administered directly through a small intravenous line, IV sedation provides rapid and precisely adjustable relaxation. You slip into a peaceful twilight state where you feel detached from the sights, sounds, and sensations of the dental treatment.',
      p2: 'IV sedation allows our dentists to perform complex or multi-step procedures in a single session while you remain completely comfortable and tension-free throughout.',
      bestFor: 'severe dental phobia, surgical procedures like wisdom teeth removal or multiple dental implants, or patients requiring extensive dental work in a single visit',
      expect: 'near-total sleep-like calm, complete relaxation, and little to no memory of the appointment. A companion must drive you to and from the appointment',
      safety: 'administered with continuous hospital-grade vital signs monitoring (pulse oximetry, blood pressure, ECG) by trained sedation clinicians'
    }
  };

  const candidacyPoints = [
    'Experience significant dental anxiety or fear',
    'Have had traumatic dental experiences in the past',
    'Have a strong gag reflex that makes treatment difficult',
    'Are highly sensitive to pain or sounds in a clinical environment',
    'Require a long or complex procedure — or multiple treatments in one visit',
    'Have difficulty sitting still for extended periods (including some patients with certain disabilities or conditions)',
    'Simply want to feel more relaxed and comfortable during any procedure'
  ];

  const faqs = [
    {
      q: 'Will I be fully unconscious under dental sedation?',
      a: 'No — dental sedation, even at the IV level, is not general anaesthesia. You remain conscious, breathing on your own, and able to respond to prompts throughout your appointment. The difference is that you feel profoundly relaxed — and with IV or oral sedation, you may have little or no memory of the procedure afterward.'
    },
    {
      q: 'Can children receive sedation dentistry?',
      a: 'Yes, dental sedation is safe and routinely provided for children who experience intense dental anxiety, require complex or extensive procedures, or have difficulty sitting still. Nitrous oxide (laughing gas) is the most common and gentle option for pediatric patients, as it is non-invasive and wears off immediately after treatment. We always conduct an in-depth consultation with parents beforehand.'
    },
    {
      q: 'How do I know which sedation option is right for me?',
      a: 'During your initial consultation, we will review your medical history, anxiety triggers, and the nature of the upcoming procedure. For mild nerves or regular appointments, nitrous oxide is typically ideal. For moderate anxiety or lengthier visits, oral sedation provides a deeper sense of relaxation. For severe dental phobia or surgical treatments like extractions or implants, IV sedation delivers the highest level of calm and comfort.'
    },
    {
      q: 'What should I do to prepare for sedation?',
      a: 'Preparation instructions vary by sedation level. For nitrous oxide, we generally recommend eating only a light meal 2 hours prior. For oral conscious sedation and IV sedation, you will need to fast (no food or drink) for approximately 6 to 8 hours beforehand, wear loose and comfortable clothing, take any prescribed pre-medications as directed, and arrange for a trusted adult companion to drive you home and supervise your recovery.'
    },
    {
      q: 'Can I request sedation for a routine cleaning?',
      a: 'Yes! While sedation is frequently utilized for complex restorative or oral surgery appointments, nitrous oxide (laughing gas) is readily available upon request for routine hygiene cleanings and check-ups. It is especially helpful for patients with heightened tooth sensitivity, a hyperactive gag reflex, or general dental uneasiness.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-gray-100 font-sans relative overflow-hidden select-text selection:bg-sky-500 selection:text-white">
      
      {/* Background Starfield and Galactic Nebulas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(14,116,144,0.18)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(56,189,248,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(15,23,42,0.6)_0%,transparent_100%)]" />
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO (Screenshot 1)                                            */}
      {/* ========================================================================= */}
      <section className="relative z-10 w-full overflow-hidden border-b border-sky-950/40">
        {/* Hero Banner Image */}
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80" 
            alt="Gentle Sedation Dentistry Patient Care at Planet Dental"
            className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
          />
          {/* Subtle Deep Blue Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/40" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#38bdf8] block">Sedation Dentistry in</span>
                <span className="text-white block mt-1">East Hills, Calgary</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed">
                Dental anxiety is more common than you think — and you have more options than you might realize.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Sedation Dentistry Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book an Appointment</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* "Take a Tour" Animated Indicator centered at the bottom of hero */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
              Take a Tour
            </span>
            <button
              onClick={() => {
                const el = document.getElementById('anxious-about-dental');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll to tour section"
              className="w-8 h-12 rounded-full border-2 border-[#84cc16] bg-[#84cc16]/20 flex items-start justify-center p-1.5 cursor-pointer hover:bg-[#84cc16]/30 transition-all shadow-[0_0_15px_rgba(132,204,22,0.4)]"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: YOU DON'T HAVE TO BE ANXIOUS (Screenshot 1)                     */}
      {/* ========================================================================= */}
      <section id="anxious-about-dental" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Image Card with Cosmic Floating Luminous Dots */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Outer Aura Glow */}
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Dots matching screenshot */}
            <div className="absolute -top-3 right-8 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute top-1/2 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
            <div className="absolute bottom-6 right-2 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
            <div className="absolute -bottom-2 left-12 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#051125]/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80" 
                alt="Planet Dental Clinician with relaxed smiling patient"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white block">You don't have to be anxious</span>
              <span className="text-[#38bdf8] block mt-1">about dental care</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                For many people, dental visits trigger genuine anxiety — and that anxiety becomes a barrier that keeps them from getting the care they need. Left untreated, dental problems grow quietly and become more complex and costly over time. Sedation dentistry breaks that cycle.
              </p>
              <p>
                At Planet Dental, we offer three levels of dental sedation — from gentle nitrous oxide for mild nerves to IV sedation for patients who need a deeper level of calm. Our team is experienced in sedation dentistry and will help you identify which option fits your level of anxiety, the procedure involved, and your personal preferences.
              </p>
              <p>
                Sedation dentistry is safe, widely used, and has helped countless patients finally receive the care they've been putting off. You don't need to white-knuckle your way through a dental appointment — not here.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHO IS SEDATION DENTISTRY FOR? (Screenshot 2)                  */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-sky-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">Who is sedation </span>
              <span className="text-[#38bdf8]">dentistry for?</span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-medium">
              Sedation may be appropriate if you:
            </p>

            <ul className="space-y-3.5">
              {candidacyPoints.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 border border-sky-400/50 flex items-center justify-center shrink-0 mt-0.5 text-[#38bdf8]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-3 border-t border-sky-950/60">
              Sedation is also available for children in appropriate circumstances. We will discuss all options and determine the right fit at your consultation
            </p>
          </div>

          {/* Right Image Card with Floating Dots */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Dots matching screenshot */}
            <div className="absolute -top-3 right-8 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute top-1/3 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
            <div className="absolute bottom-1/3 right-1 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
            <div className="absolute -bottom-2 left-6 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635] z-20" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#051125]/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-sm w-full">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80" 
                alt="Female clinician with relaxed male patient in dental chair"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: SEDATION OPTIONS AT PLANET DENTAL (Screenshots 2 & 3)          */}
      {/* ========================================================================= */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">Sedation options </span>
            <span className="text-[#38bdf8]">at Planet Dental</span>
          </h2>

          {/* 3 Interactive Tab Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveSedationTab('nitrous')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeSedationTab === 'nitrous'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                  : 'bg-[#07172e]/80 text-sky-400 border border-sky-500/30 hover:border-sky-400 hover:text-white'
              }`}
            >
              NITROUS OXIDE — LAUGHING GAS
            </button>
            <button
              onClick={() => setActiveSedationTab('oral')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeSedationTab === 'oral'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                  : 'bg-[#07172e]/80 text-sky-400 border border-sky-500/30 hover:border-sky-400 hover:text-white'
              }`}
            >
              ORAL SEDATION
            </button>
            <button
              onClick={() => setActiveSedationTab('iv')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeSedationTab === 'iv'
                  ? 'bg-[#38bdf8] text-[#050e1f] shadow-[0_0_20px_rgba(56,189,248,0.5)]'
                  : 'bg-[#07172e]/80 text-sky-400 border border-sky-500/30 hover:border-sky-400 hover:text-white'
              }`}
            >
              IV SEDATION
            </button>
          </div>
        </div>

        {/* Deep Space Cosmic Card */}
        <div className="relative rounded-3xl border border-sky-500/30 bg-[#06142a]/90 backdrop-blur-md overflow-hidden p-6 sm:p-8 lg:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-lg">
              <img 
                src={sedationOptions[activeSedationTab].image}
                alt={sedationOptions[activeSedationTab].title}
                className="w-full h-72 sm:h-80 lg:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Right Specifications */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {sedationOptions[activeSedationTab].title}
              </h3>

              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>{sedationOptions[activeSedationTab].p1}</p>
                <p>{sedationOptions[activeSedationTab].p2}</p>
              </div>

              {/* Key Highlights / Bullets */}
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-gray-200">
                <p className="leading-relaxed">
                  <span className="font-bold text-white">Best suited for: </span>
                  <span className="text-gray-300">{sedationOptions[activeSedationTab].bestFor}</span>
                </p>
                <p className="leading-relaxed">
                  <span className="font-bold text-white">What to expect: </span>
                  <span className="text-gray-300">{sedationOptions[activeSedationTab].expect}</span>
                </p>
                <p className="leading-relaxed">
                  <span className="font-bold text-white">Safety: </span>
                  <span className="text-gray-300">{sedationOptions[activeSedationTab].safety}</span>
                </p>
              </div>

              <div className="pt-3">
                <button
                  onClick={() => onOpenBooking(`Sedation Consultation: ${sedationOptions[activeSedationTab].title}`)}
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full inline-flex items-center gap-2 shadow-[0_2px_15px_rgba(56,189,248,0.4)] transition-all cursor-pointer"
                >
                  <span>Inquire About This Option</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Indicator Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button
            onClick={() => setActiveSedationTab('nitrous')}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              activeSedationTab === 'nitrous' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-sky-900/60'
            }`}
            aria-label="Nitrous oxide option"
          />
          <button
            onClick={() => setActiveSedationTab('oral')}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              activeSedationTab === 'oral' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-sky-900/60'
            }`}
            aria-label="Oral sedation option"
          />
          <button
            onClick={() => setActiveSedationTab('iv')}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              activeSedationTab === 'iv' ? 'w-8 bg-[#38bdf8]' : 'w-2 bg-sky-900/60'
            }`}
            aria-label="IV sedation option"
          />
        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: IS SEDATION DENTISTRY SAFE? (Screenshot 4)                     */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-sky-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">Is sedation </span>
              <span className="text-[#38bdf8]">dentistry safe?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Yes — when administered by a trained and experienced team, dental sedation is safe and well-tolerated. At Planet Dental, sedation is carefully customized based on your age, weight, medical history, current medications, and anxiety level. You will be monitored continuously throughout your appointment.
              </p>
              <p>
                We will conduct a thorough pre-sedation health review before recommending any sedation option, and we will discuss any questions or concerns you have openly before proceeding. Your safety and comfort are the first considerations at every step
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-300 bg-sky-950/60 border border-sky-500/30 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#38bdf8]" />
                <span>Hospital-Grade Continuous Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-sky-300 bg-sky-950/60 border border-sky-500/30 px-4 py-2 rounded-full">
                <HeartPulse className="w-4 h-4 text-[#a3e635]" />
                <span>Experienced Clinical Team</span>
              </div>
            </div>
          </div>

          {/* Right Image: Smiling boy with colorful pediatric nasal mask */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Outer Glow */}
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Dots matching screenshot */}
            <div className="absolute -top-3 right-6 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute top-1/2 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
            <div className="absolute top-2/3 right-1 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
            <div className="absolute -bottom-2 left-8 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635] z-20" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#051125]/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-sm w-full">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80" 
                alt="Comfortable pediatric dental sedation with gentle nose mask"
                className="w-full h-[360px] sm:h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (Screenshots 4 & 5)                 */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">Frequently asked </span>
            <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-2xl overflow-hidden border border-sky-500/25 bg-[#09152b]/80 backdrop-blur-md transition-colors shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#38bdf8] text-[#030914] flex items-center justify-center shrink-0 shadow-md">
                    {isOpen ? (
                      <ArrowUp className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-sky-500/10">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: DENTAL CARE SHOULDN'T FEEL LIKE SOMETHING TO FEAR (Screenshot 5) */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center border-t border-sky-950/40">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Dental care shouldn't feel <span className="text-[#38bdf8]">like something to fear</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you're mildly nervous or have been avoiding the dentist for years — we're here to help. Book a consultation and let's talk about the right sedation option for you. No judgment, no pressure.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Sedation Dentistry Consultation')}
            className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Pills matching Screenshot 5 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172e] border border-sky-500/30 text-xs sm:text-sm text-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
            <span>Planet Dental</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172e] border border-sky-500/30 text-xs sm:text-sm text-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
            <span>East Hills, Calgary</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#07172e] border border-sky-500/30 text-xs sm:text-sm text-gray-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]" />
            <span>Open 7 Days a Week</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CLINIC TOUR GALLERY (Screenshot 5)                             */}
      {/* 3 Photos: High-tech operatory, futuristic lobby pods, arcade space room   */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
              alt="Planet Dental Modern Clinical Operatory"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Cosmic Reception Lounge and Pod Seating"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_2} 
              alt="Planet Dental Futuristic Arcade and Space Station Hallway"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

    </div>
  );
};
