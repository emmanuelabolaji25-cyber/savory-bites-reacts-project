import { Link } from 'react-router-dom'

const featured = [
  {
    name: 'Party Jollof Rice',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&auto=format&fit=crop',
    blurb: 'Smoky, tomato-rich, and cooked the traditional way.',
  },
  {
    name: 'Egusi & Pounded Yam',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop',
    blurb: 'Melon-seed soup simmered slow with assorted meat.',
  },
  {
    name: 'Beef Suya Skewers',
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=700&auto=format&fit=crop',
    blurb: 'Open-flame grilled, dusted in suya spice.',
  },
]

const testimonials = [
  {
    quote:
      "The jollof tastes like my grandmother's — smoky, not sweet, exactly how it should be.",
    name: 'Chiamaka O.',
  },
  {
    quote: 'Delivery was hot and fast. The egusi soup alone is worth the order.',
    name: 'Tunde A.',
  },
  {
    quote: 'Finally a spot that gets suya right. My go-to for Friday orders.',
    name: 'Blessing N.',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <span className="hero-eyebrow">Lekki, Lagos</span>
          <h1>
            Comfort food, <em>cooked with intent.</em>
          </h1>
          <p className="lede">
            Savory Bites is a kitchen-first restaurant — fresh ingredients,
            open-flame grilling, and a menu built around dishes we'd actually
            want to eat twice in one week.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop"
            alt="Party jollof rice plated"
            className="hero-image"
          />
          <div className="hero-badge">
            <strong>6+ yrs</strong>
            <span>serving the neighborhood</span>
          </div>
        </div>
      </section>

      <section className="highlights">
        <div className="highlight-card">
          <h3>Fresh daily</h3>
          <p>Every dish is prepared the same day it's served — no shortcuts, no freezers.</p>
        </div>
        <div className="highlight-card">
          <h3>Fast delivery</h3>
          <p>Order online and get your food delivered hot, right to your door.</p>
        </div>
        <div className="highlight-card">
          <h3>Loved locally</h3>
          <p>Trusted by the community as the go-to spot for honest, consistent food.</p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>Crowd favorites</h2>
          <Link to="/menu" className="section-link">
            See full menu →
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((item) => (
            <Link to="/menu" key={item.name} className="featured-card">
              <div className="featured-image-wrap">
                <img src={item.image} alt={item.name} loading="lazy" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block story-block">
        <div className="story-text">
          <h2>Why Savory Bites</h2>
          <p>
            We cook the way Nigerian food deserves to be cooked — slowly,
            seasoned properly, and served generously. From the first scoop of
            jollof to the last bite of chin chin, every dish on our menu is
            tested on our own families before it ever reaches yours.
          </p>
          <Link to="/about" className="btn btn-secondary">
            Our Story
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700&auto=format&fit=crop"
          alt="Moi moi served on a plate"
          className="story-image"
        />
      </section>

      <section className="section-block">
        <div className="section-heading">
          <h2>What people are saying</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <blockquote className="testimonial-card" key={t.name}>
              <p>"{t.quote}"</p>
              <cite>{t.name}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <h2>Hungry already?</h2>
        <p>Order online in under a minute. Delivery across Lekki and Victoria Island.</p>
        <Link to="/menu" className="btn btn-primary">
          Order Now
        </Link>
      </section>
    </>
  )
}

export default Home
