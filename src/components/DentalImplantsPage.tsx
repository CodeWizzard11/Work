import React, { useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  Smile,
  Sparkles,
  CheckCircle2,
  Check
} from 'lucide-react';
import { CLINIC_INFO, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface DentalImplantsPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const DentalImplantsPage: React.FC<DentalImplantsPageProps> = ({
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
      const scrollAmount = 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const implantOptions = [
    {
      id: 'snap-on-dentures',
      title: 'Implant-supported snap-on dentures',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      description: 'Snap-on dentures combine the stability of implants with the convenience of a removable restoration. Two to four implants are placed into the jaw, and a custom denture snaps securely onto them—preventing the slipping and discomfort of traditional dentures.',
      bullets: [
        'Eliminates denture movement and rubbing',
        'Removable for easy cleaning and hygiene',
        'More affordable than full fixed implant bridges'
      ]
    },
    {
      id: 'single-tooth-implant',
      title: 'Single tooth implant',
      image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      description: "A single implant is ideal for replacing one missing tooth. The titanium post replaces the tooth's root, and a custom crown is secured on top—blending seamlessly with your surrounding teeth.",
      bullets: [
        'Preserves bone density in the gap area',
        'Prevents neighbouring teeth from shifting',
        'Restores natural function and aesthetics',
        'Long-term alternative to bridges—no adjacent teeth altered'
      ]
    },
    {
      id: 'implant-supported-bridge',
      title: 'Implant-supported bridge',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      description: 'For patients missing several adjacent teeth, an implant-supported bridge replaces multiple teeth without using your natural teeth as anchors. Implants placed at either end of the gap support the bridge, leaving healthy neighbouring teeth completely untouched.',
      bullets: [
        'Stable, fixed, non-removable restoration',
        'Preserves jawbone and facial structure',
        'More durable than tooth-supported bridges'
      ]
    },
    {
      id: 'all-on-x',
      title: 'All-on-X fixed full arch',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      description: 'For patients missing all or most teeth, All-on-X uses strategically placed implants to support a full arch of permanent, non-removable teeth. This is the modern, life-changing alternative for full-arch tooth loss.',
      bullets: [
        'Permanent teeth that look and feel completely natural',
        'Full bite force restored',
        'Prevents bone loss across the entire jaw',
        'Same-day provisional teeth often possible'
      ]
    }
  ];

  const additionalProcedures = [
    {
      id: 'bone-grafting',
      title: 'Bone grafting',
      image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      description: 'When the jawbone is too thin or lacking in volume to support an implant, bone grafting builds up the necessary foundation. At Planet Dental, we offer autograft (from your own body), allograft (certified donor bone), and xenograft (bovine-derived) options—selected based on what\'s most appropriate for your anatomy and treatment goals.'
    },
    {
      id: 'sinus-lift',
      title: 'Sinus lift',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      description: 'In the upper jaw, the sinus cavity can limit the bone height available for implant placement. A sinus lift carefully elevates the sinus membrane and adds bone to create the space and depth needed for a successful implant. We offer both direct and indirect sinus lift techniques depending on the extent of bone height required.'
    }
  ];

  const processSteps = [
    {
      title: 'Comprehensive consultation',
      description: 'Your journey begins with a detailed examination—including digital X-rays and 3D scans—to assess your bone volume, gum health, and overall suitability for implants. We discuss your goals and outline your options clearly.'
    },
    {
      title: 'Implant placement',
      description: 'The implant post is placed into the jawbone using precise surgical techniques, under local anaesthesia. Sedation options are available for patients who prefer additional comfort.'
    },
    {
      title: 'Healing and osseointegration',
      description: 'Over the following months, the jawbone bonds naturally with the implant. A temporary crown or bridge maintains your appearance during this period.'
    },
    {
      title: 'Abutment and final restoration',
      description: 'Once healing is complete, an abutment (connector piece) is attached, and your permanent custom crown, bridge, or denture is secured—precisely matched to the colour and shape of your surrounding teeth.'
    }
  ];

  const candidatePoints = [
    'Have one or more missing teeth',
    'Have healthy gums and sufficient bone density',
    'Maintain good oral hygiene',
    'Do not smoke, or are committed to quitting',
    'Are in overall good general health'
  ];

  const faqs = [
    {
      q: 'Are dental implants painful?',
      a: 'Most patients report minimal discomfort during the procedure itself. We use local anaesthesia and offer sedation options for comfort. Mild soreness in the days following surgery is normal and typically well-managed with over-the-counter pain relief.'
    },
    {
      q: 'How long does the full implant process take?',
      a: 'The full timeline typically ranges from 3 to 6 months. This includes the initial consultation, implant placement surgery, a healing period of 3 to 4 months for osseointegration (the implant fusing with the jawbone), and the placement of the custom abutment and permanent crown. If bone grafting or a sinus lift is required, additional healing time may be needed.'
    },
    {
      q: 'How long do dental implants last?',
      a: 'With proper oral hygiene and regular dental check-ups, the titanium implant post can last a lifetime. The custom crown or prosthetic restoration attached to it typically lasts 15 to 25+ years before potentially needing maintenance or replacement due to normal wear and tear.'
    },
    {
      q: 'Can anyone get dental implants?',
      a: 'Most adults in good general health with sufficient bone density and healthy gums are great candidates for dental implants. Uncontrolled chronic conditions, active periodontal disease, or heavy smoking may require treatment or evaluation first. We assess your bone and jaw structure using high-resolution 3D digital imaging during your initial consultation to determine the best approach.'
    },
    {
      q: 'How do I care for dental implants?',
      a: 'Dental implants require the same care as natural teeth! Brush twice a day with a soft-bristle toothbrush, floss daily (using implant-specific floss or a water flosser), and visit Planet Dental regularly for professional cleanings and check-ups. Good hygiene protects the surrounding gums and ensures the longevity of your implant.'
    }
  ];

  return (
    <div className="bg-[#030914] text-white min-h-screen relative overflow-hidden selection:bg-[#38bdf8]/30 selection:text-white">
      
      {/* Background Cosmic Starfield & Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial from-sky-500/15 via-indigo-950/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[800px] -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[1600px] -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[400px] left-1/3 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (Matching Screenshot 1)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[720px] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        
        {/* Hero Background Image: Clinical examination with dental mirror */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2200&q=85" 
            alt="Dental Implants in East Hills, Calgary"
            className="w-full h-full object-cover object-[right_center] opacity-45 brightness-90 scale-105 transform"
          />
          {/* Gradients to blend with dark header & cosmic theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/70 to-[#040b17]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/80 to-transparent lg:w-3/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4">
                <span className="text-[#38bdf8] block">Dental Implants in</span>
                <span className="text-white block mt-1">East Hills, Calgary</span>
              </h1>

              <p className="text-gray-200 sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
                A permanent, natural-feeling solution for missing teeth—designed to last decades and protect your long-term oral health.
              </p>

              {/* Book a Consultation CTA Button matching Screenshot 1 */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onOpenBooking('Dental Implants Consultation')}
                  className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Right Content: Floating Transparent Pricing Table matching Screenshot 1 */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-[#09152b]/85 backdrop-blur-md border border-white/15 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.7)]">
                
                {/* Header with green dot */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-sm font-semibold text-white tracking-wide">Transparent Pricing</span>
                </div>

                {/* Table matching Screenshot 1 */}
                <table className="w-full text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-[11px] sm:text-xs">
                      <th className="text-left pb-3 font-medium">Procedure</th>
                      <th className="text-center pb-3 font-medium">Alberta Average</th>
                      <th className="text-right pb-3 font-medium text-sky-400">Planet Dental</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="py-3 text-gray-200 font-medium">Dental Implant</td>
                      <td className="py-3 text-center text-gray-400">$2,500</td>
                      <td className="py-3 text-right text-white font-semibold">$1,199</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-200 font-medium">Crown + Lab Fees</td>
                      <td className="py-3 text-center text-gray-400">$2,000</td>
                      <td className="py-3 text-right text-white font-semibold">$1,800</td>
                    </tr>
                    <tr className="border-t border-white/20 bg-white/[0.02]">
                      <td className="pt-3.5 pb-1 text-white font-bold">Total</td>
                      <td className="pt-3.5 pb-1 text-center text-gray-400 font-medium">$4,500</td>
                      <td className="pt-3.5 pb-1 text-right text-[#38bdf8] font-extrabold text-base sm:text-lg">$2,999</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        {/* Take a Tour Indicator at Bottom Center matching Screenshot 1 */}
        <div 
          onClick={() => {
            const el = document.getElementById('what-are-implants');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group opacity-90 hover:opacity-100 transition-opacity"
        >
          <span className="text-xs text-gray-300 font-medium tracking-wide">Take a Tour</span>
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-2 rounded-full border border-sky-400/20 group-hover:border-sky-400/40 w-12 h-14 -rotate-12 transition-all" />
            <div className="w-8 h-12 rounded-full border-2 border-[#a3e635] group-hover:border-[#bef264] flex items-start justify-center pt-2 shadow-[0_0_12px_rgba(163,230,53,0.35)] transition-colors">
              <div className="w-1.5 h-3 rounded-full bg-[#38bdf8] animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: WHAT ARE DENTAL IMPLANTS? (Matching Screenshot 1)              */}
      {/* ========================================================================= */}
      <section id="what-are-implants" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image in Rounded Cosmic Card with Celestial Dots */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 1 */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            {/* Main Rounded Image Container: Dentist treating patient with assistant */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Planet Dental Clinicians performing dental implant assessment"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information matching Screenshot 1 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              What are <span className="text-[#38bdf8]">dental implants?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Dental implants are small titanium posts surgically placed into the jawbone to serve as artificial tooth roots. Over time, the implant fuses with the surrounding bone through a process called osseointegration—creating a stable, permanent foundation for a custom restoration such as a crown, bridge, or denture.
              </p>
              <p>
                Unlike removable options, dental implants look, feel, and function like natural teeth. You eat, speak, and smile without thinking about them—and they help preserve the jawbone by providing the same stimulation that natural tooth roots once did.
              </p>
              <p>
                At Planet Dental, we take a personalized, precision-focused approach to every implant case—from your initial assessment through to the final restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: IMPLANT OPTIONS WE OFFER (Matching Screenshot 2)               */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Cosmic Starfield Banner Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="w-full h-full bg-gradient-to-b from-sky-950/20 via-indigo-950/15 to-transparent blur-2xl" />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Implant options <span className="text-[#38bdf8]">we offer</span>
            </h2>
          </div>

          {/* Left/Right Carousel Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollCarousel('left')}
              className="w-10 h-10 rounded-full border border-sky-400/30 bg-[#07172e] hover:bg-sky-500/20 text-[#38bdf8] flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Previous implant option"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              className="w-10 h-10 rounded-full border border-sky-400/30 bg-[#07172e] hover:bg-sky-500/20 text-[#38bdf8] flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Next implant option"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 4 Cards Carousel/Grid matching Screenshot 2 */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 pb-6 pt-2 snap-x scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {implantOptions.map((opt) => (
            <div 
              key={opt.id}
              className="flex-none w-[290px] sm:w-[340px] md:w-[370px] snap-start rounded-3xl overflow-hidden bg-[#07172e]/90 border border-sky-500/25 shadow-[0_12px_35px_rgba(0,0,0,0.55)] flex flex-col justify-between hover:border-sky-400/50 transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img 
                    src={opt.image} 
                    alt={opt.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {opt.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-5">
                    {opt.description}
                  </p>

                  {/* Connected Bullet Points with Cyan nodes */}
                  <div className="relative pl-5 space-y-2.5">
                    <div className="absolute left-[5px] top-2 bottom-2 w-0.5 border-l border-dashed border-sky-400/30" />
                    {opt.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="relative flex items-start gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] shrink-0 mt-1.5 ring-2 ring-[#07172e]" />
                        <span className="text-xs sm:text-sm text-gray-200 leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(`Consultation for ${opt.title}`)}
                  className="w-full py-2.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 text-[#38bdf8] font-bold text-xs border border-sky-400/30 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Learn More & Consult</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: ADDITIONAL IMPLANT-RELATED PROCEDURES (Matching Screenshot 2)   */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Additional implant-<span className="text-[#38bdf8]">related procedures</span>
          </h2>
        </div>

        {/* 2 Procedures Side-by-Side matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalProcedures.map((proc) => (
            <div 
              key={proc.id}
              className="rounded-3xl overflow-hidden bg-[#07172e]/90 border border-sky-500/25 shadow-[0_12px_35px_rgba(0,0,0,0.55)] flex flex-col hover:border-sky-400/50 transition-all duration-300 group"
            >
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <img 
                  src={proc.image} 
                  alt={proc.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-start">
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {proc.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {proc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: WHAT TO EXPECT DURING THE IMPLANT PROCESS (Screenshot 3)       */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Vertical Timeline matching Screenshot 3 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              What to expect during <span className="text-[#38bdf8]">the implant process</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Every implant case at Planet Dental begins with a thorough assessment and ends with a restoration that fits your life. Here's what the process typically looks like
            </p>

            {/* Connected Vertical Timeline */}
            <div className="relative pl-8 sm:pl-10 space-y-8">
              {/* Dashed vertical connector line */}
              <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-sky-400/40" />

              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white font-semibold">{step.title}:</strong> {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image with Floating Celestial Accent Dots matching Screenshot 3 */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                alt="Planet Dental Clinician during precision dental implant procedure"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WHO IS A GOOD CANDIDATE? (Matching Screenshot 4)               */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait photo of smiling patient matching Screenshot 4 */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-2 lg:order-1">
            
            {/* Celestial Floating Glowing Accent Dots */}
            <div className="absolute -top-3 -left-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 right-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20 animate-pulse" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" 
                alt="Confident smile after dental restoration"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Candidate checklist matching Screenshot 4 */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Who is a good candidate for <span className="text-[#38bdf8]">dental implants?</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Most healthy adults with one or more missing teeth are potential candidates. You may be a good candidate if you:
            </p>

            {/* Candidate Points with cyan nodes & dashed vertical line */}
            <div className="relative pl-8 sm:pl-10 space-y-4 mb-6">
              <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 border-l-2 border-dashed border-sky-400/40" />

              {candidatePoints.map((pt, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[30px] sm:-left-[35px] top-2 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8] ring-4 ring-[#030914]" />
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              If you've been told in the past that you don't have enough bone for implants, procedures like bone grafting or a sinus lift can often create the foundation needed for successful placement. The best way to know for certain is a consultation and scan.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (Matching Screenshot 4 & 5)         */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        
        {/* Subtle Starfield & Nebula Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="w-full h-full bg-gradient-to-b from-sky-950/25 via-indigo-950/20 to-transparent blur-3xl" />
        </div>

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Frequently asked <span className="text-[#38bdf8]">questions</span>
          </h2>
        </div>

        {/* Expandable Accordion Cards matching Screenshots */}
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
      {/* SECTION 8: READY TO RESTORE YOUR SMILE? CTA (Screenshot 5)                */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Ready to restore <span className="text-[#38bdf8]">your smile?</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you're replacing a single tooth or an entire arch, Planet Dental's team is here to guide you through every step—with precision, transparency, and genuine care. Book a consultation and let's map out the right path for you.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Dental Implants Consultation')}
            className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book a Consultation</span>
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
      {/* Note: No extra astronaut here, single astronaut rests on Footer below      */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
              alt="Planet Dental High-tech Operatory Room"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-sky-500/20 shadow-[0_0_25px_rgba(0,0,0,0.4)] group">
            <img 
              src={OFFICE_TOUR_1} 
              alt="Planet Dental Modern Space Lobby"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>
        </div>
      </section>

    </div>
  );
};
