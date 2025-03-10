import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Upload, Settings, FileCheck, ArrowRight, Clock, Shield, CheckCircle } from "lucide-react"

export const metadata = {
  title: "How It Works | DissertCoach",
  description:
    "Learn about our simple 3-step document review process. Upload your documents, choose review options, and receive expert analysis.",
}

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-bold mb-6">Simplified Document Review in Just 3 Steps</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our streamlined process makes document review fast, efficient, and hassle-free.
            </p>
            <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
              <Link href="#process">See How It Works</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Our Document Review Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've designed a simple, efficient process to ensure you get high-quality document reviews with minimal
              effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-0"></div>

            <div className="feature-card z-10">
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
                <p className="text-muted-foreground mb-4">
                  Securely upload your documents through our intuitive platform.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Drag and drop functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Secure encryption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Multiple file formats supported</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-card z-10">
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
                <p className="text-muted-foreground mb-4">
                  Select your preferred review services, languages, and specializations.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Customizable review parameters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Language selection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Industry-specific expertise options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="feature-card z-10">
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
                <p className="text-muted-foreground mb-4">
                  Access clear, concise summaries and detailed review reports quickly, enabling informed decisions.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Comprehensive review reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Executive summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-sm">Actionable recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="DissertCoach document review platform interface"
                width={800}
                height={600}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="font-bold mb-6">Key Features of Our Process</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fast Turnaround Times</h3>
                    <p className="text-muted-foreground">
                      Most reviews are completed within 24-48 hours, depending on document complexity and volume.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Secure Document Handling</h3>
                    <p className="text-muted-foreground">
                      Advanced encryption and security protocols ensure your sensitive documents remain confidential.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-muted-foreground">
                      Multi-level review process with rigorous quality checks to ensure accuracy and thoroughness.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
                  <Link href="/services" className="flex items-center gap-2">
                    Explore Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses and professionals who have streamlined their document review process with
              DissertCoach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-muted-foreground">Legal Firm Partner</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "DissertCoach has transformed our contract review process. Their attention to detail and quick
                turnaround times have significantly improved our efficiency."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Amanda Smith</h4>
                  <p className="text-sm text-muted-foreground">Financial Analyst</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The multilingual capabilities have been invaluable for our international reports. The summaries are
                concise and highlight exactly what we need to know."
              </p>
            </div>

            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-semibold">Robert Johnson</h4>
                  <p className="text-sm text-muted-foreground">Research Director</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The academic document review service has been a game-changer for our research team. The quality of
                feedback and analysis is exceptional."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Document Review Process?</h2>
            <p className="text-lg mb-8">
              Join thousands of satisfied clients who trust DissertCoach for their document review needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/services">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

