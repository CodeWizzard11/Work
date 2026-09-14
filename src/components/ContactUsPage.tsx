import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Clock, 
  ChevronDown,
  Calendar,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { CLINIC_INFO } from '../data/dentalData';
import { AppointmentBooking } from '../types';

interface ContactUsPageProps {
  onOpenBooking: (service?: string, notes?: string) => void;
  onNavigateHome: () => void;
  onSuccessBooking?: (booking: AppointmentBooking) => void;
}

export const ContactUsPage: React.FC<ContactUsPageProps> = ({
  onOpenBooking,
  onNavigateHome,
  onSuccessBooking
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '12/09/2026',
    service: 'Service',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your name and phone number so our team can reach you.');
      return;
    }

    const booking: AppointmentBooking = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: formData.date,
      serviceId: formData.service === 'Service' ? 'General Consultation' : formData.service,
      notes: formData.message
    };

    if (onSuccessBooking) {
      onSuccessBooking(booking);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '12/09/2026',
        service: 'Service',
        message: ''
      });
    }, 4500);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-appointment-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const servicesList = [
    'General Dental Check-up & Hygiene Cleaning',
    'Emergency Dental Care',
    'Teeth Whitening',
    'Dental Implants',
    'Wisdom Teeth Extraction',
    'Orthodontics & Clear Aligners',
    'Custom Night Guards & TMJ Therapy',
    'Sedation Dentistry',
    'Root Canal Therapy',
    'Pediatric Dentistry',
    'Ceramic Crowns & Bridges',
    'Other / General Inquiries'
  ];

  return (
    <div className="min-h-screen bg-[#030b19] text-white selection:bg-[#38bdf8]/30 selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. TOP BANNER: "Contact East Hill Office" (Screenshot 1)                  */}
      {/* ========================================================================= */}
      <section className="relative h-[220px] sm:h-[260px] lg:h-[300px] flex items-center overflow-hidden border-b border-sky-950/50">
        {/* Dental Mirror / Clinical Exam Close-up Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80" 
            alt="Dental Examination at Planet Dental East Hills Office" 
            className="w-full h-full object-cover object-[center_35%] filter brightness-[0.75] contrast-[1.1]"
          />
          {/* Subtle Vignette and Gradients to seamlessly match Screenshot 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030e20]/90 via-[#030e20]/65 to-transparent w-full lg:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030b19] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight"
          >
            Contact East Hill Office
          </motion.h1>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN SECTION: Form & Hours (Left) + Google Map & Info (Right) (S1)    */}
      {/* ========================================================================= */}
      <section className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Cosmic Background Glows */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-indigo-700/10 rounded-full blur-3xl" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Book An Appointment Form + Working Hours */}
          <div id="contact-appointment-form" className="lg:col-span-6 space-y-10 text-left">
            
            {/* Form Section */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Book An Appointment
              </h2>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#061830] border border-[#38bdf8] rounded-xl p-6 sm:p-8 text-left space-y-3 shadow-xl"
                >
                  <div className="flex items-center gap-3 text-[#38bdf8]">
                    <CheckCircle2 className="w-6 h-6 shrink-0" />
                    <h3 className="text-lg font-bold text-white">Appointment Request Sent!</h3>
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our team at Planet Dental East Hills will contact you at <strong>{formData.phone}</strong> shortly to confirm your preferred time.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  
                  {/* Name */}
                  <div>
                    <input 
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none placeholder-gray-400 transition-colors shadow-inner"
                    />
                  </div>

                  {/* E-mail */}
                  <div>
                    <input 
                      type="email"
                      placeholder="E-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none placeholder-gray-400 transition-colors shadow-inner"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input 
                      type="tel"
                      required
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none placeholder-gray-400 transition-colors shadow-inner"
                    />
                  </div>

                  {/* Date (prefilled 12/09/2026 matching screenshot) */}
                  <div>
                    <input 
                      type="text"
                      placeholder="DD/MM/YYYY"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none placeholder-gray-400 transition-colors shadow-inner"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none appearance-none cursor-pointer pr-10 transition-colors shadow-inner"
                    >
                      <option value="Service" className="bg-[#051327] text-gray-400">Service</option>
                      {servicesList.map((srv, idx) => (
                        <option key={idx} value={srv} className="bg-[#051327] text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea 
                      rows={4}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#051327]/80 hover:bg-[#061730] text-white text-sm rounded-lg px-4 py-3.5 border border-[#1a385f] focus:border-[#38bdf8] focus:outline-none placeholder-gray-400 transition-colors resize-y shadow-inner"
                    />
                  </div>

                  {/* Submit Button: Light Sky Blue matching Screenshot 1 */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="bg-[#38bdf8] hover:bg-[#28b1ed] text-[#050e1f] font-bold text-sm px-7 py-3 rounded-lg shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all cursor-pointer transform hover:-translate-y-0.5"
                    >
                      Send Message
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* Working Hours Card (Matching Screenshot 1) */}
            <div className="rounded-xl overflow-hidden border border-[#113157] bg-[#05142a]/95 shadow-xl">
              {/* Card Header with subtle gradient */}
              <div className="px-6 py-3.5 bg-gradient-to-r from-[#0d2a4d] via-[#092240] to-[#06182f] border-b border-[#113157]">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Working Hours
                </h3>
              </div>

              {/* Rows */}
              <div className="divide-y divide-[#0c2443]/70 px-6 py-2 text-xs sm:text-sm">
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Monday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Tuesday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Wednesday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Thursday</span>
                  <span className="text-gray-200">9 am – 9 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Friday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Saturday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
                <div className="flex justify-between py-2.5 text-gray-300">
                  <span className="font-semibold text-white">Sunday</span>
                  <span className="text-gray-200">9 am – 5 pm</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Google Map Card + Address & Emergency Details */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Google Maps Container matching Screenshot 1 */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-sky-900/60 shadow-2xl bg-[#061426] h-[380px] sm:h-[420px] group">
              
              {/* Interactive Google Map Embed */}
              <iframe
                title="Planet Dental Calgary Location"
                src="https://maps.google.com/maps?q=250+East+Hills+Square+SE+%234110,+Calgary,+AB+T2A+7A7&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter brightness-[0.9] contrast-[1.08] saturate-[1.1]"
                loading="lazy"
              />

              {/* Floating Top-Left Location Badge matching Screenshot 1 */}
              <div className="absolute top-3.5 left-3.5 z-10 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-3.5 shadow-xl border border-gray-200/80 max-w-[240px] sm:max-w-[260px] text-left">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <p className="font-bold text-xs sm:text-[13px] text-gray-900 leading-tight">
                      250 E Hls Sq S E #4110
                    </p>
                    <p className="text-[11px] text-gray-600 leading-tight">
                      250 E Hls Sq S E #4110, Calgary, AB T2A 7A7, Canada
                    </p>
                  </div>
                  <a 
                    href={CLINIC_INFO.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 shrink-0 mt-0.5"
                    aria-label="Open in Google Maps"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Floating Bottom Pill: "Open in Google Map" matching Screenshot 1 */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <a
                  href={CLINIC_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#051329]/95 hover:bg-[#092244] text-white text-xs sm:text-sm font-semibold py-2.5 px-6 rounded-full border border-sky-400/40 shadow-2xl backdrop-blur-sm transition-all transform hover:scale-105"
                >
                  <span>Open in Google Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </a>
              </div>

            </div>

            {/* Address & Emergency Details below map (matching Screenshot 1) */}
            <div className="space-y-6 pt-2">
              
              {/* Address Row with Checkmark Dot */}
              <div className="flex items-start gap-3 text-sm text-gray-200">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed">
                  250 East Hills Square SE #4110 Calgary, AB, Canada T2A 7A7
                </span>
              </div>

              {/* Main Phone Row */}
              <div className="flex items-center gap-3 text-sm text-gray-200">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a 
                  href={`tel:${CLINIC_INFO.phoneClean}`}
                  className="hover:text-[#38bdf8] transition-colors font-medium"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              {/* Dental Emergency Section */}
              <div className="space-y-1.5 pt-2">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Dental Emergency
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Immediate Appointments Available Call / Text Us
                </p>
                <div className="flex items-center gap-3 pt-1 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a 
                    href={`tel:${CLINIC_INFO.phoneClean}`}
                    className="hover:text-[#38bdf8] transition-colors font-semibold text-white"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRE-FOOTER BANNER: "Ready To Meet Your New Dental Family?" (S2)        */}
      {/* ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-[#9ae9f2] via-[#b6f0f5] to-[#7be1ed] overflow-hidden">
        
        {/* Soft geometric highlights & angled shine accents matching Screenshot 2 */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-1/2 left-1/4 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl transform rotate-12" />
          <div className="absolute -bottom-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-200/50 rounded-full blur-2xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#051833] tracking-tight leading-tight">
            Ready To Meet Your New Dental Family?
          </h2>

          <p className="text-[#10345b] text-base sm:text-lg font-medium">
            Book your appointment or give us a call!
          </p>

          {/* Two Dark Navy Buttons matching Screenshot 2 */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            
            {/* Button 1: Book an Appointment */}
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#081f3d] hover:bg-[#051327] text-white font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Book an Appointment</span>
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Button 2: Visit our East Hill Office */}
            <a
              href={CLINIC_INFO.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#081f3d] hover:bg-[#051327] text-white font-bold text-sm shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer group"
            >
              <span>Visit our East Hill Office</span>
              <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};
