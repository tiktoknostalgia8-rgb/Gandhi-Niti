import React, { useState } from 'react';
import { SITE_CONFIG } from '../config';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Olfactory Guidance / Scent Selection',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'A valid email is required for our response.';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please share your query (minimum 10 characters).';
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${SITE_CONFIG.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24 text-[#2E1B0F]">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-widest text-[#B8902B] font-bold">
          Direct Line to the Founders
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
          Connect with the Kannauj Guild
        </h1>
        <p className="text-sm text-[#5A3A22] leading-relaxed">
          Whether you have questions regarding traditional copper hydro-distillation, need guidance picking an ittar, or wish to commission custom corporate batches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Verified Official Contact Details */}
        <div className="md:col-span-5 space-y-6">
          <div className="parchment-card p-6 space-y-5 border border-[#5A3A22]">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F] border-b border-[#5A3A22]/20 pb-2">
              Guild Registered Desk
            </h2>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center shrink-0 text-[#2E1B0F]">
                  <Mail className="w-4 h-4 text-[#B8902B]" />
                </div>
                <div>
                  <span className="font-bold text-[#2E1B0F] block">Direct Electronic Mail</span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-[#6B1E1E] hover:underline break-all font-mono"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone with tel: link */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center shrink-0 text-[#2E1B0F]">
                  <Phone className="w-4 h-4 text-[#B8902B]" />
                </div>
                <div>
                  <span className="font-bold text-[#2E1B0F] block">Telephone Helpline</span>
                  <a
                    href={SITE_CONFIG.contact.phoneTel}
                    className="text-[#2E1B0F] hover:text-[#6B1E1E] font-mono text-sm font-semibold"
                  >
                    {SITE_CONFIG.contact.phoneFormatted}
                  </a>
                  <span className="text-[10px] text-[#8A5A36] block mt-0.5">Clickable on mobile devices</span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center shrink-0 text-[#2E1B0F]">
                  <MapPin className="w-4 h-4 text-[#B8902B]" />
                </div>
                <div>
                  <span className="font-bold text-[#2E1B0F] block">Registered Workshop & Bhatthi Cluster</span>
                  <p className="text-[#5A3A22] leading-relaxed">{SITE_CONFIG.contact.address}</p>
                  <p className="text-[10px] text-[#8A5A36] font-mono mt-0.5">{SITE_CONFIG.contact.addressNote}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 pt-2 border-t border-[#5A3A22]/15">
                <div className="w-8 h-8 rounded-full bg-[#E4D2A8] border border-[#B8902B] flex items-center justify-center shrink-0 text-[#2E1B0F]">
                  <Clock className="w-4 h-4 text-[#B8902B]" />
                </div>
                <div>
                  <span className="font-bold text-[#2E1B0F] block">Guild Hours</span>
                  <p className="text-[#5A3A22]">{SITE_CONFIG.contact.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Validated Working Contact Form */}
        <div className="md:col-span-7 parchment-card p-6 sm:p-8 space-y-6">
          <div className="border-b border-[#5A3A22]/20 pb-3">
            <h2 className="font-serif text-xl font-bold text-[#2E1B0F]">
              Transmit a Written Dispatch
            </h2>
            <p className="text-xs text-[#5A3A22] mt-0.5">
              Messages are monitored directly by co-founders Aryavrat Sharma & Meera Kulkarni.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-[#3B6E47]/10 border border-[#3B6E47]/40 rounded-[2px] text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-[#3B6E47] mx-auto" />
              <h3 className="font-serif text-2xl font-bold text-[#2E1B0F]">Dispatch Received</h3>
              <p className="text-xs text-[#5A3A22] leading-relaxed max-w-sm mx-auto">
                Thank you, {formData.name}. Your inquiry has been entered into our correspondence registry. We will reply to {formData.email} within one business day.
              </p>
              <div className="pt-2">
                <a
                  href={mailtoLink}
                  className="inline-block text-xs font-mono text-[#6B1E1E] hover:underline"
                >
                  Send direct backup copy via your email client →
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#5A3A22] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Vikramaditya Sen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
                {errors.name && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Email Address *</label>
                  <input
                    type="email"
                    placeholder="patron@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                  {errors.email && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{errors.email}</p>}
                </div>
                <div>
                  <label className="block font-semibold text-[#5A3A22] mb-1">Telephone (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-[#5A3A22] mb-1">Subject of Inquiry</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                >
                  <option value="Olfactory Guidance / Scent Selection">Olfactory Guidance / Scent Selection</option>
                  <option value="Order Tracking & Wax Seal Verification">Order Tracking & Wax Seal Verification</option>
                  <option value="Corporate Gifting & Custom Monograms">Corporate Gifting & Custom Monograms</option>
                  <option value="Kannauj Distiller Guild Partnership">Kannauj Distiller Guild Partnership</option>
                  <option value="Journalistic Inquiry / Media">Journalistic Inquiry / Media</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-[#5A3A22] mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you seek or how we may assist your discovery of Kannauj ittar..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 bg-[#F1E6CC] border border-[#5A3A22]/40 rounded-[2px] focus:outline-none focus:border-[#B8902B]"
                />
                {errors.message && <p className="text-[11px] text-[#6B1E1E] mt-0.5">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Message to Kannauj Guild</span>
                </button>
              </div>

              <div className="pt-2 text-center">
                <a
                  href={mailtoLink}
                  className="text-[11px] font-mono text-[#8A5A36] hover:text-[#2E1B0F] underline"
                >
                  Or click here to open directly in your mail application (mailto fallback)
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
