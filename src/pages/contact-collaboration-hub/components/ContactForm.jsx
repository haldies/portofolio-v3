import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    newsletter: false,
    updates: false,
  });

  const inquiryTypes = [
    { value: "hiring", label: "Hiring & Recruitment" },
    { value: "collaboration", label: "Project Collaboration" },
    { value: "consulting", label: "AI Consulting" },
    { value: "mentorship", label: "Learning & Mentorship" },
    { value: "speaking", label: "Speaking Engagements" },
    { value: "media", label: "Media & Interviews" },
    { value: "general", label: "General Inquiry" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Thanks for reaching out! I’ll reply within 24 hours.");
    setIsSubmitting(false);
    setFormData({
      inquiryType: "",
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
      newsletter: false,
      updates: false,
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Let’s Start the Conversation
          </h2>
          <p className="text-text-secondary">
            Fill out the form below - I’ll get back to you soon.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-brand-subtle space-y-6"
        >
          <Select
            label="Inquiry Type"
            placeholder="Select inquiry type"
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={(value) => handleInputChange("inquiryType", value)}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
            />
            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Company / Organization"
              placeholder="Your company (optional)"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            <Input
              label="Role / Title"
              placeholder="e.g., Student, Recruiter, Engineer"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-brand focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
            />
          </div>

          <div className="pt-4 flex justify-end">
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              disabled={!formData.inquiryType || !formData.name || !formData.email || !formData.message}
              iconName="Send"
              iconPosition="left"
            >
              Send Message
            </Button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-text-secondary">
          <p>
            Prefer email?{" "}
            <a
              href="mailto:haldies.pasya@example.com"
              className="text-accent hover:underline"
            >
              gerhardien.p@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
