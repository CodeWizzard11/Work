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

interface DentalHygienePageProps {
  onOpenBooking: (notes?: string) => void;
  onNavigateHome: () => void;
}

export const DentalHygienePage: React.FC<DentalHygienePageProps> = ({
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

  const reasonsToVisit = [
    {
      num: '01',
      title: 'Professional removal of tartar and plaque',
      description: 'Tartar (calculus) is hardened plaque that can only be removed with specialized instruments. Our hygienists use ultrasonic scaling and hand instruments to clear deposits from areas that are impossible to reach at home—including below the gum line where gum disease begins.'
    },
    {
      num: '02',
      title: 'Comprehensive oral health assessment',
      description: 'During every cleaning, your hygienist carefully examines your gums for early signs of gum disease, your teeth for developing cavities, and your soft tissues for any changes that may warrant attention. Early detection makes a significant difference in outcomes.'
    },
    {
      num: '03',
      title: 'Personalized education and guidance',
      description: 'Your hygienist can identify specific areas where your technique could be improved and provide tailored recommendations—on brushing and flossing methods, product choices, and lifestyle factors that affect your oral health.'
    }
  ];

  const cleaningSteps = [
    {
      id: 'scaling',
      title: 'Scaling',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      description: 'Removing hardened tartar from the tooth surfaces and below the gum line using ultrasonic and hand scaling instruments.'
    },
    {
      id: 'polishing',
      title: 'Polishing',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      description: 'Removing surface stains and leaving teeth smooth and clean with a low-abrasion polishing paste.'
    },
    {
      id: 'flossing',
      title: 'Flossing',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      description: 'Clearing debris from between the teeth and checking the health of the gum tissue in the contact areas.'
    },
    {
      id: 'periodontal',
      title: 'Periodontal assessment',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      description: 'Measuring gum pocket depths to monitor for signs of gum disease and track changes over time.'
    },
    {
      id: 'fluoride',
      title: 'Fluoride treatment',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
      description: 'Applying concentrated fluoride minerals to strengthen microscopic enamel pores and protect against future acid attacks.'
    },
    {
      id: 'guidance',
      title: 'Home care personalized plan',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      description: 'Reviewing customized flossing techniques, electric toothbrush tips, and anti-cavity rinses tailored to your teeth.'
    }
  ];

  const faqs = [
    {
      q: 'How often should I get a professional dental cleaning?',
      a: 'For most adults, twice a year is the standard recommendation. If you have a history of gum disease, a higher cavity rate, or other risk factors, your hygienist may suggest more frequent visits—every 3 or 4 months, for example. We\'ll advise the right schedule for your situation at your appointment.'
    },
    {
      q: 'Is dental cleaning covered by insurance?',
      a: 'Yes, most standard dental insurance packages cover preventive dental hygiene and cleanings (basic scaling and polishing) at 80% to 100%. At Planet Dental, we follow the current Alberta Dental Fee Guide and provide direct billing to insurance for maximum convenience.'
    },
    {
      q: 'Why should I tell my dentist about my medications?',
      a: 'Many prescription and over-the-counter medications can affect oral health—causing dry mouth, gum overgrowth, or altered bleeding times. Knowing your medications helps your hygiene team personalize your treatment safely and recommend protective measures.'
    },
    {
      q: 'At what age should I bring my child to the dentist?',
      a: 'We recommend bringing children for their first dental visit around age one or when their first baby tooth emerges. Early visits help children become comfortable in the dental chair and allow us to monitor tooth development early.'
    },
    {
      q: 'Is it normal for my teeth to feel sensitive after a cleaning?',
      a: 'Mild sensitivity or tenderness for 24 to 48 hours after a thorough cleaning is completely normal, especially if significant tartar was removed from near the gumline or roots. Using a sensitive-formula toothpaste and warm water rinses will quickly soothe any temporary discomfort.'
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
        
        {/* Hero Background Image: Family/Mom & Kid brushing teeth happily with blue toothbrushes */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=2200&q=85" 
            alt="Professional Dental Hygiene in East Hills, Calgary"
            className="w-full h-full object-cover object-[center_30%] opacity-45 brightness-80 scale-105 transform"
          />
          {/* Gradients to blend with dark header & cosmic theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030914] via-[#030914]/70 to-[#040b17]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030914] via-[#030914]/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-4">
              <span className="text-[#38bdf8] block">Professional Dental Hygiene</span>
              <span className="text-white block mt-1">in East Hills, Calgary</span>
            </h1>

            <p className="text-gray-200 sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-8">
              A clean, healthy foundation—because good oral health begins long before problems start.
            </p>

            {/* Book a Cleaning CTA Button matching screenshot 1 */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => onOpenBooking('Professional Dental Hygiene & Cleaning')}
                className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-7 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_25px_rgba(56,189,248,0.45)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
              >
                <span>Book a Cleaning</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Take a Tour Indicator at Bottom Center matching Screenshot 1 */}
        <div 
          onClick={() => {
            const el = document.getElementById('why-hygiene-important');
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
      {/* SECTION 2: WHY IS DENTAL HYGIENE IMPORTANT? (Matching Screenshot 1)       */}
      {/* ========================================================================= */}
      <section id="why-hygiene-important" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image in Rounded Cosmic Card with Celestial Dots */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Celestial Floating Glowing Accent Dots matching Screenshot 1 */}
            <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-[#a3e635] shadow-[0_0_15px_#a3e635] z-20 animate-pulse" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#38bdf8] shadow-[0_0_15px_#38bdf8] z-20" />
            <div className="absolute -bottom-3 left-10 w-3 h-3 rounded-full bg-[#a3e635] shadow-[0_0_10px_#a3e635] z-20" />
            <div className="absolute bottom-16 -right-4 w-3.5 h-3.5 rounded-full bg-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20" />

            {/* Main Rounded Image Container: Patient looking in mirror with dental hygienist */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80" 
                alt="Patient admiring healthy smile with dental hygienist"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Text Information matching Screenshot 1 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Why is dental <span className="text-[#38bdf8]">hygiene important?</span>
            </h2>

            <div className="space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Oral health doesn't exist in isolation. The condition of your mouth has direct, measurable links to your cardiovascular health, immune function, pregnancy outcomes, and overall quality of life. Professional dental hygiene is one of the most effective preventive measures available—and one of the most overlooked.
              </p>
              <p>
                Even with a disciplined home care routine, plaque hardens into tartar over time in areas that brushing and flossing simply can't reach. Regular professional cleanings remove that buildup before it leads to gum disease, decay, or tooth loss. They also give our team the opportunity to catch developing issues early, when they're straightforward to address.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: WHY VISIT A DENTAL HYGIENIST? (Matching Screenshot 2)          */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Why visit a <span className="text-[#38bdf8]">dental hygienist?</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Here's what our dental hygienists do that your toothbrush can't:
          </p>
        </div>

        {/* 3 Large Value Pillar Cards matching Screenshot 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reasonsToVisit.map((item) => (
            <div 
              key={item.num}
              className="rounded-3xl bg-[#07172e]/85 border border-sky-500/25 p-8 sm:p-9 shadow-[0_12px_35px_rgba(0,0,0,0.5)] flex flex-col justify-start hover:border-sky-400/50 transition-all duration-300 group"
            >
              {/* Number Badge 01, 02, 03 */}
              <div className="w-12 h-10 rounded-xl bg-[#040d1c] border border-sky-400/30 flex items-center justify-center text-sm font-bold text-[#38bdf8] mb-6 shadow-inner">
                {item.num}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-[#38bdf8] transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHAT HAPPENS DURING A PROFESSIONAL CLEANING? (Screenshot 2 & 3) */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-transparent via-[#06142a]/40 to-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
              What happens during a <span className="text-[#38bdf8]">professional cleaning?</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              A typical hygiene appointment at Planet Dental includes:
            </p>
          </div>

          {/* Carousel Navigation Buttons for Desktop & Mobile */}
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

        {/* Horizontal Scrolling Card Strip matching Screenshot 2 & 3 */}
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 px-4 sm:px-8 lg:px-12 no-scrollbar scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {cleaningSteps.map((step) => (
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
      {/* SECTION 5: AT HOME ORAL CARE TIPS (Matching Screenshot 3)                 */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Timeline with Connected Cyan Nodes matching Screenshot 3 */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              At home <span className="text-[#38bdf8]">oral care tips</span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              Professional cleanings work best when supported by a consistent home routine. Here's what makes the biggest difference:
            </p>

            {/* Connected Vertical Timeline */}
            <div className="relative pl-8 sm:pl-10 space-y-7">
              {/* Dashed vertical connector line */}
              <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-0.5 border-l-2 border-dashed border-sky-400/40" />

              {/* Tip 1 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Clean your entire mouth, not just your teeth:</strong> Bacteria thrive on your gums, tongue, cheeks, and the roof of your mouth—not just on tooth surfaces. Brush all of these areas at least twice daily to reduce overall bacterial load and prevent the buildup of plaque.
                </p>
              </div>

              {/* Tip 2 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Floss daily—every day:</strong> Brushing only reaches about 60% of your tooth surfaces. Flossing clears the areas between teeth and along the gum line where cavities and gum disease most commonly begin. Even with clean-looking teeth, plaque builds up in these hidden areas.
                </p>
              </div>

              {/* Tip 3 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Attend regular professional cleanings:</strong> For most patients, twice yearly is the standard. Patients with a history of gum disease or higher-risk factors may benefit from more frequent visits. Your hygienist will advise the right interval for you.
                </p>
              </div>

              {/* Tip 4 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Be mindful of what you eat and drink:</strong> Acidic beverages like coffee, soda, and alcohol erode enamel over time. Sugary foods fuel cavity-causing bacteria. Drinking water throughout the day, using a straw for acidic drinks, and limiting sugar all make a meaningful difference over years.
                </p>
              </div>

              {/* Tip 5 */}
              <div className="relative">
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8] ring-4 ring-[#030914]" />
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  <strong className="text-white font-semibold">Don't ignore tobacco use:</strong> Smoking and other tobacco use dramatically increases the risk of gum disease, oral cancer, implant failure, and tooth loss—while masking the bleeding that often signals gum disease. This is one of the most important changes you can make for your oral and overall health.
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

            {/* Image Container: Smiling couple brushing teeth together */}
            <div className="relative w-full max-w-md rounded-3xl overflow-hidden border border-sky-400/25 bg-[#071329] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=80" 
                alt="Smiling couple practicing positive at-home dental hygiene"
                className="w-full h-80 sm:h-96 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040b17]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (Matching Screenshot 4)             */}
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
      {/* SECTION 7: A CLEANER MOUTH. A HEALTHIER YOU (Screenshot 5)                */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 overflow-hidden">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            A cleaner mouth. <span className="text-[#38bdf8]">A healthier you</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
            Regular professional cleanings are one of the simplest, most cost-effective things you can do for your long-term health. Book yours today and let our hygiene team take care of the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => onOpenBooking('Professional Dental Hygiene / Cleaning')}
              className="bg-[#38bdf8] hover:bg-[#56cdff] text-[#050e1f] font-bold text-sm sm:text-base px-8 py-3.5 rounded-full inline-flex items-center gap-2 shadow-[0_4px_20px_rgba(56,189,248,0.4)] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          {/* Location Badges matching Screenshot 5 */}
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
              src={DENTIST_WORK_URL} 
              alt="Planet Dental High-Tech Operatory Clinic Room"
              className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030914]/80 via-transparent to-transparent" />
          </div>

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
        </div>

      </section>

    </div>
  );
};
