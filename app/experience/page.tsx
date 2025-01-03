'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Briefcase, GraduationCap, Code, Users, ChevronDown, ChevronUp } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

type Experience = {
  id: number;
  logo: string;
  title: string;
  company: string;
  date: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    logo: '/alidantek.png',
    title: 'Web Developer',
    company: 'ALIDANTEK.',
    date: 'July 2024 - September 2024',
    description: 'Developed a web application using Flask for the back-end and React for the front-end in collaboration with a team of developers. Worked closely with designers and product managers to deliver user-centric and responsive web solutions.'
  },
  {
    id: 2,
    logo: '/norsys1.png',
    title: 'network technician',
    company: 'NORSYS AFRIQUE.',
    date: 'May 2023 - June 2023',
    description: 'Managed network infrastructure with Cisco Meraki and monitored systems using Nagios. Performed maintenance tasks, including troubleshooting, updates, and backups, to ensure reliable operations.'
  },
  {
    id: 3,
    logo: '/norsys1.png',
    title: 'network technician',
    company: 'NORSYS AFRIQUE.',
    date: 'April 2022 - April 2022',
    description: 'Set up FTP servers, performed maintenance tasks, and monitored the work environment.'
  }
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Experience Section */}
      <Card className="p-6 border border-gray-200 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Briefcase className="w-6 h-6 mr-2" />
          My Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card 
              key={exp.id}
              className={`cursor-pointer transition-all duration-300 border border-gray-200 rounded-xl ${
                expandedId === exp.id ? 'bg-gray-50 border-gray-300' : ''
              }`}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} Logo`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{exp.title}</h3>
                      <p className="text-sm text-gray-600">{exp.company} • {exp.date}</p>
                    </div>
                  </div>
                  {expandedId === exp.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                {expandedId === exp.id && (
                  <p className="mt-4 text-gray-700">{exp.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>

      {/* Education Section */}
      <Card className="p-6 border border-gray-200 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap className="w-6 h-6 mr-2" />
          Education
        </h2>
        <div className="space-y-4">
          <Card className="p-6 border border-gray-200 rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <Image
                  src="/UPM.png"
                  alt="University of Technology Logo"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor in Computer Science</h3>
                  <p className="text-gray-600">Marrakech, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="p-6 border border-gray-200 rounded-xl">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <Image
                  src="/bts.png"
                  alt="State University Logo"
                  width={64}
                  height={64}
                  className="rounded-xl"
                />
                <div>
                  <h3 className="text-xl font-semibold">Advanced Technician&#39;s Certificate</h3>
                  <p className="text-gray-600">Essaouira, 2023</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Card>

      {/* Technical Skills Section */}
      <Card className="p-6 border border-gray-200 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Code className="w-6 h-6 mr-2" />
          Technical Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge className='bg-gray-200 hover:bg-gray-300'>JavaScript (ES6+)</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>React.js</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Next.js</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Express.js</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>TypeScript</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>HTML5 & CSS3</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Git</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>RESTful APIs</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Flask</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>MySQL</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>MongoDB</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Figma</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>PostgreSQL</Badge>


        </div>
      </Card>

      {/* Soft Skills Section */}
      <Card className="p-6 border border-gray-200 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Users className="w-6 h-6 mr-2" />
          Soft Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          <Badge className='bg-gray-200 hover:bg-gray-300'>Problem Solving</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Team Collaboration</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Communication</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Time Management</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Adaptability</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Leadership</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Creativity</Badge>
          <Badge className='bg-gray-200 hover:bg-gray-300'>Critical Thinking</Badge>
        </div>
      </Card>
    </div>
  )
}

