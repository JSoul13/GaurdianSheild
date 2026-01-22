'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 10)
    }
    window?.addEventListener?.('scroll', handleScroll)
    return () => window?.removeEventListener?.('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage 
          ? (isScrolled ? 'bg-white shadow-md' : 'bg-transparent')
          : 'bg-white shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + Company Name */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/logo-transparent.png"
                alt="Guardian Shield Inc."
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className={`font-bold text-lg hidden sm:block ${
              isHomePage && !isScrolled ? 'text-white' : 'text-[#002855]'
            }`}>
              Guardian Shield
            </span>
          </Link>

          {/* Desktop Navigation - evenly spaced */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '/'}
                className={`font-medium transition-colors ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:text-[#60A5FA]'
                    : 'text-[#002855] hover:text-[#60A5FA]'
                }`}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
          </nav>

          {/* Call Now Button */}
          <div className="hidden md:block">
            <a href="tel:+18454761183">
              <Button className="bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white px-6">
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-[#002855]'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-[#002855]'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '/'}
                className="block px-4 py-3 text-[#002855] hover:bg-gray-50 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? []}
            <div className="px-4 pt-2">
              <a href="tel:+18454761183">
                <Button className="w-full bg-[#60A5FA] hover:bg-[#60A5FA]/90 text-white">
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
