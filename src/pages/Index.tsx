
import React from 'react';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import SectionHeading from '@/components/SectionHeading';
import PricingCard from '@/components/PricingCard';
import { Button } from '@/components/ui/button';
import { 
  Pencil, 
  FileChart, 
  Ruler, 
  Coins, 
  Road, 
  Train, 
  Building, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-petallex-blue">Cross-section design</span>
                <br />
                <span className="bg-petallex-gradient bg-clip-text text-transparent">
                  reimagined with precision
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                SectionsPro is a powerful desktop application that transforms raw survey data into detailed cross-sections for civil infrastructure design.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-petallex-gradient text-white hover:opacity-90 px-8 py-6 text-lg">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-petallex-blue text-petallex-blue hover:bg-petallex-blue/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -z-10 w-3/4 h-3/4 bg-petallex-gradient rounded-full blur-3xl opacity-20 animate-float"></div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1504893524553-b855bce32c67" 
                  alt="SectionsPro Application" 
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white px-6">
        <div className="container mx-auto">
          <SectionHeading
            title="Powerful Features"
            subtitle="SectionsPro provides all the tools civil engineers need to create accurate, detailed cross-sections"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Pencil}
              title="Integrated CAD Tools"
              description="Edit and customize cross-sections directly in the application without relying on external CAD software."
            />
            <FeatureCard
              icon={FileChart}
              title="Material Calculation"
              description="Automatically calculate materials and volumes based on your cross-section designs."
            />
            <FeatureCard
              icon={Ruler}
              title="Precision Design"
              description="Create highly detailed and accurate cross-sections with professional-grade tools."
            />
            <FeatureCard
              icon={Coins}
              title="Cost Estimation"
              description="Generate cost estimates for materials and construction based on your designs."
            />
            <FeatureCard
              icon={Road}
              title="Multiple Infrastructure Types"
              description="Design cross-sections for roads, canals, embankments, and more in one application."
            />
            <FeatureCard
              icon={Train}
              title="Railway Track Design"
              description="Specialized tools for railway track cross-sections and alignments."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="container mx-auto">
          <SectionHeading
            title="Transform Your Workflow"
            subtitle="SectionsPro helps engineering teams work faster and more accurately"
            centered={true}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-petallex-gradient p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <Building className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Streamlined Process</h3>
                    <p className="text-gray-600">Generate cross-sections from raw survey data in minutes instead of hours.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-petallex-gradient p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">All-in-One Solution</h3>
                    <p className="text-gray-600">Design, edit, calculate, and estimate all in one seamless application.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-petallex-gradient p-3 rounded-full w-12 h-12 flex items-center justify-center">
                      <Ruler className="text-white h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Enhanced Accuracy</h3>
                    <p className="text-gray-600">Reduce errors with automatic calculations and intelligent design tools.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb" 
                  alt="SectionsPro Workflow" 
                  className="rounded-lg w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 bg-white px-6">
        <div className="container mx-auto">
          <SectionHeading
            title="How SectionsPro Works"
            subtitle="A simple workflow that transforms your survey data into detailed cross-sections"
            centered={true}
          />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-petallex-gradient"></div>
            
            {/* Step 1 */}
            <div className="relative md:flex items-center mb-12 md:mb-24">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <div className="md:float-right md:text-right">
                  <div className="md:hidden w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Import Survey Data</h3>
                  <p className="text-gray-600">Upload your raw survey data in various formats including CSV, DXF, and proprietary survey formats.</p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                {/* Placeholder for image */}
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative md:flex items-center mb-12 md:mb-24">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="md:w-1/2 md:pr-16 order-2 md:order-1">
                {/* Placeholder for image */}
              </div>
              <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 order-1 md:order-2">
                <div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Generate Cross-Sections</h3>
                  <p className="text-gray-600">Automatically create cross-sections along your alignment at specified intervals.</p>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative md:flex items-center mb-12 md:mb-24">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <div className="md:float-right md:text-right">
                  <div className="md:hidden w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Edit & Customize</h3>
                  <p className="text-gray-600">Use the integrated CAD tools to modify, refine, and customize your cross-sections.</p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-16">
                {/* Placeholder for image */}
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative md:flex items-center">
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pr-16 order-2 md:order-1">
                {/* Placeholder for image */}
              </div>
              <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0 order-1 md:order-2">
                <div>
                  <div className="md:hidden w-12 h-12 rounded-full bg-petallex-gradient text-white flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-petallex-darkBlue">Calculate & Export</h3>
                  <p className="text-gray-600">Get automatic material calculations, cost estimates, and export to various formats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-6">
        <div className="container mx-auto">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Engineers and surveyors trust SectionsPro for their infrastructure design projects"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="SectionsPro has revolutionized our road design process. What used to take days now takes hours, with better accuracy and detail."
              author="Sarah Johnson"
              role="Senior Engineer"
              company="Highway Solutions Ltd"
            />
            <TestimonialCard
              quote="The integrated CAD tools are a game-changer. No more switching between applications to complete our designs."
              author="Michael Chang"
              role="Civil Engineer"
              company="Urban Infrastructure Inc"
            />
            <TestimonialCard
              quote="The material calculations and cost estimations have improved our project bidding accuracy by over 30%."
              author="David Rodriguez"
              role="Project Manager"
              company="Global Engineering Partners"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white px-6">
        <div className="container mx-auto">
          <SectionHeading
            title="Flexible Token-Based Pricing"
            subtitle="Pay only for what you use with our transparent token system"
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter Pack"
              description="Perfect for small teams and occasional projects"
              price="$99"
              features={[
                { text: "100 tokens" },
                { text: "Full CAD functionality" },
                { text: "Basic material calculations" },
                { text: "Email support" },
                { text: "3 months validity" },
              ]}
            />
            
            <PricingCard
              title="Professional Pack"
              description="Ideal for engineering firms with regular projects"
              price="$249"
              features={[
                { text: "300 tokens" },
                { text: "Full CAD functionality" },
                { text: "Advanced material calculations" },
                { text: "Cost estimation tools" },
                { text: "Priority email support" },
                { text: "6 months validity" },
              ]}
              popular={true}
            />
            
            <PricingCard
              title="Enterprise Pack"
              description="For large teams and extensive infrastructure projects"
              price="$499"
              features={[
                { text: "750 tokens" },
                { text: "Full CAD functionality" },
                { text: "Advanced material calculations" },
                { text: "Cost estimation tools" },
                { text: "Phone and email support" },
                { text: "12 months validity" },
                { text: "Custom export formats" },
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Each token allows you to process one cross-section. Tokens are flexible and can be used across multiple projects within your organization.
            </p>
            <Button variant="outline" className="border-petallex-blue text-petallex-blue hover:bg-petallex-blue/10">
              Learn more about our token system
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-petallex-gradient px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to transform your infrastructure design workflow?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of engineering firms already using SectionsPro to create precise, detailed cross-sections faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-petallex-blue hover:bg-white/90 px-8 py-6 text-lg">
              Request Demo
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="/lovable-uploads/d4cd879b-066e-4440-97ea-7d3d885830f5.png" 
                alt="Petallex Logo" 
                className="h-10 mb-4 brightness-200" 
              />
              <p className="text-gray-400">
                Smart tools for civil infrastructure design
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Downloads</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">License Agreement</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Petallex. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
