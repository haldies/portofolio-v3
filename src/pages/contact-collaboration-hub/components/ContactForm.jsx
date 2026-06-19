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
  });

  const inquiryTypes = [
    { value: "website", label: "Website / Landing Page" },
    { value: "automation", label: "AI Automation" },
    { value: "internal-tools", label: "Dashboard / Internal Tools" },
    { value: "integration", label: "System Integration" },
    { value: "maintenance", label: "Maintenance & Optimization" },
    { value: "general", label: "General Discussion" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Thanks for reaching out! I'll reply within 24 hours.");
    setIsSubmitting(false);
    setFormData({
      inquiryType: "",
      name: "",
      email: "",
      company: "",
      role: "",
      message: "",
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
            Start a Project
          </p>
          <h2 className="text-3xl font-bold text-primary mb-2">
            Ceritakan project yang ingin dibereskan
          </h2>
          <p className="text-text-secondary">
            Isi singkat saja. Saya akan bantu baca kebutuhanmu dan balas dengan langkah berikutnya.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-lg p-6 lg:p-8 shadow-brand-subtle space-y-6"
        >
          <Select
            label="Project Type"
            placeholder="Pilih kebutuhan utama"
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={(value) => handleInputChange("inquiryType", value)}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              placeholder="Nama kamu"
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
              label="Business / Brand"
              placeholder="Nama bisnis atau brand"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            <Input
              label="Timeline / Budget"
              placeholder="Contoh: bulan ini, 2 minggu, retainer"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-3 py-2 border border-border rounded-brand focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Ceritakan tujuan, masalah yang ingin diselesaikan, dan referensi jika ada..."
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
              Send Project Brief
            </Button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-text-secondary">
          <p>
            Prefer email?{" "}
            <a
              href="mailto:gerhardien.p@gmail.com"
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
