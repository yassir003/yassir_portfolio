"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/ui/shimmer-button";
import Ripple from "@/components/ui/ripple";
import OrbitingCircles from "@/components/ui/orbiting-circles";
import ShineBorder from "@/components/ui/shine-border";
import Particles from "@/components/ui/particles";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,} from "react-icons/fa";
import { SiFlask, SiMongodb, SiPostgresql, SiNextdotjs } from "react-icons/si";
import { FileDown, UserPlus, Code2, Palette, Database, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="space-y-16">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
      <Particles
        className="absolute inset-0 -z-10"
        quantity={800}
        ease={80}
        size={0.6}
        color="black"
        refresh
      />
        <div className="md:w-1/2 mb-8 md:mb-0">
          <span className="text-lg text-gray-600 mb-2 block">Hi, I'm</span>
          <h1 className="text-5xl font-bold mb-2">Yassir Moulzim El Alaoui</h1>
          <p className="text-2xl text-gray-600 mb-6">
            A passionate developer with experience in creating modern web applications.
            Explore my work and let&#39;s bring your ideas to life!
          </p>
          <div className="flex space-x-4">
            <a 
              href="/CV_yassir.pdf" 
              download 
              className="shadow-2xl"
            >
              <ShimmerButton shimmerSize="0.15em" borderRadius="10px">
                <FileDown className="mr-2 h-4 w-4" /> Download CV
              </ShimmerButton>
            </a>
            <Link href='/contact'>
              <Button variant="outline" className="flex items-center rounded-xl size-12 w-32">
                <UserPlus className="mr-2 h-4 w-4" /> Hire Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="md:w-2/5">
          <Image
            src="/image.jpeg"
            alt="Welcome Image"
            width={400}
            height={400}
            className="shadow-lg" 
            style={{ borderRadius: '17% 11% 14% 10% / 40% 13% 31% 10%' }}
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-xl border border-gray-200">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-600 mb-6">
        I am a passionate and dedicated developer who loves learning and creating innovative solutions. I focus on building user-friendly applications while prioritizing clean and efficient code. Driven by curiosity and a desire to grow, I aim to deliver impactful projects that inspire and exceed expectations.
        </p>
        <Link href='/contact'>
        <Button variant="outline" className="flex items-center rounded-xl">
        <UserPlus className="mr-2 h-4 w-4" /> Hire Me
        </Button>
        </Link>
      </div>
      <div className="relative flex h-[300px] w-[300px] items-center justify-center transform -translate-x-8">
        {/* Orbiting Circles with React Icons */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={5}
          radius={80}
        >
          <FaHtml5 size={30} color="#E34F26" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={10}
          radius={80}
        >
          <FaCss3Alt size={30} color="#1572B6" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={15}
          radius={80}
        >
          <FaJs size={30} color="#F7DF1E" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={20}
          radius={120}
          reverse
        >
          <FaReact size={30} color="#61DAFB" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={25}
          radius={120}
          reverse
        >
          <FaNodeJs size={30} color="#339933" />
        </OrbitingCircles>
        {/* New Orbiting Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={30}
          radius={120}
          reverse
        >
          <SiFlask size={30} />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={35}
          radius={150}
        >
          <SiMongodb size={30} color="#47A248" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={40}
          radius={150}
        >
          <SiPostgresql size={30} color="#336791" />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={15}
          delay={45}
          radius={150}
        >
          <SiNextdotjs size={30}  />
        </OrbitingCircles>
      </div>
    </section>

      {/* What I Do Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-8">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
          >
            <ShineBorder 
              className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 transform transition-all duration-300 cursor-pointer ${
                hoveredCard === 0 ? 'scale-105 shadow-xl bg-gray-50 border-gray-300' : ''
              }`}
              
            >
              <Code2 className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">
                Creating responsive and dynamic websites using modern frameworks like React and Next.js.
              </p>
            </ShineBorder>
          </div>
          <div
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
          >
            <ShineBorder 
              className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 transform transition-all duration-300 cursor-pointer ${
                hoveredCard === 1 ? 'scale-105 shadow-xl bg-gray-50 border-gray-300' : ''
              }`}
            >
              <Palette className="w-12 h-12 mx-auto mb-4 text-gray-600" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Designing intuitive and visually appealing user interfaces for web and mobile applications.
              </p>
            </ShineBorder>
          </div>
          <div
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
          >
          <ShineBorder 
            className={`bg-white p-6 rounded-xl shadow-md border border-gray-200 transform transition-all duration-300 cursor-pointer ${
              hoveredCard === 2 ? 'scale-105 shadow-xl bg-gray-50 border-gray-300' : ''
            }`}
          >
            <Database className="w-12 h-12 mx-auto mb-4 text-gray-600" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
            Building robust and scalable server-side applications and RESTful APIs using Node.js and Express.
            </p>
          </ShineBorder>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-center py-16 bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        <Ripple/>
        <h2 className="text-3xl font-bold mb-4">Ready to Start a Project?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Explore my portfolio to see my past work or get in touch to discuss your next project.
          Let&#39;s create something amazing together!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/projects">
            <Button variant="outline" className="flex items-center rounded-xl ">
              See My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="flex items-center rounded-xl bg-black text-white hover:bg-black">
              Let&#39;s Work Together <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
