"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { CONTACT_FORM_UI, FORM_FIELDS, FORM_BUTTONS, PRIVACY_NOTICE } from "@/lib/content";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {CONTACT_FORM_UI.successMessage.title}
          </h3>
          <p className="text-slate-600 mb-6">
            {CONTACT_FORM_UI.successMessage.description}
          </p>
          <Button asChild>
            <a href={`tel:${CONTACT_FORM_UI.successMessage.callToAction.phone}`}>
              {CONTACT_FORM_UI.successMessage.callToAction.text}
            </a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{CONTACT_FORM_UI.title}</CardTitle>
        <p className="text-slate-600">
          {CONTACT_FORM_UI.subtitle}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                {FORM_FIELDS.name.label} {FORM_FIELDS.name.required && <span className="text-red-500">*</span>}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required={FORM_FIELDS.name.required}
                value={formData.name}
                onChange={handleInputChange}
                placeholder={FORM_FIELDS.name.placeholder}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                {FORM_FIELDS.email.label}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required={FORM_FIELDS.email.required}
                value={formData.email}
                onChange={handleInputChange}
                placeholder={FORM_FIELDS.email.placeholder}
              />
            </div>
          </div>

          {/* Phone and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
                {FORM_FIELDS.phone.label} {FORM_FIELDS.phone.required && <span className="text-red-500">*</span>}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required={FORM_FIELDS.phone.required}
                value={formData.phone}
                onChange={handleInputChange}
                placeholder={FORM_FIELDS.phone.placeholder}
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
                {FORM_FIELDS.company.label}
              </label>
              <Input
                id="company"
                name="company"
                type="text"
                required={FORM_FIELDS.company.required}
                value={formData.company}
                onChange={handleInputChange}
                placeholder={FORM_FIELDS.company.placeholder}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
              {FORM_FIELDS.message.label} {FORM_FIELDS.message.required && <span className="text-red-500">*</span>}
            </label>
            <Textarea
              id="message"
              name="message"
              required={FORM_FIELDS.message.required}
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              placeholder={FORM_FIELDS.message.placeholder}
            />
            <p className="text-sm text-slate-500 mt-2">
              {FORM_FIELDS.message.helper}
            </p>
          </div>

          {/* Submit button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                {FORM_BUTTONS.submit.loading}
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                {FORM_BUTTONS.submit.default}
              </>
            )}
          </Button>

          {/* Privacy note */}
          <p className="text-xs text-slate-500">
            {PRIVACY_NOTICE}
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

