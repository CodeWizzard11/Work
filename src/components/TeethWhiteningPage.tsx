import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Smile
} from 'lucide-react';
import { CLINIC_INFO, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface TeethWhiteningPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const TeethWhiteningPage: React.FC<TeethWhiteningPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const inOfficePoints = [
    {
      title: 'Faster results',
      desc: 'Significant whitening achieved in a single 30–60 minute appointment'
    },
    {
      title: 'Higher concentration agents',
      desc: 'Professional-grade gels produce more dramatic, longer-lasting results than over-the-counter options'
    },
    {
      title: 'Supervised and safe',
      desc: 'Applied under clinical supervision with protective measures for your gums and soft tissue'
    },
    {
      title: 'Customized',
      desc: 'Treatment is tailored to your starting shade, sensitivity, and whitening goals'
    }
  ];

  const atHomePoints = [
    {
      title: 'More affordable',
      desc: 'Generally lower cost than in-office treatment'
    },
    {
      title: 'Convenient',
      desc: 'No appointment required'
    },
    {
      title: 'Slower results',
      desc: 'Lower-concentration agents take days or weeks to produce visible results'
    },
    {
      title: 'Higher misuse risk',
      desc: 'Without professional guidance, overuse can lead to sensitivity, enamel erosion, and uneven results'
    }
  ];

  const zoomChecklist = [
    'Correct bite issues while the jaw is still growing & brighten teeth up to 8 shades',
    'Create space for incoming adult teeth, reducing the need for extractions later',
    'Address habits such as thumb-sucking that affect dental development',
    'Improve breathing and airway function',
    'Shorten or simplify future Phase 2 orthodontic treatment'
  ];

  const maintenanceSteps = [
    {
      step: '01',
      title: 'Brush twice daily',
      desc: 'Use a soft-bristled brush and fluoride toothpaste. Consider a whitening toothpaste for maintenance between professional treatments.'
    },
    {
      step: '02',
      title: 'Floss daily',
      desc: 'Removes plaque and surface debris from between teeth where staining often accumulates'
    },
    {
      step: '03',
      title: 'Attend professional cleanings',
      desc: 'Regular hygiene appointments remove surface stains before they set in — and keep your smile looking its best between whitening treatments.'
    },
    {
      step: '04',
      title: 'Limit staining foods and drinks',
      desc: 'Coffee, black tea, red wine, dark sodas, soy sauce, and tomato-based sauces are the main culprits. When you do consume them, rinse your mouth with water afterward'
    }
  ];

  const faqs = [
    {
      q: 'Is teeth whitening safe?',
      a: 'Professional teeth whitening is safe when performed under dental supervision. At Planet Dental, your gums and soft tissues are protected throughout the procedure, and your dentist will assess your suitability for whitening beforehand. Overuse of whitening products — particularly unsupervised at-home use — can cause sensitivity and enamel erosion. Following your dentist\'s guidance prevents these risks.'
    },
    {
      q: 'How long do whitening results last?',
      a: 'Professional whitening results can last up to 3 years with proper oral care and hygiene. Avoiding heavy staining beverages like coffee, red wine, and tea, not smoking, and keeping up with regular professional dental cleanings will help extend your results significantly.'
    },
    {
      q: 'Will teeth whitening cause sensitivity?',
      a: 'Some patients may feel mild, temporary sensitivity after treatment. However, the Zoom! system is specifically formulated with desensitizing agents (ACP and potassium nitrate) to minimize sensitivity during and after treatment. Any mild sensitivity usually subsides within 24 to 48 hours.'
    },
    {
      q: 'Is teeth whitening safe during pregnancy?',
      a: 'As a safety precaution, dental authorities recommend postponing elective cosmetic treatments like teeth whitening during pregnancy and nursing. We are happy to schedule your whitening treatment once you are past this period.'
    },
    {
      q: 'Can crowns, veneers, or fillings be whitened?',
      a: 'No. Whitening agents only affect natural tooth enamel and will not lighten porcelain crowns, veneers, or composite fillings. If you have visible restorations, our dentists will discuss cosmetic options with you to ensure a harmonious, beautifully matched result.'
    },
    {
      q: 'How much does professional teeth whitening cost in Calgary?',
      a: 'At Planet Dental, our fees align with the Alberta Dental Association Fee Guide. During your consultation, we provide an upfront, transparent cost breakdown and discuss flexible payment and financing options before commencing treatment.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#030914] text-gray-100 font-sans relative overflow-hidden select-text selection:bg-sky-500 selection:text-white">
      
      {/* Cosmic Background Nebulas and Starfield */}
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
        <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px]">
          {/* Mother and child smiling brushing teeth */}
          <img 
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2000&q=80" 
            alt="Mother and child brushing teeth with radiant bright smiles"
            className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/95 via-[#030914]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-transparent to-[#030914]/40" />

          {/* Hero Content Overlay */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-[#38bdf8] block">Teeth Whitening in East</span>
                <span className="text-white block mt-1">Hills, Calgary</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-200 max-w-xl leading-relaxed">
                A noticeably brighter smile — achieved safely, quickly, and with results that last.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Teeth Whitening Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book a Whitening Appointment</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>

          {/* "Take a Tour" Animated Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
            <span className="text-xs sm:text-sm font-medium text-gray-300 tracking-wide">
              Take a Tour
            </span>
            <button
              onClick={() => {
                const el = document.getElementById('what-is-teeth-whitening');
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
      {/* SECTION 2: WHAT IS TEETH WHITENING? (Screenshot 1)                        */}
      {/* ========================================================================= */}
      <section id="what-is-teeth-whitening" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Image Card with Luminous Floating Neon Dots */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Outer Aura Glow */}
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Dots matching Screenshot 1 */}
            <div className="absolute -top-3 right-8 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute top-1/2 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
            <div className="absolute bottom-6 right-2 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
            <div className="absolute -bottom-2 left-12 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />

            {/* Image Card: Smiling woman with radiant white teeth */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#051125]/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-md w-full">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80" 
                alt="Woman with glowing white teeth and warm smile"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              <span className="text-white">What is </span>
              <span className="text-[#38bdf8]">teeth whitening?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Teeth whitening is a cosmetic dental treatment that uses peroxide-based bleaching agents to break down and remove stains from tooth enamel — restoring a brighter, more uniform colour to your smile.
              </p>
              <p>
                It is one of the most requested cosmetic treatments in dentistry, and for good reason: it's non-invasive, fast, and the results are immediately visible. Whether your teeth have dulled from coffee and tea, stained from years of red wine, or simply yellowed with age — professional whitening can make a meaningful and confident difference.
              </p>
              <p>
                At Planet Dental, we use Zoom! professional whitening — one of the most effective in-office whitening systems available — for results that are faster and more dramatic than anything achievable with over-the-counter products.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHAT CAUSES TOOTH DISCOLOURATION? (Screenshot 2)               */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-t border-sky-950/40">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">What causes </span>
            <span className="text-[#38bdf8]">tooth discolouration?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            A properly fitted custom night guard does far more than an over-the-counter option from a pharmacy shelf:
          </p>
        </div>

        {/* Two cards side-by-side matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Extrinsic staining */}
          <div className="rounded-3xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Close-up of clinical dental examination for surface stains"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Extrinsic staining
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Discolouration on the outer surface of the tooth caused by lifestyle factors — coffee, tea, red wine, dark sauces, tobacco use, and inadequate oral hygiene. Extrinsic staining responds well to professional whitening.
              </p>
            </div>
          </div>

          {/* Card 2: Intrinsic staining */}
          <div className="rounded-3xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.5)] flex flex-col">
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80" 
                alt="Dentist evaluating patient smile with mouth mirror"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Intrinsic staining
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Discolouration that originates within the tooth itself — caused by certain medications (such as tetracycline), excessive fluoride exposure during tooth development, trauma, genetics, or advancing age. Intrinsic staining can be more resistant to whitening agents, and your dentist will advise whether whitening is the most appropriate option for your specific situation.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: IN-OFFICE WHITENING VS. AT-HOME WHITENING (Screenshots 2 & 3)  */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-sky-950/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Timeline Breakdown */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                <span className="text-white">In-office whitening vs. </span>
                <span className="text-[#38bdf8]">at-home whitening</span>
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                Both approaches use peroxide-based agents, but they differ significantly in concentration, speed, and supervision:
              </p>
            </div>

            {/* In-Office Professional Whitening (Recommended) */}
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                In-office professional whitening (recommended)
              </h3>
              
              <div className="relative pl-6 space-y-5 border-l-2 border-dashed border-sky-500/40 ml-2">
                {inOfficePoints.map((pt, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Cyan Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
                    <p className="text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-white">{pt.title}: </span>
                      <span className="text-gray-300">{pt.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* At-Home Whitening */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                At-home whitening
              </h3>

              <div className="relative pl-6 space-y-5 border-l-2 border-dashed border-sky-500/40 ml-2">
                {atHomePoints.map((pt, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Cyan Node Dot */}
                    <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
                    <p className="text-sm sm:text-base leading-relaxed">
                      <span className="font-bold text-white">{pt.title}: </span>
                      <span className="text-gray-300">{pt.desc}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-2">
              If you want a safer, more predictable, and more impactful result — in-office whitening at Planet Dental is the clear choice.
            </p>
          </div>

          {/* Right Column: Smiling Girl with Cosmic Dots */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute -inset-4 bg-sky-500/10 rounded-3xl blur-2xl pointer-events-none" />

            {/* Floating Dots matching Screenshot 2 & 3 */}
            <div className="absolute -top-3 right-6 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute top-1/2 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
            <div className="absolute top-2/3 right-1 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
            <div className="absolute -bottom-2 left-8 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635] z-20" />

            {/* Card */}
            <div className="relative rounded-3xl overflow-hidden border border-sky-500/30 bg-[#051125]/80 shadow-[0_12px_40px_rgba(0,0,0,0.6)] max-w-sm w-full">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80" 
                alt="Young happy girl smiling in dental operatory chair with clean white teeth"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: ZOOM! PROFESSIONAL TEETH WHITENING (Screenshot 3)               */}
      {/* ========================================================================= */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="relative rounded-3xl border border-sky-500/30 bg-[#06142a]/90 backdrop-blur-md overflow-hidden p-6 sm:p-8 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Card with Neon Dots */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -top-3 right-6 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
              <div className="absolute top-1/2 -left-3 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_18px_#38bdf8] z-20" />
              <div className="absolute top-2/3 right-1 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_14px_#38bdf8] z-20" />
              <div className="absolute -bottom-2 left-6 w-3.5 h-3.5 rounded-full bg-[#a3e635] shadow-[0_0_12px_#a3e635] z-20" />

              <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 shadow-xl max-w-sm w-full">
                <img 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=900&q=80" 
                  alt="Dentist performing precision Zoom whitening treatment on patient"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Specifications and Checklist matching Screenshot 3 */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                <span className="text-white block">Zoom! Professional Teeth</span>
                <span className="text-[#38bdf8] block mt-1">Whitening at Planet Dental</span>
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Planet Dental uses the Zoom! whitening system — a clinically proven, LED-activated whitening treatment that can brighten your smile by up to 8 shades in a single session.
              </p>

              {/* Checklist items matching Screenshot 3 */}
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-gray-200">
                {zoomChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-gray-300 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed pt-2 border-t border-sky-950/60">
                The Zoom! system is specifically formulated to minimize sensitivity during and after treatment — a common concern with whitening that the Zoom! formula addresses directly.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Zoom! Teeth Whitening Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm px-7 py-3 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <span>Book Zoom! Whitening</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: HOW TO KEEP YOUR TEETH WHITE AFTER TREATMENT (Screenshot 4)     */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 border-t border-sky-950/40">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-white">How to keep your teeth </span>
            <span className="text-[#38bdf8]">white after treatment</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
            Professional whitening results can last up to 3 years with proper maintenance. Here's how to protect your investment:
          </p>
        </div>

        {/* 4 Cards matching Screenshot 4 order (02 Floss, 03 Cleanings, 04 Limit staining, 01 Brush twice) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 02: Floss daily */}
          <div className="relative rounded-2xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-400/40 text-sky-300 font-extrabold text-xs tracking-wider mb-5">
                02
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                Floss daily
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Removes plaque and surface debris from between teeth where staining often accumulates
              </p>
            </div>
            <div className="h-2 w-full mt-6 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          </div>

          {/* Card 03: Attend professional cleanings */}
          <div className="relative rounded-2xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-400/40 text-sky-300 font-extrabold text-xs tracking-wider mb-5">
                03
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                Attend professional cleanings
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Regular hygiene appointments remove surface stains before they set in — and keep your smile looking its best between whitening treatments.
              </p>
            </div>
            <div className="h-2 w-full mt-6 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          </div>

          {/* Card 04: Limit staining foods and drinks */}
          <div className="relative rounded-2xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-400/40 text-sky-300 font-extrabold text-xs tracking-wider mb-5">
                04
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                Limit staining foods and drinks
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Coffee, black tea, red wine, dark sodas, soy sauce, and tomato-based sauces are the main culprits. When you do consume them, rinse your mouth with water afterward
              </p>
            </div>
            <div className="h-2 w-full mt-6 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          </div>

          {/* Card 01: Brush twice daily */}
          <div className="relative rounded-2xl border border-sky-500/25 bg-[#07172e]/80 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/40 via-transparent to-transparent pointer-events-none" />
            <div>
              <span className="inline-block px-3 py-1 rounded-md bg-sky-950/80 border border-sky-400/40 text-sky-300 font-extrabold text-xs tracking-wider mb-5">
                01
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5">
                Brush twice daily
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Use a soft-bristled brush and fluoride toothpaste. Consider a whitening toothpaste for maintenance between professional treatments.
              </p>
            </div>
            <div className="h-2 w-full mt-6 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (Screenshots 4 & 5)                 */}
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
      {/* SECTION 8: A CLEANER MOUTH. A HEALTHIER YOU (Screenshot 5)                */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center border-t border-sky-950/40">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          A cleaner mouth. <span className="text-[#38bdf8]">A healthier you</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Regular professional cleanings are one of the simplest, most cost-effective things you can do for your long-term health. Book yours today and let our hygiene team take care of the rest.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Teeth Whitening Consultation')}
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
      {/* SECTION 9: CLINIC TOUR GALLERY (Screenshot 5)                             */}
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
