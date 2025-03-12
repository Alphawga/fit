import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

interface DietPlanCardProps {
  id: string
  title: string
  description: string
  calories: number
  duration: string
  image: string
  featured?: boolean
}

export function DietPlanCard({
  id,
  title,
  description,
  calories,
  duration,
  image,
  featured = false,
}: DietPlanCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden border border-border/50 bg-white shadow-sm hover:shadow-md transition-shadow ${featured ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        {featured && (
          <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 text-xs font-medium rounded-full">
            Popular
          </div>
        )}
        <button 
          className="absolute top-3 left-3 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="h-5 w-5 text-gray-500 hover:text-secondary transition-colors" />
        </button>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{calories}</span>
            <span className="text-xs text-muted-foreground">calories</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{duration}</span>
            <span className="text-xs text-muted-foreground">days</span>
          </div>
        </div>
        
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
          <Link href={`/diet-plan/${id}`} className="flex items-center justify-center gap-2">
            View Plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
} 