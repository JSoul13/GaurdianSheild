import Image from 'next/image'
import Link from 'next/link'
import { FileText, Clock, ArrowRight } from 'lucide-react'

export default function ResourcesPage() {
  const articles = [
    {
      slug: 'what-to-look-for-in-a-private-investigator',
      title: 'What to Look for in a Private Investigator',
      excerpt: 'Choosing the right private investigator can make all the difference in resolving your case. Learn the key credentials, qualifications, and red flags to watch for when hiring an investigator.',
      image: 'https://cdn.abacus.ai/images/e59829e8-2ed1-4843-8663-b3df7c034582.png',
      date: 'December 15, 2024',
      readTime: '8 min read'
    },
    {
      slug: 'understanding-digital-footprints',
      title: 'Understanding Digital Footprints: What You Leave Behind Online',
      excerpt: 'Every click, post, and transaction leaves a digital trail. Understand how your online activity can be traced, what information is publicly available, and how to protect your digital privacy.',
      image: 'https://cdn.abacus.ai/images/d946ac0e-220d-4eff-b27f-353ab314c77e.png',
      date: 'December 1, 2024',
      readTime: '10 min read'
    },
    {
      slug: 'corporate-security-best-practices',
      title: 'Corporate Security Best Practices: Protecting Your Business from Internal and External Threats',
      excerpt: 'From intellectual property theft to workplace fraud, businesses face evolving security challenges. Discover essential strategies for safeguarding your company\'s assets, data, and reputation.',
      image: 'https://cdn.abacus.ai/images/33e70d67-0938-4a6a-b138-748810526fb9.png',
      date: 'November 20, 2024',
      readTime: '12 min read'
    },
    {
      slug: 'importance-of-due-diligence',
      title: 'The Importance of Due Diligence in Personal and Business Decisions',
      excerpt: 'Whether you\'re entering a business partnership, hiring a key employee, or making a major personal commitment, thorough due diligence can prevent costly mistakes and protect your interests.',
      image: 'https://cdn.abacus.ai/images/fc936f68-38cd-434b-8cda-1e15943127af.png',
      date: 'November 5, 2024',
      readTime: '9 min read'
    }
  ]

  return (
    <div className="flex flex-col pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#002855] to-[#36454F] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert guidance on private investigation, security, and protecting your interests in an
            increasingly complex world.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {articles?.map?.((article, index) => (
              <Link
                key={index}
                href={`/resources/${article?.slug ?? ''}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-video bg-gray-100">
                  <Image
                    src={article?.image ?? ''}
                    alt={article?.title ?? ''}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#36454F] mb-3 space-x-4">
                    <div className="flex items-center space-x-1">
                      <FileText className="h-4 w-4" />
                      <span>{article?.date ?? ''}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article?.readTime ?? ''}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-[#002855] mb-3 group-hover:text-[#60A5FA] transition-colors">
                    {article?.title ?? ''}
                  </h2>
                  <p className="text-[#36454F] mb-4">{article?.excerpt ?? ''}</p>
                  <div className="flex items-center text-[#60A5FA] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            )) ?? []}
          </div>
        </div>
      </section>
    </div>
  )
}
