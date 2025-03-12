import Image from "next/image"
import { Clock, Flame } from "lucide-react"

interface MealItemProps {
  title: string
  description: string
  image: string
  calories: number
  prepTime: string
  mealType: "breakfast" | "lunch" | "dinner" | "snack"
}

export function MealItem({
  title,
  description,
  image,
  calories,
  prepTime,
  mealType,
}: MealItemProps) {
  const getMealTypeColor = (type: string) => {
    switch (type) {
      case "breakfast":
        return "bg-blue-100 text-blue-600"
      case "lunch":
        return "bg-green-100 text-green-600"
      case "dinner":
        return "bg-purple-100 text-purple-600"
      case "snack":
        return "bg-orange-100 text-orange-600"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  const mealTypeColor = getMealTypeColor(mealType)

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <div className="md:w-1/3 relative">
        <div className="aspect-video md:aspect-square relative overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className={`absolute top-3 left-3 ${mealTypeColor} px-3 py-1 text-xs font-medium rounded-full capitalize`}>
          {mealType}
        </div>
      </div>
      
      <div className="p-4 md:p-5 flex-1">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-red-50 rounded-full">
              <Flame className="h-4 w-4 text-secondary" />
            </div>
            <div>
              <span className="block text-sm font-medium">{calories}</span>
              <span className="block text-xs text-muted-foreground">calories</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-full">
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="block text-sm font-medium">{prepTime}</span>
              <span className="block text-xs text-muted-foreground">prep time</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 