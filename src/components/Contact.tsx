import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  Send, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'readyMailto'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Prepare direct mailto fallback link with pre-filled content
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('readyMailto');

      const mailtoUrl = `mailto:${portfolioData.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 600);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-canvas relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b-2 border-ink pb-4 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-muted mb-1">
            <span className="w-2.5 h-2.5 bg-electric-pink border border-ink inline-block"></span>
            07 / THE NEXT CONVERSATION
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-ink tracking-tight">
            Let's build something meaningful.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Contact & Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-ink font-sans leading-relaxed">
              Whether discussing prospective internship opportunities, data science collaborations, or technical problem-solving—my inbox is always open.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email Card */}
              <div className="p-4 bg-canvas-card border-2 border-ink shadow-retro-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-electric-lime border border-ink">
                    <Mail className="w-4 h-4 text-ink" />
                  </div>
                  <div>
                    <div className="text-[10px] text-ink-muted uppercase">Direct Email</div>
                    <a
                      href={`mailto:${portfolioData.email}`}
                      className="font-bold text-ink hover:text-electric-blue transition-colors text-xs sm:text-sm"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 border border-ink hover:bg-canvas transition-colors"
                  title="Copy email to clipboard"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 bg-canvas-card border-2 border-ink shadow-retro-sm flex items-center gap-3">
                <div className="p-2 bg-electric-blue border border-ink text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-ink-muted uppercase">Phone Contact</div>
                  <a
                    href={`tel:${portfolioData.phone}`}
                    className="font-bold text-ink hover:text-electric-blue transition-colors text-xs sm:text-sm"
                  >
                    {portfolioData.phone}
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-canvas-card border-2 border-ink shadow-retro-sm flex items-center justify-between hover:bg-electric-blue hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-electric-blue group-hover:text-white" />
                    <span className="font-bold">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-canvas-card border-2 border-ink shadow-retro-sm flex items-center justify-between hover:bg-ink hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    <span className="font-bold">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Resume Download CTA Box */}
            <div className="p-5 bg-canvas-dark/60 border-2 border-ink shadow-retro space-y-3">
              <div className="font-mono text-xs font-bold uppercase text-ink">
                CURRICULUM VITAE // ATS FORMATTED
              </div>
              <p className="text-xs text-ink-muted leading-relaxed">
                Download my up-to-date resume in PDF format including full project metrics, coursework, and technical references.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-ink text-canvas-card font-mono text-xs font-bold hover:bg-electric-blue transition-colors shadow-retro-sm"
              >
                <Download className="w-4 h-4 text-electric-lime" />
                <span>INSPECT & DOWNLOAD RÉSUMÉ</span>
              </button>
            </div>
          </div>

          {/* Right Column: Functional Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-canvas-card border-3 border-ink p-6 sm:p-8 shadow-retro-lg">
              <div className="flex items-center justify-between pb-4 border-b-2 border-ink mb-6">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-electric-orange" />
                  Direct Dispatch Form
                </span>
                <span className="text-[10px] font-mono text-ink-muted">
                  VALIDATION ACTIVE
                </span>
              </div>

              {submitStatus === 'readyMailto' && (
                <div className="mb-6 p-4 bg-emerald-50 border-2 border-emerald-600 font-mono text-xs text-emerald-950 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-900">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Message Staged & Dispatch Ready
                  </div>
                  <p>
                    Your email client was triggered with your pre-filled inquiry. If your client did not launch automatically, you can send directly to <strong className="font-bold">{portfolioData.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitStatus('idle')}
                    className="mt-2 px-3 py-1 bg-emerald-700 text-white font-bold"
                  >
                    Send Another Note
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs text-ink uppercase font-semibold block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className={`w-full p-3 bg-canvas border-2 ${
                        errors.name ? 'border-electric-pink' : 'border-ink'
                      } text-ink focus:outline-none focus:bg-canvas-card font-mono text-xs`}
                    />
                    {errors.name && (
                      <span className="text-[11px] font-mono text-electric-pink flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <label className="font-mono text-xs text-ink uppercase font-semibold block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jane@company.com"
                      className={`w-full p-3 bg-canvas border-2 ${
                        errors.email ? 'border-electric-pink' : 'border-ink'
                      } text-ink focus:outline-none focus:bg-canvas-card font-mono text-xs`}
                    />
                    {errors.email && (
                      <span className="text-[11px] font-mono text-electric-pink flex items-center gap-1 mt-0.5">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1">
                  <label className="font-mono text-xs text-ink uppercase font-semibold block">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analytics Internship Opportunity"
                    className={`w-full p-3 bg-canvas border-2 ${
                      errors.subject ? 'border-electric-pink' : 'border-ink'
                    } text-ink focus:outline-none focus:bg-canvas-card font-mono text-xs`}
                  />
                  {errors.subject && (
                    <span className="text-[11px] font-mono text-electric-pink flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1">
                  <label className="font-mono text-xs text-ink uppercase font-semibold block">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project requirements, or what you'd like to collaborate on..."
                    className={`w-full p-3 bg-canvas border-2 ${
                      errors.message ? 'border-electric-pink' : 'border-ink'
                    } text-ink focus:outline-none focus:bg-canvas-card font-mono text-xs`}
                  />
                  {errors.message && (
                    <span className="text-[11px] font-mono text-electric-pink flex items-center gap-1 mt-0.5">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-ink text-canvas-card font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-electric-blue transition-all shadow-retro hover:translate-x-0.5 hover:translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-electric-lime" />
                  <span>{isSubmitting ? 'DISPATCHING...' : 'TRANSMIT MESSAGE'}</span>
                </button>

                <div className="text-[11px] font-mono text-ink-muted text-center pt-2">
                  Direct dispatch opens pre-formatted message in your default email application.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
