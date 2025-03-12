"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MealItem } from "@/components/MealItem"
import { ArrowLeft, Calendar, Clock, Download, Flame, Info, ShoppingBag, Utensils } from "lucide-react"
import { Container } from "@/components/Container"

// Mock data for a specific diet plan
const dietPlanData = {
  "keto-30": {
    id: "keto-30",
    title: "30-Day Keto Challenge",
    description: "High-fat, low-carb meal plan designed to put your body into ketosis for maximum fat burning. This comprehensive plan includes breakfast, lunch, dinner, and snacks for a full month, with grocery lists and meal prep instructions.",
    calories: 1800,
    duration: "30",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
    type: "Keto",
    nutritionInfo: {
      protein: "25%",
      fat: "70%",
      carbs: "5%",
      fiber: "25g",
      sugar: "10g"
    },
    meals: {
      day1: [
        {
          title: "Avocado & Bacon Breakfast Bowl",
          description: "Creamy avocado with crispy bacon, topped with a fried egg and sprinkled with cheese.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 450,
          prepTime: "15 min",
          mealType: "breakfast"
        },
        {
          title: "Grilled Chicken Caesar Salad",
          description: "Grilled chicken breast on a bed of romaine lettuce with parmesan cheese and homemade keto-friendly Caesar dressing.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 550,
          prepTime: "20 min",
          mealType: "lunch"
        },
        {
          title: "Butter-Basted Ribeye Steak",
          description: "Juicy ribeye steak cooked in butter with garlic and herbs, served with roasted asparagus.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 650,
          prepTime: "25 min",
          mealType: "dinner"
        },
        {
          title: "Cheese & Nut Mix",
          description: "A satisfying mix of cheddar cheese cubes with almonds and macadamia nuts.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 200,
          prepTime: "5 min",
          mealType: "snack"
        }
      ],
      day2: [
        {
          title: "Cream Cheese Pancakes",
          description: "Low-carb pancakes made with cream cheese and eggs, topped with sugar-free syrup.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 400,
          prepTime: "15 min",
          mealType: "breakfast"
        },
        {
          title: "Tuna Salad Lettuce Wraps",
          description: "Creamy tuna salad with mayo and diced celery, wrapped in crisp lettuce leaves.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 500,
          prepTime: "10 min",
          mealType: "lunch"
        },
        {
          title: "Cheesy Bacon Wrapped Chicken",
          description: "Chicken breasts stuffed with cheese and wrapped in bacon, baked to perfection.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 700,
          prepTime: "35 min",
          mealType: "dinner"
        },
        {
          title: "Pepperoni Chips",
          description: "Crispy pepperoni slices baked until crunchy, served with a side of guacamole.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 180,
          prepTime: "10 min",
          mealType: "snack"
        }
      ]
    }
  },
  "vegan-21": {
    id: "vegan-21",
    title: "21-Day Vegan Reset",
    description: "Plant-based meals packed with nutrients to cleanse your body and boost energy levels. This plan focuses on whole foods, with plenty of fruits, vegetables, legumes, and grains to provide complete nutrition.",
    calories: 1600,
    duration: "21",
    image: "/placeholder.svg?height=600&width=1200",
    type: "Vegan",
    nutritionInfo: {
      protein: "20%",
      fat: "25%",
      carbs: "55%",
      fiber: "35g",
      sugar: "25g"
    },
    meals: {
      day1: [
        {
          title: "Berry Smoothie Bowl",
          description: "Blended frozen berries topped with granola, chia seeds, and fresh fruit.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 350,
          prepTime: "10 min",
          mealType: "breakfast"
        },
        {
          title: "Quinoa Buddha Bowl",
          description: "Protein-rich quinoa with roasted vegetables, chickpeas, and tahini dressing.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 450,
          prepTime: "25 min",
          mealType: "lunch"
        },
        {
          title: "Lentil Shepherd's Pie",
          description: "Savory lentil and vegetable filling topped with creamy mashed potatoes.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 550,
          prepTime: "45 min",
          mealType: "dinner"
        },
        {
          title: "Apple with Almond Butter",
          description: "Crisp apple slices served with creamy almond butter for dipping.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 200,
          prepTime: "5 min",
          mealType: "snack"
        }
      ],
      day2: [
        {
          title: "Tofu Scramble",
          description: "Scrambled tofu with turmeric, nutritional yeast, and vegetables.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 300,
          prepTime: "15 min",
          mealType: "breakfast"
        },
        {
          title: "Mediterranean Wrap",
          description: "Whole grain wrap filled with hummus, fresh vegetables, and olives.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 400,
          prepTime: "10 min",
          mealType: "lunch"
        },
        {
          title: "Mushroom Risotto",
          description: "Creamy arborio rice with sautéed mushrooms, garlic, and herbs.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 500,
          prepTime: "35 min",
          mealType: "dinner"
        },
        {
          title: "Roasted Chickpeas",
          description: "Crispy roasted chickpeas seasoned with spices for a protein-rich snack.",
          image: "/placeholder.svg?height=300&width=400",
          calories: 150,
          prepTime: "30 min",
          mealType: "snack"
        }
      ]
    }
  }
}

