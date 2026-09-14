import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowUp,
  Sparkles,
  ShieldCheck,
  Smile,
  Scan,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { CLINIC_INFO, OFFICE_TOUR_1, OFFICE_TOUR_2 } from '../data/dentalData';

interface CustomNightGuardsPageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const CustomNightGuardsPage: React.FC<CustomNightGuardsPageProps> = ({
  onOpenBooking,
  onNavigateHome
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const benefits = [
    {
      num: '01',
      title: 'Protects your enamel and teeth',
      description: 'Custom night guards absorb and redistribute the forces of grinding, preventing the progressive wear that erodes enamel and can fracture teeth or damage restorations over time.'
    },
    {
      num: '02',
      title: 'Reduces headaches',
      description: 'Because grinding keeps your jaw muscles under sustained tension throughout the night, morning headaches are a frequent symptom of bruxism. A night guard allows those muscles to rest, significantly reducing headache frequency for most patients.'
    },
    {
      num: '03',
      title: 'Relieves jaw pain and TMJ pressure',
      description: 'Grinding places excessive load on your jaw joints. A well-fitted guard positions your jaw in a relaxed, neutral posture—reducing soreness and protecting the joint itself.'
    },
    {
      num: '04',
      title: 'Improves sleep quality',
      description: 'Continuous clenching disrupts your sleep cycle without you realizing it. Eliminating that tension often results in noticeably more restful sleep.'
    }
  ];

  const pantheraFeatures = [
    {
      title: 'Extremely thin and comfortable to wear',
      description: 'Panthera guards are significantly slimmer than traditional acrylic options, which means less bulk in your mouth and faster adaptation.'
    },
    {
      title: 'Digitally designed for a precise, secure fit',
      description: 'Fabricated from a digital scan of your mouth, Panthera guards offer excellent retention—staying securely in place throughout the night without feeling tight.'
    },
    {
      title: 'Medical-grade nylon resists cracking and wear',
      description: 'The material is specifically engineered to withstand the forces of heavy clenching and grinding night after night.'
    },
    {
      title: 'Hypoallergenic and easy to clean',
      description: 'Suitable for patients with sensitivities, and simple to maintain with minimal effort.'
    },
    {
      title: 'Easier to speak and breathe with',
      description: 'The slim profile makes Panthera far less intrusive than bulkier traditional guards—a key factor in long-term compliance.'
    }
  ];

  const fabricationSteps = [
    {
      title: 'Consultation and assessment',
      description: 'Your dentist examines your teeth and bite, assesses the severity of your bruxism, and determines which type of guard is most appropriate for your situation.',
      icon: Sparkles
    },
    {
      title: 'Digital scan',
      description: 'A comfortable digital scan of your mouth captures precise measurements of your bite. No impression trays, no mess.',
      icon: Scan
    },
    {
      title: 'Fabrication',
      description: 'Your guard is custom-fabricated—either in our clinic or at a specialized dental laboratory—to the exact specifications of your scan.',
      icon: Wrench
    },
    {
      title: 'Fitting appointment:',
      description: "Your completed guard is checked for fit, adjusted if needed, and you're given clear guidance on wear and care.",
      icon: Smile
    }
  ];

  const faqs = [
    {
      q: 'How do I know if I need a night guard?',
      a: 'Common signs include waking with jaw soreness or headaches, a partner reporting grinding sounds during sleep, visible flattening or wear on your teeth, increased tooth sensitivity, and unexplained chipping or cracking. Your dentist can identify bruxism-related wear during a routine exam—often before you notice any symptoms yourself.'
    },
    {
      q: 'How long does a night guard last?',
      a: 'A high-quality custom night guard typically lasts between 2 to 5 years, depending on the severity of your clenching or grinding and how well you care for it. Premium nylon guards like Panthera are exceptionally durable and resist cracking better than traditional acrylics. Bring your guard to your regular check-ups so our dentists can inspect its fit and wear.'
    },
    {
      q: 'Can I wear a night guard if I have crowns, veneers, or implants?',
      a: 'Yes, absolutely! In fact, night guards are strongly recommended to protect dental restorations like crowns, veneers, bridges, and implants from the immense forces generated during sleep clenching. Because our guards are custom-molded from precise digital scans, they fit comfortably around all your restorations without exerting damaging pressure.'
    },
    {
      q: 'How do I care for my night guard?',
      a: 'Rinse your night guard with cool water immediately after waking. Gently brush it using a soft toothbrush and non-abrasive antibacterial soap (avoid abrasive toothpaste which can scratch the surface). Allow it to air-dry completely before storing it in its ventilated case. Never soak or wash it in boiling hot water, as heat can warp the precise custom fit.'
    }
  ];

  return (
    <div className="bg-[#030914] text-white min-h-screen relative overflow-hidden selection:bg-[#38bdf8]/30 selection:text-white">
      
      {/* Background Cosmic Starfield & Nebula Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-radial from-sky-500/15 via-indigo-950/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-[800px] -left-48 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[1600px] -right-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-[2800px] left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[400px] right-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION (Matching Screenshot 1)                           */}
      {/* ========================================================================= */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        
        {/* Hero Background Image: Peaceful woman sleeping/smiling */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=2200&q=85" 
            alt="Custom Night Guards in East Hills, Calgary"
            className="w-full h-full object-cover object-[right_center] opacity-55 brightness-95 scale-105 transform"
          />
          {/* Cosmic gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/65 to-[#040b17]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/85 to-transparent lg:w-3/5" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4">
              <span className="text-[#38bdf8] block">Custom Night Guards</span>
              <span className="text-white block mt-1">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-200 sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
              Protect your teeth, relieve your jaw, and sleep soundly —with a night guard fitted precisely to you.
            </p>

            {/* Book an Appointment CTA matching Screenshot 1 */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Custom Night Guards Consultation')}
                className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Take a Tour Indicator at Bottom Center matching Screenshot 1 */}
        <div 
          onClick={() => {
            const el = document.getElementById('do-you-grind');
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
      {/* SECTION 2: DO YOU GRIND OR CLENCH YOUR TEETH AT NIGHT? (Screenshot 1)     */}
      {/* ========================================================================= */}
      <section id="do-you-grind" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image in Rounded Cosmic Card with Celestial Glowing Dots */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 1 */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            {/* Main Rounded Image Container: Dentist examining patient */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80" 
                alt="Planet Dental Clinician assessing teeth grinding"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information matching Screenshot 1 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Do you grind or clench <span className="text-[#38bdf8]">your teeth at night?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Bruxism—the habit of grinding or clenching your teeth during sleep—is more common than most people realize, and it often goes unnoticed until the damage becomes visible. Worn-down enamel, chipped teeth, persistent morning headaches, and jaw soreness are all signs that bruxism may be affecting you.
              </p>
              <p>
                A custom-fitted night guard creates a protective barrier between your upper and lower teeth, absorbing the forces of grinding and relieving pressure on your jaw joints. At Planet Dental, we offer precision-fitted night guards—including premium Panthera Night Guards—so you get protection that actually stays in place and feels comfortable enough to wear every night.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY DO PEOPLE GRIND AND CLENCH THEIR TEETH? (Screenshot 2)     */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Information matching Screenshot 2 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Why do people grind and <span className="text-[#38bdf8]">clench their teeth?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Stress, anxiety, and tension are among the most common triggers—but bruxism doesn't require any of these to occur. Sleep disorders, certain medications, misaligned teeth, and simply the way your bite rests can all contribute. In many cases, people are completely unaware they're doing it until a partner notices the sound, or a dentist spots the wear.
              </p>
              <p>
                Left unaddressed, chronic bruxism can lead to: worn or flattened tooth enamel, chipped or cracked teeth, damage to existing fillings, TMJ pain and jaw stiffness, persistent headaches, and disrupted sleep quality.
              </p>
            </div>
          </div>

          {/* Right Column: Close-up dental treatment image with glowing celestial dots */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots */}
            <div className="absolute -top-3 -left-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 right-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -left-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80" 
                alt="Close-up dental alignment and bite check"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: BENEFITS OF A CUSTOM NIGHT GUARD (Screenshot 2 & 3)            */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden">
        
        {/* Cosmic Nebula Background Banner */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full bg-gradient-to-b from-[#030914] via-[#06152d]/90 to-[#030914]" />
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Benefits of a <span className="text-[#38bdf8]">custom night guard</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              A properly fitted custom night guard does far more than an over-the-counter option from a pharmacy shelf:
            </p>
          </div>

          {/* 4 Benefits Cards matching Screenshot 2 & 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div 
                key={b.num}
                className="rounded-3xl p-6 sm:p-7 bg-[#091830]/85 backdrop-blur-md border border-sky-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.55)] flex flex-col justify-start hover:border-sky-400/50 hover:bg-[#0c2040]/90 transition-all duration-300"
              >
                {/* Number Badge with dark pill & glowing cyan outline */}
                <div className="w-14 h-11 rounded-xl bg-[#040e20] border border-sky-400/40 text-[#38bdf8] font-mono font-bold text-lg flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  {b.num}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                  {b.title}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: PANTHERA NIGHT GUARDS — PREMIUM DIGITAL PROTECTION (Screenshot 3)*/}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image in Rounded Card with Hands holding Dental Model */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 3 */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Hands holding dental cast and precision custom night guard model"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Panthera Overview matching Screenshot 3 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Panthera Night Guards — <span className="text-[#38bdf8]">premium digital protection</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                At Planet Dental, we proudly offer Panthera Night Guards: one of the most advanced custom night guard solutions available today. Panthera guards are designed using 3D digital scanning and CAD/CAM fabrication—no messy impressions, and a fit that is precisely mapped to your bite geometry.
              </p>
              <p>
                They are made from high-strength, medical-grade nylon that is thinner, lighter, and more durable than traditional acrylic guards—making them an excellent option for patients who find conventional guards bulky, uncomfortable, or prone to breaking.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: WHAT MAKES PANTHERA DIFFERENT? (Screenshot 4)                  */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Connected Checklist with cyan nodes & dashed vertical line */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
              What makes <span className="text-[#38bdf8]">Panthera different?</span>
            </h2>

            <div className="relative pl-8 sm:pl-10 space-y-6 mb-8">
              {/* Dashed vertical connector line */}
              <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-sky-400/40" />

              {pantheraFeatures.map((feat, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white font-semibold">{feat.title}:</strong> {feat.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Many patients who have struggled to tolerate traditional night guards find Panthera significantly easier to wear consistently—which translates directly into better protection and outcomes
            </p>
          </div>

          {/* Right Column: Image of clinician and smiling patient matching Screenshot 4 */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Patient laughing and conversing comfortably with dentist"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: HOW ARE CUSTOM NIGHT GUARDS MADE? (Screenshot 4)               */}
      {/* ========================================================================= */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden">
        
        {/* Orbital Earth with City Lights Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
            alt="Earth night lights from space"
            className="w-full h-full object-cover object-center opacity-30 brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030914] via-[#030914]/80 to-[#030914]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              How are custom <span className="text-[#38bdf8]">night guards made?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Getting a custom night guard at Planet Dental is a straightforward, two-appointment process:
            </p>
          </div>

          {/* 4 Process Cards matching Screenshot 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fabricationSteps.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-3xl p-6 sm:p-7 bg-[#091830]/85 backdrop-blur-md border border-sky-500/25 shadow-[0_15px_35px_rgba(0,0,0,0.55)] flex flex-col justify-start hover:border-sky-400/50 hover:bg-[#0c2040]/90 transition-all duration-300"
                >
                  {/* Glowing Icon Square Container matching Screenshot 4 */}
                  <div className="w-12 h-12 rounded-2xl bg-[#040e20] border border-sky-400/40 text-[#38bdf8] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
                    <IconComp className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight">
                    {st.title}
                  </h3>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {st.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: FREQUENTLY ASKED QUESTIONS (Screenshot 5)                      */}
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

        {/* Expandable Accordion Cards matching Screenshot 5 */}
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
      {/* SECTION 9: SLEEP BETTER. PROTECT YOUR SMILE CTA (Screenshot 6)            */}
      {/* ========================================================================= */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
          Sleep better. <span className="text-[#38bdf8]">Protect your smile</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          If you've been waking up with headaches, jaw pain, or a partner has mentioned grinding sounds at night—a custom night guard may be exactly what you need. We'll assess your situation and walk you through the right option for you.
        </p>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => onOpenBooking('Custom Night Guards Consultation')}
            className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* 3 Pills matching Screenshot 6 */}
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
      {/* SECTION 10: CLINIC TOUR GALLERY (Screenshot 6)                            */}
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
