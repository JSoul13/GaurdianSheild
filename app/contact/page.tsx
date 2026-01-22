'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Shield, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response?.ok) {
        toast({
          title: 'Message Sent Successfully',
          description: 'Thank you for contacting us. We will respond to your inquiry within 24 hours.',
        })
        setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '' })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem submitting your message. Please try again or call us directly.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClientPortal = () => {
    toast({
      title: 'Client Portal Coming Soon',
      description: 'Our secure client portal is currently under development. Please contact us directly for case updates.',
    })
  }

  return (
    <div className="flex flex-col pt-20">
      <Toaster />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002855] to-[#36454F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Schedule a confidential consultation to discuss your investigation or security needs.
            All communications are strictly confidential.
          </p>
        </div>
      </section>

      {/* Confidentiality Notice */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-3 text-[#002855]">
            <Lock className="h-6 w-6 text-[#60A5FA]" />
            <p className="text-lg font-semibold">
              Your privacy is our priority. All inquiries are handled with complete confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#002855] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#36454F] mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData?.name ?? ''}
                    onChange={(e) => setFormData({ ...formData, name: e?.target?.value ?? '' })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#36454F] mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData?.email ?? ''}
                    onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#36454F] mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData?.phone ?? ''}
                    onChange={(e) => setFormData({ ...formData, phone: e?.target?.value ?? '' })}
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-[#36454F] mb-2">
                    Type of Inquiry *
                  </label>
                  <Select
                    value={formData?.inquiryType ?? ''}
                    onValueChange={(value) => setFormData({ ...formData, inquiryType: value ?? '' })}
                    required
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General Inquiry</SelectItem>
                      <SelectItem value="Investigation">Private Investigation</SelectItem>
                      <SelectItem value="Cyber">Cyber Security</SelectItem>
                      <SelectItem value="Protection">Protection Services</SelectItem>
                      <SelectItem value="Corporate Security">Corporate Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#36454F] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData?.message ?? ''}
                    onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
                    className="w-full"
                    placeholder="Please provide details about your inquiry. All information will be kept strictly confidential."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#002855] hover:bg-[#60A5FA] text-white py-6 text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Secure Message'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#002855] mb-6">Get in Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#60A5FA]/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002855] mb-1">Phone</h3>
                    <a href="tel:+18454761183" className="text-[#36454F] hover:text-[#60A5FA] transition-colors">
                      +1-845-476-1183
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent matters</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#60A5FA]/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002855] mb-1">Email</h3>
                    <a href="mailto:info@guardianshieldinc.com" className="text-[#36454F] hover:text-[#60A5FA] transition-colors">
                      info@guardianshieldinc.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#60A5FA]/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#60A5FA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002855] mb-1">Office Location</h3>
                    <p className="text-[#36454F]">
                      3 Neptune Road Suite R-20<br />
                      Poughkeepsie, NY 12601
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Serving New York, NYC & Beyond</p>
                  </div>
                </div>
              </div>

              {/* Client Portal Button */}
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="h-6 w-6 text-[#60A5FA]" />
                  <h3 className="text-xl font-semibold text-[#002855]">Client Portal</h3>
                </div>
                <p className="text-[#36454F] mb-4">
                  Existing clients can access case updates, documents, and secure communications through our client portal.
                </p>
                <Button
                  onClick={handleClientPortal}
                  className="w-full bg-[#60A5FA] hover:bg-[#002855] text-white"
                >
                  Client Portal Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
