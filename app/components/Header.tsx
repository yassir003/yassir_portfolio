'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Briefcase, FolderOpen, Mail } from 'lucide-react'

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="fixed left-1/2 transform -translate-x-1/2 top-4 bg-gray-200 bg-opacity-70 backdrop-blur-md text-gray-800 rounded-xl shadow-lg z-10">
      <nav className="container mx-auto px-4 py-4 max-w-2xl">
        <ul className="flex items-center justify-center gap-2 sm:gap-8">
          <li>
            <Link 
              href="/" 
              className={`flex items-center transition-colors rounded-xl px-3 py-2 ${
                pathname === '/' 
                  ? 'bg-black text-white' 
                  : 'hover:text-gray-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline sm:ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/experience" 
              className={`flex items-center transition-colors rounded-xl px-3 py-2 ${
                pathname === '/experience' 
                  ? 'bg-black text-white' 
                  : 'hover:text-gray-600'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="hidden sm:inline sm:ml-2">Experience</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={`flex items-center transition-colors rounded-xl px-3 py-2 ${
                pathname === '/projects' 
                  ? 'bg-black text-white' 
                  : 'hover:text-gray-600'
              }`}
            >
              <FolderOpen className="w-5 h-5" />
              <span className="hidden sm:inline sm:ml-2">Projects</span>
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`flex items-center transition-colors rounded-xl px-3 py-2 ${
                pathname === '/contact' 
                  ? 'bg-black text-white' 
                  : 'hover:text-gray-600'
              }`}
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline sm:ml-2">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

