"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  FileText,
  Languages,
  FileSearch,
  CheckCircle,
  Upload,
  Settings,
  FileCheck,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Lock,
  Search,
  Bike,
  ShoppingBag,
  Utensils,
} from "lucide-react"

// Animation helper function
const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom

        // Check if element is in viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add("animate-fade-in")
        }
      })
    }

    // Run once on load
    animateElements()

    // Add scroll event listener
    window.addEventListener("scroll", animateElements)

    // Clean up
    return () => window.removeEventListener("scroll", animateElements)
  }, [])
}

export default function Home() {
  useAnimateOnScroll()

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left animate-on-scroll">
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                <span className="block">Fastest</span>
                <span className="block text-secondary">Delivery</span>
                <span className="block flex items-center gap-2">&</span>
                <span className="block">Easy <span className="text-secondary">Pickup</span></span>
              </h1>
              <p className="text-muted-foreground mb-6 flex items-center gap-2">
                <Image 
                  src="/avatar-placeholder.svg" 
                  alt="User avatar" 
                  width={32} 
                  height={32} 
                  className="rounded-full"
                />
                <span>When you are too lazy to cook, we are just a click away!</span>
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-6 h-auto">
                  <Search className="h-4 w-4 mr-2" />
                  <span>Find Restaurants</span>
                </Button>
                <Button variant="outline" className="border-gray-300 rounded-full px-6 py-6 h-auto">
                  <span className="mr-2">How to order</span>
                  <div className="bg-secondary/10 rounded-full p-1">
                    <ArrowRight className="h-3 w-3 text-secondary" />
                  </div>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative animate-on-scroll">
              <div className="relative h-[400px] w-full">
                {/* Yellow circle background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-secondary rounded-full z-0"></div>
                
                {/* Green arc decorations */}
                <div className="absolute top-0 left-1/4 h-[150px] w-[30px] border-l-[15px] border-t-[15px] border-primary rounded-tl-full z-0"></div>
                <div className="absolute bottom-1/4 right-0 h-[100px] w-[20px] border-r-[10px] border-b-[10px] border-primary rounded-br-full z-0"></div>
                
                {/* Food and person images */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <Image
                    src="/person-hero-image.svg" 
                    alt="Person enjoying food"
                    width={350}
                    height={350}
                    priority
                    className="absolute z-20"
                  />
                  <Image
                    src="/food-hero-image.svg" 
                    alt="Delicious food"
                    width={120}
                    height={120}
                    className="absolute z-10 -right-5 top-1/3"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Delivery options */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Bike className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Fast delivery</h3>
                <p className="text-sm text-muted-foreground">Promise to deliver within 30 mins</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <ShoppingBag className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Pick up</h3>
                <p className="text-sm text-muted-foreground">Pickup delivery at your doorstep</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="p-4 bg-white rounded-full shadow-sm">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Dine in</h3>
                <p className="text-sm text-muted-foreground">Enjoy your food fresh crispy and hot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Comprehensive Document Analysis & Review Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expert team provides thorough document review services across multiple industries and languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card animate-on-scroll">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Expert Multilingual Review</h3>
              <p className="text-muted-foreground">
                Our multilingual experts provide accurate reviews in over 40 languages including English, Spanish,
                French, and more.
              </p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <FileSearch className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Concise Summarization & Analysis</h3>
              <p className="text-muted-foreground">
                Efficiently distill extensive documents into concise, actionable summaries to highlight key details
                quickly.
              </p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Quality Assurance & Accuracy</h3>
              <p className="text-muted-foreground">
                Rigorous quality assurance methods ensuring clarity, accuracy, and compliance across all document types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Simplified Document Review in Just 3 Steps</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes document review fast, efficient, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0"></div>

            <div className="feature-card z-10 animate-on-scroll">
              <div className="relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
              </div>
              <div className="pt-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">Upload Your Documents</h3>
                <p className="text-muted-foreground">Securely upload your documents through our intuitive platform.</p>
              </div>
            </div>

            <div className="feature-card z-10 animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
              </div>
              <div className="pt-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-3">Choose Review Options</h3>
                <p className="text-muted-foreground">
                  Select your preferred review services, languages, and specializations.
                </p>
              </div>
            </div>

            <div className="feature-card z-10 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-16 w-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
              </div>
              <div className="pt-8 text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">Receive Expert Analysis</h3>
                <p className="text-muted-foreground">
                  Access clear, concise summaries and detailed review reports quickly, enabling informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Flexible Pricing Plans—Affordable & Scalable</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your document review needs with our transparent pricing options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="pricing-card animate-on-scroll">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Silver Plan</h3>
                <p className="text-3xl font-bold text-secondary">₦10,000</p>
                <p className="text-sm text-muted-foreground">/month</p>
                <p className="mt-2 text-muted-foreground">Ideal for individuals & small teams</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>5–10 Documents/Month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Review in up to 5 Languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Custom Document Solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Document Organization & Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Free Plagiarism Checker</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/pricing">Choose Silver</Link>
              </Button>
            </div>

            <div className="pricing-card featured animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="absolute -top-4 right-4 bg-secondary text-white px-3 py-1 text-xs font-medium rounded-full">
                Popular
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Gold Plan</h3>
                <p className="text-3xl font-bold text-secondary">₦45,000</p>
                <p className="text-sm text-muted-foreground">/month</p>
                <p className="mt-2 text-muted-foreground">Perfect for businesses & compliance teams</p>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Everything in Silver Plan +</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>25+ Documents/Month</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Review in 40+ Languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Compliance & Financial Document Reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Premium Plagiarism Checker</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Priority Quality Assurance</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/pricing">Choose Gold</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-on-scroll">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Professional reviewing documents"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="lg:w-1/2 animate-on-scroll">
              <h2 className="font-bold mb-6">Overcome Document Review Fatigue Effortlessly</h2>
              <p className="text-muted-foreground mb-6">
                Spend less time reviewing and more time strategically managing your business. DissertCoach's expert
                reviewers identify critical information, flag important elements, and deliver summaries that simplify
                your workflow—saving valuable time and ensuring accuracy.
              </p>
              <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/services" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Why Businesses Trust DissertCoach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages that make us the preferred choice for document review services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="feature-card animate-on-scroll">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Multilingual Expertise</h3>
              <p className="text-muted-foreground">
                Professional reviews in over 40 languages by specialized linguists.
              </p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: "0.1s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Advanced Technology Integration</h3>
              <p className="text-muted-foreground">
                Combine human expertise and AI-powered technology for unmatched accuracy.
              </p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">Rigorous checks ensuring comprehensive, error-free documents.</p>
            </div>

            <div className="feature-card animate-on-scroll" style={{ animationDelay: "0.3s" }}>
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Secure & Confidential</h3>
              <p className="text-muted-foreground">
                Robust data protection protocols safeguarding your sensitive documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-bold mb-4">Answers to Common Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to frequently asked questions about our document review services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto animate-on-scroll">
            <Accordion
              type="single"
              collapsible
              className="bg-white dark:bg-card rounded-lg shadow-sm border border-border/50"
            >
              <AccordionItem value="item-1" className="px-6 border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">Types of Documents Reviewed?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  DissertCoach expertly reviews diverse document types including legal contracts, financial reports,
                  medical documents, technical manuals, and scholarly research.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="px-6 border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">Review Turnaround Time?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  Our efficient process ensures timely delivery, with most reviews completed within 24–48 hours
                  depending on document size and complexity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="px-6 border-b border-border">
                <AccordionTrigger className="text-lg font-medium py-4">Confidentiality & Security?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  All document reviews are strictly confidential. We employ advanced security protocols ensuring your
                  documents remain secure and protected.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="px-6">
                <AccordionTrigger className="text-lg font-medium py-4">What languages do you support?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  We support over 40 languages including English, Spanish, French, German, Chinese, Japanese, Arabic,
                  Russian, Portuguese, and many more. Our team consists of native speakers and linguistic experts to
                  ensure accurate translations and reviews.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Document Reviews?</h2>
            <p className="text-lg mb-8">
              Start streamlining your document review process today with our expert multilingual reviewers.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/services">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

