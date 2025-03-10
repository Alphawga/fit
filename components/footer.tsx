import Link from "next/link"
import { FileText, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                <FileText className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold font-heading">DissertCoach</span>
            </Link>
            <p className="text-muted-foreground">
              Fast, accurate, and multilingual document review solutions tailored specifically for your needs.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-secondary transition-colors">
                  Document Review Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-secondary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-secondary transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-secondary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-muted-foreground hover:text-secondary transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/gdpr" className="text-muted-foreground hover:text-secondary transition-colors">
                  GDPR Compliance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-muted-foreground">info@dissertcoach.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-muted-foreground">+234 800 123 4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <span className="text-muted-foreground">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">© {currentYear} DissertCoach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

