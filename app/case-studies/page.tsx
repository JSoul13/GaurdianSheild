import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileText, Building2, Heart, Shield, CheckCircle } from 'lucide-react'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      icon: Building2,
      category: 'Corporate Security',
      title: 'Case Study: Corporate IP Leak Investigation',
      problem: 'A mid-sized technology firm suspected that proprietary software code was being leaked to a competitor. The leak was causing significant financial damage and threatening the company\'s market position.',
      solution: 'Digital Forensics & Internal Investigation',
      approach: [
        'Conducted forensic analysis of employee computers and network activity',
        'Identified unusual data transfers and communications patterns',
        'Collaborated with legal counsel to ensure admissible evidence collection',
        'Interviewed key personnel using law enforcement interrogation techniques'
      ],
      outcome: 'Successfully identified the source of the leak—a disgruntled employee working with a competitor. Evidence was presented to legal counsel, resulting in termination, legal action, and the recovery of stolen intellectual property.',
      impact: 'The client was able to protect their remaining IP, secure their systems, and prevent further financial loss.'
    },
    {
      icon: Heart,
      category: 'Private Investigation',
      title: 'Scenario: Pre-Marital Due Diligence',
      problem: 'A high-net-worth individual sought to verify the background and claims of a romantic partner before entering into marriage, concerned about potential financial motives and undisclosed history.',
      solution: 'Comprehensive Background Investigation',
      approach: [
        'Verified employment history, educational credentials, and financial status',
        'Conducted discreet surveillance to confirm lifestyle claims',
        'Searched public records for civil, criminal, and financial history',
        'Interviewed associates and references through pretext when appropriate'
      ],
      outcome: 'The investigation revealed significant discrepancies in the partner\'s stated background, including undisclosed debt, prior marriages, and exaggerated career achievements.',
      impact: 'Armed with factual information, the client made an informed decision about the relationship, avoiding potential financial and personal harm.'
    },
    {
      icon: Shield,
      category: 'Insurance Investigation',
      title: 'Case Study: Insurance Fraud Detection',
      problem: 'An insurance company suspected a claimant of exaggerating injuries sustained in a workplace accident. The claimant was seeking a substantial settlement while allegedly unable to work.',
      solution: 'Surveillance & Activity Documentation',
      approach: [
        'Conducted multi-day surveillance of the claimant\'s residence and activities',
        'Documented physical capabilities inconsistent with claimed injuries',
        'Gathered video evidence of claimant engaging in strenuous activities',
        'Compiled a comprehensive report with timestamped photo and video evidence'
      ],
      outcome: 'Video surveillance captured the claimant performing activities (lifting heavy objects, playing sports) that directly contradicted medical claims of disability.',
      impact: 'The insurance company was able to deny the fraudulent claim, saving hundreds of thousands of dollars and deterring future fraud attempts.'
    },
    {
      icon: FileText,
      category: 'Due Diligence',
      title: 'Scenario: Merger & Acquisition Due Diligence',
      problem: 'A private equity firm was considering a significant investment in a target company but had concerns about the background of the company\'s executive team and the accuracy of financial disclosures.',
      solution: 'Executive Background Checks & Financial Verification',
      approach: [
        'Conducted in-depth background checks on all C-suite executives',
        'Verified educational credentials, employment history, and professional licenses',
        'Searched for undisclosed conflicts of interest, legal issues, or reputation risks',
        'Cross-referenced financial disclosures with public records and industry data'
      ],
      outcome: 'The investigation uncovered undisclosed litigation involving one executive and found discrepancies in reported revenue figures that required further scrutiny.',
      impact: 'The private equity firm was able to renegotiate terms based on the findings and structure the deal to mitigate identified risks, ultimately protecting their investment.'
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002855] to-[#36454F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Case Studies & Scenarios</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real-world examples of how Guardian Shield Inc. helps clients resolve complex investigations
            and security challenges. All details have been anonymized to protect client confidentiality.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3 text-sm text-[#36454F]">
            <Shield className="h-5 w-5 text-[#60A5FA] mt-0.5 flex-shrink-0" />
            <p>
              <strong className="text-[#002855]">Confidentiality Notice:</strong> The following case studies
              and scenarios are based on real investigative work but have been anonymized and generalized to
              protect client confidentiality. No identifying information has been disclosed.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies?.map?.((study, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#002855] to-[#60A5FA] text-white p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <study.icon className="h-8 w-8" />
                    <span className="text-sm font-semibold uppercase tracking-wide">{study?.category ?? ''}</span>
                  </div>
                  <h2 className="text-3xl font-bold">{study?.title ?? ''}</h2>
                </div>
                <div className="p-8 space-y-6">
                  {/* Problem */}
                  <div>
                    <h3 className="text-xl font-bold text-[#002855] mb-3">The Challenge</h3>
                    <p className="text-[#36454F]">{study?.problem ?? ''}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold text-[#002855] mb-3">Our Solution</h3>
                    <p className="text-[#60A5FA] font-semibold mb-3">{study?.solution ?? ''}</p>
                    <ul className="space-y-2">
                      {study?.approach?.map?.((step, sIndex) => (
                        <li key={sIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-[#60A5FA] mt-0.5 flex-shrink-0" />
                          <span className="text-[#36454F]">{step ?? ''}</span>
                        </li>
                      )) ?? []}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-[#002855] mb-3">Outcome</h3>
                    <p className="text-[#36454F] mb-4">{study?.outcome ?? ''}</p>
                    <div className="border-l-4 border-[#60A5FA] pl-4">
                      <p className="text-[#002855] font-semibold">Impact</p>
                      <p className="text-[#36454F]">{study?.impact ?? ''}</p>
                    </div>
                  </div>
                </div>
              </div>
            )) ?? []}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#002855] to-[#60A5FA] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Facing a Similar Challenge?</h2>
          <p className="text-xl mb-8">
            Every case is unique, but our approach remains consistent: discretion, diligence, and resolution.
            Let us help you find the answers you need.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#002855] hover:bg-gray-100 px-8 py-6 text-lg">
              Discuss Your Case
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
