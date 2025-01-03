import Link from 'next/link'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Yassir Moulzim El Alaoui</h3>
            <p className="text-sm text-gray-600">
              Full-stack developer specializing in modern web applications
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
              </li>
              <li>
                <Link href="/experience" className="text-sm text-gray-600 hover:text-gray-900">Experience</Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-600 hover:text-gray-900">Projects</Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Marrakech,Morocco</li>
              <li>
                <a href="mailto:moulzimelalaoui@gmail.com" className="text-sm text-gray-600 hover:text-gray-900">
                  moulzimelalaoui@gmail.com
                </a>
              </li>
              <li className="text-sm text-gray-600">+212 689-663093</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yassir003" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/yassir-moulzim-el-alaoui-6283111a3/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/yassir_m03" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                <img src="/X-logo-black.png" alt="x-logo" className="w-5 h-5" />
              </a>
              <a href="mailto:moulzimelalaoui@gmail.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