export default function DietPlanDetailPage({ params }: { params: { id: string } }) {
  const [activeDay, setActiveDay] = useState("day1")
  
  // Get the diet plan data based on the ID from the URL
  const plan = dietPlanData[params.id as keyof typeof dietPlanData]
  
  // If plan doesn't exist, show a message
  if (!plan) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Diet Plan Not Found</h1>
        <p className="text-muted-foreground mb-8">The diet plan you're looking for doesn't exist or has been removed.</p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full">
          <Link href="/diet-plan">Browse All Diet Plans</Link>
        </Button>
      </Container>
    )
  }
  
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-16 pb-12 bg-gradient-to-b from-muted/50 to-background">
        <Container>
          <Link href="/diet-plan" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Diet Plans
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="relative rounded-xl overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-xs font-medium rounded-full">
                  {plan.type}
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <h1 className="text-3xl font-bold mb-3">{plan.title}</h1>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-50 rounded-full">
                    <Flame className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">{plan.calories}</span>
                    <span className="block text-xs text-muted-foreground">calories/day</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">{plan.duration}</span>
                    <span className="block text-xs text-muted-foreground">days</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 mb-6">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white rounded-full">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Get Meal Plan
                </Button>
                <Button variant="outline" className="border-gray-300 rounded-full">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Nutrition Info Section */}
      <section className="py-8 border-b border-border/50">
        <Container>
          <div className="flex items-center gap-2 mb-4">
            <Info className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Nutrition Information</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-sm text-muted-foreground mb-1">Protein</h3>
              <p className="text-xl font-semibold text-primary">{plan.nutritionInfo.protein}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-sm text-muted-foreground mb-1">Fat</h3>
              <p className="text-xl font-semibold text-secondary">{plan.nutritionInfo.fat}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-sm text-muted-foreground mb-1">Carbs</h3>
              <p className="text-xl font-semibold text-blue-500">{plan.nutritionInfo.carbs}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-sm text-muted-foreground mb-1">Fiber</h3>
              <p className="text-xl font-semibold text-green-500">{plan.nutritionInfo.fiber}</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <h3 className="text-sm text-muted-foreground mb-1">Sugar</h3>
              <p className="text-xl font-semibold text-red-500">{plan.nutritionInfo.sugar}</p>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Meal Plan Section */}
      <section className="py-12">
        <Container>
          <div className="flex items-center gap-2 mb-6">
            <Utensils className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Daily Meal Plan</h2>
          </div>
          
          <Tabs defaultValue="day1" onValueChange={setActiveDay}>
            <TabsList className="mb-6 bg-muted/50 p-1 rounded-lg">
              <TabsTrigger value="day1" className="rounded-md data-[state=active]:bg-white">Day 1</TabsTrigger>
              <TabsTrigger value="day2" className="rounded-md data-[state=active]:bg-white">Day 2</TabsTrigger>
              {/* Add more days as needed */}
            </TabsList>
            
            <TabsContent value="day1" className="space-y-6">
              {plan.meals.day1.map((meal, index) => (
                <MealItem
                  key={index}
                  title={meal.title}
                  description={meal.description}
                  image={meal.image}
                  calories={meal.calories}
                  prepTime={meal.prepTime}
                  mealType={meal.mealType as any}
                />
              ))}
            </TabsContent>
            
            <TabsContent value="day2" className="space-y-6">
              {plan.meals.day2.map((meal, index) => (
                <MealItem
                  key={index}
                  title={meal.title}
                  description={meal.description}
                  image={meal.image}
                  calories={meal.calories}
                  prepTime={meal.prepTime}
                  mealType={meal.mealType as any}
                />
              ))}
            </TabsContent>
          </Tabs>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-muted/20">
        <Container className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Diet Journey?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Get this complete meal plan with grocery lists, prep instructions, and nutritional information.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto text-lg">
            Get Started Now
          </Button>
        </Container>
      </section>
    </div>
  )
} 