import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  FileText,
  Languages,
  FileSearch,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Scale,
  Stethoscope,
  Building,
  Code,
} from "lucide-react"

export const metadata = {
  title: "Document Review Services | DissertCoach",
  description:
    "Explore our comprehensive document review services including legal, financial, medical, technical, and academic document analysis.",
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-bold mb-6">Comprehensive Document Analysis & Review Solutions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our expert team provides thorough document review services across multiple industries and languages,
              ensuring accuracy, clarity, and compliance.
            </p>
            <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
              <Link href="#services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Our Core Document Review Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer specialized document review services tailored to your specific needs and industry requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Languages className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Expert Multilingual Review</h3>
              <p className="text-muted-foreground mb-4">
                Our multilingual experts provide accurate reviews in over 40 languages including English, Spanish,
                French, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Native-speaking reviewers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Cultural context consideration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Specialized terminology expertise</span>
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <FileSearch className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Concise Summarization & Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Efficiently distill extensive documents into concise, actionable summaries to highlight key details
                quickly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Executive summaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Key point extraction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Critical insight identification</span>
                </li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Quality Assurance & Accuracy</h3>
              <p className="text-muted-foreground mb-4">
                Rigorous quality assurance methods ensuring clarity, accuracy, and compliance across all document types.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Multi-level review process</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Consistency verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-sm">Compliance validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Industry-Specific Document Review</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our specialized teams provide expert review services tailored to your industry's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Legal Document Review</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive review of contracts, agreements, legal briefs, and compliance documentation.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services/legal" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Building className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Financial Document Analysis</h3>
              <p className="text-muted-foreground mb-4">
                Expert review of financial reports, investment documents, and regulatory filings.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services/financial" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Medical Document Review</h3>
              <p className="text-muted-foreground mb-4">
                Specialized review of medical records, research papers, and clinical documentation.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services/medical" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Technical Document Review</h3>
              <p className="text-muted-foreground mb-4">
                Detailed analysis of technical specifications, manuals, and documentation.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services/technical" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-3">Academic Document Review</h3>
              <p className="text-muted-foreground mb-4">
                Thorough review of research papers, theses, dissertations, and academic publications.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/services/academic" className="flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="feature-card">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-3">Custom Document Solutions</h3>
              <p className="text-muted-foreground mb-4">
                Tailored document review services designed to meet your specific requirements.
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Experience the difference our expert document review services can make for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

