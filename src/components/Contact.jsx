import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "6006694414",
      href: "tel:6006694414"
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "manoj@example.com",
      href: "mailto:manoj@example.com"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Karnataka, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/MANOJRAJPUT2065",
      color: "hover:text-gray-600"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/manoj-singh",
      color: "hover:text-blue-600"
    },
    {
      icon: <Code size={24} />,
      name: "LeetCode",
      url: "https://leetcode.com/manojrajput",
      color: "hover:text-orange-600"
    }
  ];

  return (
    <section id="contact" className="px-4 py-10">
      <Toaster />
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground mt-2">
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  {info.icon}
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a href={info.href} className="text-muted-foreground hover:text-primary transition">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border rounded-lg ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" name="name" required placeholder="Name"
                  value={formData.name} onChange={handleChange}
                  className="border rounded px-4 py-3 w-full"
                />
                <input type="email" name="email" required placeholder="Email"
                  value={formData.email} onChange={handleChange}
                  className="border rounded px-4 py-3 w-full"
                />
              </div>
              <input type="text" name="subject" required placeholder="Subject"
                value={formData.subject} onChange={handleChange}
                className="border rounded px-4 py-3 w-full"
              />
              <textarea name="message" required placeholder="Message"
                rows={5} value={formData.message} onChange={handleChange}
                className="border rounded px-4 py-3 w-full resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition"
                disabled={isLoading}
              >
                <Send size={18} />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
