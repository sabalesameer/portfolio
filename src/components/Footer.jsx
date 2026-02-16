import { Mail, User, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  useEffect(() => {
    if (PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
  }, [PUBLIC_KEY]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter valid email.";
    if (!form.message.trim()) return "Message cannot be empty.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setError("Email service not configured properly.");
      return;
    }

    try {
      setIsSending(true);
      setError("");

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        user_name: form.name,
        email: form.email,
        message: form.message,
        time: new Date().toLocaleString(),
      });

      setIsSent(true);
      setForm({ name: "", email: "", message: "" });

      setTimeout(() => setIsSent(false), 3000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative bg-gradient-to-b from-orange-500/10 to-black text-gray-300 border-t border-orange-500 overflow-hidden rounded-t-3xl ">

      <div className="max-w-5xl mx-auto px-6 py-20 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold text-white mb-3">
            Let’s Work Together
          </h3>
          <p className="text-gray-400 text-sm">
            Have a project or idea? Send me a message.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">

            <AnimatePresence mode="wait">
              {isSent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-10 bg-[#181818] rounded-2xl shadow-xl"
                >
                  <h4 className="text-orange-500 text-xl font-medium mb-3">
                    Message Sent Successfully
                  </h4>
                  <p className="text-gray-400 text-sm">
                    I’ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-6"
                >

                  {/* Name */}
                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full pl-11 pr-4 py-3 bg-[#181818] text-white rounded-xl border border-gray-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full pl-11 pr-4 py-3 bg-[#181818] text-white rounded-xl border border-gray-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition"
                    />
                  </div>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    rows="5"
                    className="w-full p-4 bg-[#181818] text-white rounded-xl border border-gray-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none transition"
                  />

                  {error && (
                    <p className="text-red-400 text-sm text-center">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSending}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium shadow-lg disabled:opacity-60"
                  >
                    {isSending ? (
                      <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Vertical Contact Sidebar */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-6"
        >

          {/* Divider */}
          <div className="h-48 w-[2px] bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-70 rounded-full"></div>

          {/* Icons */}
          <div className="flex flex-col items-center gap-8 text-orange-500">

            {/* Email */}
            <a
              href="mailto:sabalesameer2004@gmail.com"
              className="relative group transition hover:scale-110"
            >
              <Mail size={22} />
              <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-black px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                sabalesameer2004@gmail.com
              </span>
            </a>

            {/* Phone (Tooltip Only) */}
            <div className="relative group cursor-pointer transition hover:scale-110">
              <User size={22} />
              <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-black px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                +91 8767699948
              </span>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/sameer-sabale-10bb082b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition hover:scale-110 font-bold"
            >
              in
              <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-black px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                LinkedIn
              </span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sabalesameer"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group transition hover:scale-110 font-bold"
            >
              GH
              <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-black px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                GitHub
              </span>
            </a>

          </div>

        </motion.div>

      </div>
    </footer>
  );
}