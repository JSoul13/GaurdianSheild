import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Shield, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#002855] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-[#60A5FA]" />
              <div>
                <div className="text-lg font-bold">Guardian Shield Inc.</div>
                <div className="text-xs text-gray-300">Discretion. Diligence. Resolution.</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Full-service investigative firm providing confidential case resolution, digital forensics, executive protection, and corporate security consulting.
            </p>
            <div className="text-xs text-gray-400">
              Licensed Private Investigation Agency<br />
              State of New York
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-1 text-[#60A5FA] flex-shrink-0" />
                <a href="tel:+18454761183" className="hover:text-[#60A5FA] transition-colors">
                  +1-845-476-1183
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 text-[#60A5FA] flex-shrink-0" />
                <a href="mailto:info@guardianshieldinc.com" className="hover:text-[#60A5FA] transition-colors">
                  info@guardianshieldinc.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-[#60A5FA] flex-shrink-0" />
                <div>
                  3 Neptune Road Suite R-20<br />
                  Poughkeepsie, NY 12601
                </div>
              </div>
              <div className="text-gray-300 pt-2">
                Serving New York, NYC & Beyond
              </div>
            </div>
          </div>

          {/* Professional Associations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Professional Affiliations</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-12 bg-white rounded p-1">
                  <Image
                    src="https://cdn.abacus.ai/images/0a0eef31-5dee-414a-bd83-4a545a21a5d1.png"
                    alt="World Association of Detectives"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xs text-gray-300">
                  World Association<br />of Detectives
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative w-24 h-12 bg-white rounded p-1">
                  <Image
                    src="https://cdn.abacus.ai/images/9f7205a4-fcd9-4545-b60a-77e8b799b7b5.png"
                    alt="International Private Investigators Union"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-xs text-gray-300">
                  International Private<br />Investigators Union
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-sm hover:text-[#60A5FA] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2025 Guardian Shield Inc. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#60A5FA] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <div className="text-gray-400 text-xs">
                Investigations conducted in accordance with all applicable laws
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
