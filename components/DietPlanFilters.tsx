import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"

interface DietPlanFiltersProps {
  onFilterChange: (filters: {
    search: string
    caloriesRange: [number, number]
    dietTypes: string[]
  }) => void
}

export function DietPlanFilters({ onFilterChange }: DietPlanFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [caloriesRange, setCaloriesRange] = useState<[number, number]>([1000, 3000])
  const [selectedDietTypes, setSelectedDietTypes] = useState<string[]>([])

  const dietTypes = [
    "Keto",
    "Vegan",
    "Vegetarian",
    "Paleo",
    "Low-carb",
    "Mediterranean",
    "Gluten-free",
    "Dairy-free"
  ]

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    onFilterChange({
      search: e.target.value,
      caloriesRange,
      dietTypes: selectedDietTypes
    })
  }

  const handleCaloriesChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setCaloriesRange(newRange)
    onFilterChange({
      search,
      caloriesRange: newRange,
      dietTypes: selectedDietTypes
    })
  }

  const handleDietTypeToggle = (dietType: string) => {
    const newSelectedTypes = selectedDietTypes.includes(dietType)
      ? selectedDietTypes.filter(type => type !== dietType)
      : [...selectedDietTypes, dietType]
    
    setSelectedDietTypes(newSelectedTypes)
    onFilterChange({
      search,
      caloriesRange,
      dietTypes: newSelectedTypes
    })
  }

  return (
    <div className="mb-8">
      <div className="flex gap-2 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search diet plans..."
            value={search}
            onChange={handleSearchChange}
            className="pl-9 rounded-full border-gray-300"
          />
        </div>
        <Button
          variant="outline"
          className="rounded-full border-gray-300"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {isFiltersOpen && (
        <div className="bg-white p-4 rounded-xl border border-border/50 shadow-sm mb-4">
          <div className="mb-6">
            <h3 className="font-medium mb-3">Calories Range</h3>
            <div className="px-2">
              <Slider
                defaultValue={[caloriesRange[0], caloriesRange[1]]}
                max={5000}
                min={0}
                step={100}
                onValueChange={handleCaloriesChange}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{caloriesRange[0]} cal</span>
                <span>{caloriesRange[1]} cal</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">Diet Type</h3>
            <div className="flex flex-wrap gap-2">
              {dietTypes.map((dietType) => (
                <Button
                  key={dietType}
                  variant={selectedDietTypes.includes(dietType) ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full ${
                    selectedDietTypes.includes(dietType)
                      ? "bg-primary text-white"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleDietTypeToggle(dietType)}
                >
                  {dietType}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 