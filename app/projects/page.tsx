'use client'

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import { ExternalLink, Github, Code2 } from 'lucide-react'

export default function Projects() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div 
            className="relative"
            onMouseEnter={() => setHoveredImage('portfolio')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/portfolio.png"
              alt="portfolio project"
              width={400}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-105"
            />
            {hoveredImage === 'portfolio' && (
              <div className="fixed top-1/2 left-1/2 border border-gray transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-xl shadow-xl">
                <Image
                  src="/portfolio.png"
                  alt="portfolio project"
                  width={800}
                  height={400}
                  className="rounded"
                />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-2">Portfolio Project</h2>
          <p className="text-gray-600 mb-4">
            A full-stack e-commerce solution built with Next.js and Stripe integration.
            Features include product listings, shopping cart, and secure checkout.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Tech Used:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className='bg-gray-200 hover:bg-gray-300'>Next.js</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Typescript</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Shadcn</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex rounded-xl items-center" asChild>
              <a href="/">
                <ExternalLink className="w-4 h-4 mr-1" />
                View Project
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center rounded-xl bg-black text-white hover:bg-black hover:text-white" asChild>
              <a href="https://github.com/yassir003/yassir_portfolio">
                <Github className="w-4 h-4 mr-1" />
                View Code
              </a>
            </Button>
            {/* <Button variant="ghost" size="sm" className="flex items-center" asChild>
              <a href="#">
                <Code2 className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button> */}
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div 
            className="relative"
            onMouseEnter={() => setHoveredImage('mfi')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/MFI.png"
              alt="MFI project"
              width={400}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-105"
            />
            {hoveredImage === 'mfi' && (
              <div className="fixed top-1/2 left-1/2 border border-gray transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-xl shadow-xl">
                <Image
                  src="/MFI.png"
                  alt="MFI project"
                  width={800}
                  height={400}
                  className="rounded"
                />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-2">AI-powered search engine</h2>
          <p className="text-gray-600 mb-4">
          An AI-powered search engine using Flask, React, and Qdrant database. Features include intelligent query handling, fast search capabilities, and a user-friendly interface for seamless information retrieval.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Tech Used:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className='bg-gray-200 hover:bg-gray-300'>Python</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Flask</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>MySQL</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Qdrant</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>React</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Ant design</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex rounded-xl items-center" asChild>
              <a href="https://mfi-logiciel.com/">
                <ExternalLink className="w-4 h-4 mr-1" />
                View Project
              </a>
            </Button>
            {/* <Button variant="outline" size="sm" className="flex items-center rounded-xl bg-black text-white hover:bg-black hover:text-white" asChild>
              <a href="#">
                <Github className="w-4 h-4 mr-1" />
                View Code
              </a>
            </Button> */}
            {/* <Button variant="ghost" size="sm" className="flex items-center" asChild>
              <a href="#">
                <Code2 className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button> */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div 
            className="relative"
            onMouseEnter={() => setHoveredImage('mahalcom')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              src="/mahalcom.jpg"
              alt="Mahalcom project"
              width={400}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded transition-transform duration-300 ease-in-out hover:scale-105"
            />
            {hoveredImage === 'mahalcom' && (
              <div className="fixed top-1/2 left-1/2 border border-gray transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-xl shadow-xl">
                <Image
                  src="/mahalcom.jpg"
                  alt="Mahalcom project"
                  width={800}
                  height={400}
                  className="rounded"
                />
              </div>
            )}
          </div>
          <h2 className="text-2xl font-semibold mb-2">Product management website</h2>
          <p className="text-gray-600 mb-4">
          A product management website built with React, Node.js, Express, and MongoDB. Features include product creation, management, and tracking with a user-friendly interface and robust back-end support.
          </p>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Tech Used:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge className='bg-gray-200 hover:bg-gray-300'>React</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Express</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>MongoDB</Badge>
              <Badge className='bg-gray-200 hover:bg-gray-300'>Material-UI</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Button variant="outline" size="sm" className="flex rounded-xl items-center" asChild>
              <a href="https://mahalcom.ma/">
                <ExternalLink className="w-4 h-4 mr-1" />
                View Project
              </a>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center rounded-xl bg-black text-white hover:bg-black hover:text-white" asChild>
              <a href="https://github.com/OsamaMansouri/Mahalcom">
                <Github className="w-4 h-4 mr-1" />
                View Code
              </a>
            </Button>
            {/* <Button variant="ghost" size="sm" className="flex items-center" asChild>
              <a href="#">
                <Code2 className="w-4 h-4 mr-1" />
                Live Demo
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

