import { useState } from 'react'
import MenuItem from '../components/MenuItem'

const menuData = [
  {
    name: 'Party Jollof Rice',
    description: 'Smoky, slow-cooked party-style jollof rice with fried plantain on the side.',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&auto=format&fit=crop',
    category: 'Rice',
  },
  {
    name: 'Chicken Jollof Rice',
    description: 'Our classic jollof served with a generous portion of grilled chicken.',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1604908177522-f3c7f1c1b1b0?w=600&auto=format&fit=crop',
    category: 'Rice',
  },
  {
    name: 'Egusi Soup & Pounded Yam',
    description: 'Melon-seed soup simmered with assorted meat and stockfish, served with soft pounded yam.',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&auto=format&fit=crop',
    category: 'Soup',
  },
  {
    name: 'Beef Suya Skewers',
    description: 'Spicy skewered beef grilled over an open flame, dusted with suya spice.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&auto=format&fit=crop',
    category: 'Grill',
  },
  {
    name: 'Moi Moi',
    description: 'Steamed bean pudding with egg and fish, seasoned the traditional way.',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&auto=format&fit=crop',
    category: 'Sides',
  },
  {
    name: 'Akara',
    description: 'Deep-fried bean cakes, crisp outside and soft within — a breakfast classic.',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&auto=format&fit=crop',
    category: 'Sides',
  },
  {
    name: 'Puff Puff',
    description: 'Sweet, golden fried dough balls — the Nigerian street-food favorite.',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop',
    category: 'Dessert',
  },
  {
    name: 'Chin Chin',
    description: 'Crunchy, lightly sweetened fried snack bites — great with a cold drink.',
    price: 1000,
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=600&auto=format&fit=crop',
    category: 'Dessert',
  },
]

const categories = ['All', ...new Set(menuData.map((item) => item.category))]

function Menu() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = menuData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="page menu-page">
      <div className="page-heading">
        <h1>Our Menu</h1>
        <p>Browse our dishes below — search or filter by category.</p>
      </div>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">No dishes match your search.</p>
      ) : (
        <div className="menu-grid">
          {filtered.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Menu
