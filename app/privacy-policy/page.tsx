export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002855] to-[#36454F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your privacy and confidentiality are paramount to Guardian Shield Inc.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#36454F] mb-8">
              <strong>Effective Date:</strong> December 30, 2024
            </p>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">1. Information We Collect</h2>
            <p className="text-[#36454F] mb-6">
              Guardian Shield Inc. collects information necessary to provide professional investigation and security services. This may include:
            </p>
            <ul className="list-disc pl-6 text-[#36454F] space-y-2 mb-6">
              <li>Contact information (name, email, phone number, address)</li>
              <li>Case-related information provided during consultations</li>
              <li>Payment and billing information</li>
              <li>Communications between you and our firm</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">2. How We Use Your Information</h2>
            <p className="text-[#36454F] mb-6">
              We use collected information solely to:
            </p>
            <ul className="list-disc pl-6 text-[#36454F] space-y-2 mb-6">
              <li>Provide investigation and security services</li>
              <li>Communicate with clients regarding their cases</li>
              <li>Process payments and maintain billing records</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Improve our services and client experience</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">3. Confidentiality</h2>
            <p className="text-[#36454F] mb-6">
              As a licensed private investigation agency, we are bound by strict confidentiality standards. All client information, case details, and communications are treated as strictly confidential and are protected under applicable privacy laws and professional ethics standards.
            </p>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">4. Information Sharing</h2>
            <p className="text-[#36454F] mb-6">
              We do not sell, trade, or otherwise transfer your information to third parties except:
            </p>
            <ul className="list-disc pl-6 text-[#36454F] space-y-2 mb-6">
              <li>When required by law or legal process</li>
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>When necessary to protect the rights, property, or safety of our firm or others</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">5. Data Security</h2>
            <p className="text-[#36454F] mb-6">
              We implement robust security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 text-[#36454F] space-y-2 mb-6">
              <li>Secure, encrypted communication channels</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure storage of physical and digital records</li>
              <li>Regular security audits and updates</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">6. Data Retention</h2>
            <p className="text-[#36454F] mb-6">
              We retain client information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Case files and related documentation are maintained in accordance with professional standards and legal requirements.
            </p>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">7. Your Rights</h2>
            <p className="text-[#36454F] mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-[#36454F] space-y-2 mb-6">
              <li>Access your personal information</li>
              <li>Request corrections to inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of non-essential communications</li>
            </ul>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">8. Cookies and Website Tracking</h2>
            <p className="text-[#36454F] mb-6">
              Our website may use cookies and similar technologies to enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">9. Changes to This Policy</h2>
            <p className="text-[#36454F] mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-3xl font-bold text-[#002855] mb-4">10. Contact Us</h2>
            <p className="text-[#36454F] mb-6">
              If you have questions or concerns about this Privacy Policy or how we handle your information, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-[#36454F] mb-2">
                <strong>Guardian Shield Inc.</strong>
              </p>
              <p className="text-[#36454F] mb-2">
                3 Neptune Road Suite R-20<br />
                Poughkeepsie, NY 12601
              </p>
              <p className="text-[#36454F] mb-2">
                Phone: <a href="tel:+18454761183" className="text-[#60A5FA] hover:underline">+1-845-476-1183</a>
              </p>
              <p className="text-[#36454F]">
                Email: <a href="mailto:info@guardianshieldinc.com" className="text-[#60A5FA] hover:underline">info@guardianshieldinc.com</a>
              </p>
            </div>

            <div className="mt-12 p-6 bg-[#002855] text-white rounded-lg">
              <p className="text-lg font-semibold mb-2">Professional Commitment</p>
              <p>
                As a New York State licensed private investigation agency and members of the World Association of Detectives (WAD) and International Private Investigators Union (IPIU), Guardian Shield Inc. adheres to the highest standards of professional ethics and confidentiality in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
