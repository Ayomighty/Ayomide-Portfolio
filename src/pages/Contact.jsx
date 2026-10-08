import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const text = `Hi Ayomide, I'm ${d.name} (${d.contact}).\nSubject: ${d.subject}\n\n${d.message}`;
    window.open(`https://wa.me/2348162487439?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">Get In Touch</h1>
        <p className="text-gray-400 text-lg">
          Have a project in mind or want to collaborate? Reach out directly via WhatsApp, phone, email, or send a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 rounded-3xl border border-gray-800 space-y-6">
            <img src="\images\about.webp" alt="Oyebade Ayomide Adeleke" width="800" height="1400" loading="lazy" className="w-full h-64 rounded-2xl object-cover object-top bg-white" />
            <h3 className="text-xl font-bold text-white">Direct Contacts</h3>
            
            <div className="space-y-4 text-sm text-gray-300">
              <a href="https://wa.me/2348162487439" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-emerald-500/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">WhatsApp / Call</p>
                  <p className="font-semibold text-white group-hover:text-emerald-400 transition-colors">+234 816 248 7439</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Alternative Phone</p>
                  <p className="font-semibold text-white">+234 807 627 4297</p>
                </div>
              </div>

              <a href="mailto:ayomideoyebade884@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900/60 border border-gray-800 hover:border-indigo-500/50 transition-all group">
                <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Gmail Address</p>
                  <p className="font-semibold text-white group-hover:text-indigo-400 transition-colors">ayomideoyebade884@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-gray-800 space-y-3">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Social Handles</h4>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-300">Snapchat: @shinigam.i</span>
                <span className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-300">TikTok: @h.o.l.l.y_g.h.o.s.t</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 space-y-2">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Training Academy & Location</h4>
              <p className="text-xs text-gray-400 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                Larva Tech Academy, 5 Akinsehinwa Street, off Favos Bus stop, beside Adis hotel, New Bodija, Ibadan 200212, Oyo State.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 rounded-3xl border border-gray-800">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-600/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">WhatsApp is opening with your message</h3>
                <p className="text-gray-400 max-w-md mx-auto text-sm">
                  Press send in WhatsApp to deliver it. If nothing opened, email ayomideoyebade884@gmail.com instead.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition-all mt-4"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-white pb-2 border-b border-gray-800">Send a Direct Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="f-name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input
                      type="text"
                      required
                      id="f-name" name="name" placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="f-contact" className="text-sm font-medium text-gray-300">Your Email / Phone</label>
                    <input
                      type="text"
                      required
                      id="f-contact" name="contact" placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="f-subject" className="text-sm font-medium text-gray-300">Subject / Project Type</label>
                  <input
                    type="text"
                    required
                    id="f-subject" name="subject" placeholder="Web Development Project / Freelance Inquiry"
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="f-message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    rows={5}
                    required
                    id="f-message" name="message" placeholder="Describe your project details or inquiry here..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500 transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/25 transition-all flex items-center justify-center gap-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}