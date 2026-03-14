import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClasses =
    "w-full bg-secondary border border-border px-5 py-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <main className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Get in Touch</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Contact <span className="text-gradient-gold italic">Us</span>
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className={inputClasses} />
                  {errors.name && <p className="text-destructive text-xs font-body mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email Address" className={inputClasses} />
                  {errors.email && <p className="text-destructive text-xs font-body mt-1">{errors.email}</p>}
                </div>
                <div>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className={inputClasses} />
                  {errors.subject && <p className="text-destructive text-xs font-body mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={6} className={`${inputClasses} resize-none`} />
                  {errors.message && <p className="text-destructive text-xs font-body mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-[0.2em] uppercase px-12 py-4 hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-8">Visit & Reach Us</h2>
              <div className="space-y-8">
                {[
                  { icon: MapPin, label: "Address", value: "123 Luxury Lane, Beverly Hills, CA 90210" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                  { icon: Mail, label: "Email", value: "info@amanisfragrances.com" },
                  { icon: Clock, label: "Hours", value: "Mon - Sat: 10AM - 7PM" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-5">
                    <div className="w-12 h-12 flex items-center justify-center border border-primary/30 flex-shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-foreground font-elegant text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
