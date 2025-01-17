import { Link } from "react-router-dom"
import './MenuSummary.css'
import Button from '../Button/Button'

const featuredDishes = [
  {
    name: 'Salmón grillado',
    description: 'Salmón del Atlántico fresco con salsa de mantequilla de limón',
    image: 'https://twicpics.moulinex.es/https://sebplatform.api.groupe-seb.com/statics/791a6aba-906b-403a-9957-33cdc00efb17.jpg?w=1920&fit=scale',
    price: '$21.000'
  },
  {
    name: 'Pizza margarita',
    description: 'Pizza típica napolitana elaborada con tomate, mozzarella, albahaca fresca, sal y aceite',
    image: 'https://www.clarin.com/img/2023/08/01/SL3EslnOA_1200x630__1.jpg',
    price: '$14.000'
  },
  {
    name: 'Estofado irlandés',
    description: 'Ragú de carne de cordero en trozos guisada con patatas, cebollas y perejil',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2009/10/classic-irish-stew-9cb36ca.jpg?resize=768,574',
    price: '$13.000'
  }
]

export default function MenuSummary() {
  return (
    <section className="py-12 md:py-20 container menu-summary">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-8">Nuestros platos destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredDishes.map((dish, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                width={400}
                height={600}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="font-bold">{dish.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>
            <Link href="/menu">See Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

