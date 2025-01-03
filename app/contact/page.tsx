'use client'

import { Phone, MapPin, Mail, Linkedin, Instagram, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Basic form validation
      const form = event.currentTarget;
      const formData = new FormData(form);
      
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      
      // Validate required fields
      if (!name?.trim() || !email?.trim() || !message?.trim()) {
        toast.error('Please fill in all required fields');
        return;
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('Please enter a valid email address');
        return;
      }
      
      // Add your Web3Forms access key
      formData.append('access_key', 'ff15f6e8-0c11-47d6-bdcc-2bf7798821ee');
      
      // Prepare the request body
      const formObject = Object.fromEntries(formData.entries());
      
      // Make the API request
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.success) {
        toast.success('Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : 'Something went wrong. Please try again later.'
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* ToastContainer positioned globally and styled unobtrusively */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border border-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input type="text" id="name" name="name" className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" className="rounded-xl" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" name="message" className="rounded-xl" rows={4} required />
              </div>
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-black hover:text-white rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <p>I am always open to discussing new projects, opportunities in the tech world.</p>
              <br />
              <h3 className="font-semibold mb-2">Phone Number</h3>
              <p className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-2" />
                +212 689-663093
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email Address</h3>
              <p className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-2" />
                moulzimelalaoui@gmail.com
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-2" />
                Marrakech, Morocco
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yassir-moulzim-el-alaoui-6283111a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="https://x.com/yassir_m03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <img src="/X-logo-black.png" alt="x-logo" className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/yassir.moulzim_elalaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                </a>
                <a
                  href="https://github.com/yassir003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Github className="w-6 h-6 text-gray-800" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
