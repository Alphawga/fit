"use client"

import { useState } from "react"
import Image from "next/image"
import { DietPlanCard } from "@/components/DietPlanCard"
import { DietPlanFilters } from "@/components/DietPlanFilters"
import { Apple, Carrot, Leaf, Salad } from "lucide-react"
import { Container } from "@/components/Container"

// Mock data for diet plans
const dietPlans = [
  {
    id: "keto-30",
    title: "30-Day Keto Challenge",
    description: "High-fat, low-carb meal plan designed to put your body into ketosis for maximum fat burning.",
    calories: 1800,
    duration: "30",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    type: "Keto"
  },
  {
    id: "vegan-21",
    title: "21-Day Vegan Reset",
    description: "Plant-based meals packed with nutrients to cleanse your body and boost energy levels.",
    calories: 1600,
    duration: "21",
    image: "/placeholder.svg?height=400&width=600",
    type: "Vegan"
  },
  {
    id: "mediterranean-28",
    title: "Mediterranean Diet",
    description: "Heart-healthy meals inspired by traditional Mediterranean cuisine with olive oil, fish, and vegetables.",
    calories: 2000,
    duration: "28",
    image: "/placeholder.svg?height=400&width=600",
    type: "Mediterranean"
  },
  {
    id: "paleo-14",
    title: "Paleo Jumpstart",
    description: "Back-to-basics diet focusing on whole foods that our ancestors would have eaten.",
    calories: 2200,
    duration: "14",
    image: "/placeholder.svg?height=400&width=600",
    type: "Paleo"
  },
  {
    id: "low-carb-30",
    title: "Low-Carb Lifestyle",
    description: "Reduce carb intake while enjoying satisfying meals that keep you full and energized.",
    calories: 1700,
    duration: "30",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    type: "Low-carb"
  },
  {
    id: "vegetarian-21",
    title: "Vegetarian Vitality",
    description: "Meat-free meals that don't compromise on protein or flavor, perfect for a healthier lifestyle.",
    calories: 1900,
    duration: "21",
    image: "/placeholder.svg?height=400&width=600",
    type: "Vegetarian"
  },
  {
    id: "gluten-free-28",
    title: "Gluten-Free Essentials",
    description: "Delicious meals without gluten, perfect for those with sensitivities or celiac disease.",
    calories: 1800,
    duration: "28",
    image: "/placeholder.svg?height=400&width=600",
    type: "Gluten-free"
  },
  {
    id: "dairy-free-14",
    title: "Dairy-Free Delight",
    description: "Eliminate dairy while enjoying creamy, satisfying alternatives in these flavorful recipes.",
    calories: 1750,
    duration: "14",
    image: "/placeholder.svg?height=400&width=600",
    type: "Dairy-free"
  }
]

export default function DietPlanPage() {
  const [filteredPlans, setFilteredPlans] = useState(dietPlans)

  const handleFilterChange = (filters: {
    search: string
    caloriesRange: [number, number]
    dietTypes: string[]
  }) => {
    const filtered = dietPlans.filter((plan) => {
      // Filter by search term
      const matchesSearch = plan.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           plan.description.toLowerCase().includes(filters.search.toLowerCase())
      
      // Filter by calories range
      const matchesCalories = parseInt(plan.calories.toString()) >= filters.caloriesRange[0] &&
                             parseInt(plan.calories.toString()) <= filters.caloriesRange[1]
      
      // Filter by diet type
      const matchesDietType = filters.dietTypes.length === 0 || 
                             filters.dietTypes.includes(plan.type)
      
      return matchesSearch && matchesCalories && matchesDietType
    })
    
    setFilteredPlans(filtered)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-left animate-on-scroll">
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                <span className="block">Personalized</span>
                <span className="block text-secondary">Diet Plans</span>
                <span className="block">For Your Lifestyle</span>
              </h1>
              <p className="text-muted-foreground mb-6">
                Discover meal plans tailored to your dietary preferences and health goals. 
                From keto to vegan, we've got you covered with delicious, nutritious options.
              </p>
            </div>

            <div className="lg:w-1/2 relative animate-on-scroll">
              <div className="relative h-[300px] w-full">
                {/* Green circle background */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-primary/20 rounded-full z-0"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 p-3 bg-white rounded-full shadow-md z-10">
                  <Apple className="h-8 w-8 text-red-500" />
                </div>
                <div className="absolute bottom-10 left-1/4 p-3 bg-white rounded-full shadow-md z-10">
                  <Carrot className="h-8 w-8 text-orange-500" />
                </div>
                <div className="absolute top-1/3 right-10 p-3 bg-white rounded-full shadow-md z-10">
                  <Leaf className="h-8 w-8 text-green-500" />
                </div>
                <div className="absolute bottom-20 right-20 p-3 bg-white rounded-full shadow-md z-10">
                  <Salad className="h-8 w-8 text-primary" />
                </div>
                
                {/* Center image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Healthy meal"
                    width={200}
                    height={200}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Diet Plans Section */}
      <section className="py-12 bg-muted/20">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Browse Diet Plans</h2>
          
          <DietPlanFilters onFilterChange={handleFilterChange} />
          
          {filteredPlans.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No diet plans match your filters. Try adjusting your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPlans.map((plan) => (
                <DietPlanCard
                  key={plan.id}
                  id={plan.id}
                  title={plan.title}
                  description={plan.description}
                  calories={plan.calories}
                  duration={plan.duration}
                  image={plan.image}
                  featured={plan.featured}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Diet Plans?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our carefully crafted meal plans are designed by nutritionists to help you achieve your health goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Nutritionally Balanced</h3>
              <p className="text-muted-foreground">
                Every meal is carefully balanced to provide optimal nutrition while meeting your dietary requirements.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <Salad className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Delicious Variety</h3>
              <p className="text-muted-foreground">
                Enjoy a wide range of delicious recipes that keep your meals exciting and prevent diet fatigue.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Apple className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Easy to Follow</h3>
              <p className="text-muted-foreground">
                Simple recipes with clear instructions and grocery lists make following your diet plan effortless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 