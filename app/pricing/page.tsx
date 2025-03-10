import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

export const metadata = {
  title: "Pricing Plans | DissertCoach",
  description:
    "Explore our flexible and affordable pricing plans for document review services. Choose the perfect plan for your needs.",
}

export default function PricingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-bold mb-6">Flexible Pricing Plans—Affordable & Scalable</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the perfect plan for your document review needs with our transparent pricing options.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="pricing-card">
              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">Silver Plan</h2>
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
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Compliance & Financial Document Reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Premium Plagiarism Checker</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">Priority Quality Assurance</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/contact?plan=silver">Choose Silver</Link>
              </Button>
            </div>

            <div className="pricing-card featured">
              <div className="absolute -top-4 right-4 bg-secondary text-white px-3 py-1 text-xs font-medium rounded-full">
                Popular
              </div>

              <div className="text-center mb-6">
                <h2 className="text-xl font-bold mb-2">Gold Plan</h2>
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
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Dedicated Account Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Advanced Analytics Dashboard</span>
                </li>
              </ul>

              <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90">
                <Link href="/contact?plan=gold">Choose Gold</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-card rounded-lg shadow-sm p-8 border border-border/50">
            <h2 className="text-2xl font-bold mb-6 text-center">Need a Custom Solution?</h2>
            <p className="text-center text-muted-foreground mb-8">
              We offer tailored pricing plans for enterprises and organizations with specific requirements.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-secondary text-white hover:bg-secondary/90">
                <Link href="/contact?plan=custom">Contact Us for Custom Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding section-spacing bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Plan Comparison</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compare our plans to find the perfect fit for your document review needs.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white dark:bg-card rounded-lg shadow-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4">Feature</th>
                  <th className="text-center p-4">Silver Plan</th>
                  <th className="text-center p-4 bg-secondary/5">Gold Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4">Monthly Price</td>
                  <td className="text-center p-4">₦10,000</td>
                  <td className="text-center p-4 bg-secondary/5">₦45,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Documents per Month</td>
                  <td className="text-center p-4">5-10</td>
                  <td className="text-center p-4 bg-secondary/5">25+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Languages Supported</td>
                  <td className="text-center p-4">Up to 5</td>
                  <td className="text-center p-4 bg-secondary/5">40+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Document Organization</td>
                  <td className="text-center p-4">
                    <CheckCircle className="h-5 w-5 text-secondary inline-block" />
                  </td>
                  <td className="text-center p-4 bg-secondary/5">
                    <CheckCircle className="h-5 w-5 text-secondary inline-block" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Plagiarism Checker</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4 bg-secondary/5">Premium</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Compliance & Financial Reviews</td>
                  <td className="text-center p-4">
                    <X className="h-5 w-5 text-muted-foreground inline-block" />
                  </td>
                  <td className="text-center p-4 bg-secondary/5">
                    <CheckCircle className="h-5 w-5 text-secondary inline-block" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Priority Quality Assurance</td>
                  <td className="text-center p-4">
                    <X className="h-5 w-5 text-muted-foreground inline-block" />
                  </td>
                  <td className="text-center p-4 bg-secondary/5">
                    <CheckCircle className="h-5 w-5 text-secondary inline-block" />
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4">Dedicated Account Manager</td>
                  <td className="text-center p-4">
                    <X className="h-5 w-5 text-muted-foreground inline-block" />
                  </td>
                  <td className="text-center p-4 bg-secondary/5">
                    <CheckCircle className="h-5 w-5 text-secondary inline-block" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4">Analytics Dashboard</td>
                  <td className="text-center p-4">Basic</td>
                  <td className="text-center p-4 bg-secondary/5">Advanced</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding section-spacing">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will take effect at the start of your
                next billing cycle.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">Is there a contract or commitment?</h3>
              <p className="text-muted-foreground">
                No, all our plans are month-to-month with no long-term contracts. You can cancel at any time.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, bank transfers, and select mobile payment options. All payments are
                processed securely.
              </p>
            </div>

            <div className="bg-white dark:bg-card rounded-lg shadow-sm p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-2">What happens if I exceed my document limit?</h3>
              <p className="text-muted-foreground">
                If you exceed your monthly document limit, additional documents will be billed at a per-document rate.
                We'll notify you before processing any additional charges.
              </p>
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
              Choose the perfect plan for your document review needs and start streamlining your workflow today.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

