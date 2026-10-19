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
    { value: "automation", label: "Otomasi AI" },
    { value: "internal-tools", label: "Dashboard / Sistem Internal" },
    { value: "integration", label: "Integrasi Sistem" },
    { value: "maintenance", label: "Maintenance & Optimasi" },
    { value: "general", label: "Diskusi Umum" },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("Makasih sudah menghubungi! Saya balas dalam 24 jam.");
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
            Mulai Proyek
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
            label="Jenis Proyek"
            placeholder="Pilih kebutuhan utama"
            options={inquiryTypes}
            value={formData.inquiryType}
            onChange={(value) => handleInputChange("inquiryType", value)}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nama Lengkap"
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
              label="Bisnis / Brand"
              placeholder="Nama bisnis atau brand"
              value={formData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            <Input
              label="Timeline / Anggaran"
              placeholder="Contoh: bulan ini, 2 minggu, retainer"
              value={formData.role}
              onChange={(e) => handleInputChange("role", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-1">
              Pesan
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
              Kirim Brief Proyek
            </Button>
          </div>
        </form>

        <div className="text-center mt-6 text-sm text-text-secondary">
          <p>
            Lebih suka lewat email?{" "}
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
