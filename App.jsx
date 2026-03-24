import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const slides = [
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=90",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1400&q=90",
    "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1400&q=90",
  ];

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    alert("Message Sent Successfully ✅");
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">
          Voy<span>age</span>
        </h1>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </nav>

      {/* Hero Slideshow */}
      <section id="home" className="hero">
        {slides.map((img, i) => (
          <div
            key={i}
            className={`slide ${i === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="hero-overlay">
              <h1>Wander Further</h1>
              <p>Discover amazing destinations and create unforgettable memories.</p>
              <div className="buttons">
                <button onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}>
                  Explore Trips
                </button>
                <button onClick={() => setShowForm(!showForm)}>Plan Journey</button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Plan Journey Form */}
      {showForm && (
        <section className="section form-section">
          <h2>Plan Your Journey</h2>
          <div className="contact">
            <input placeholder="Name" />
            <input placeholder="Email" />
            <input placeholder="Destination" />
            <input type="date" placeholder="Start Date" />
            <input type="date" placeholder="End Date" />
            <textarea placeholder="Special Requests"></textarea>
            <button onClick={handleSubmit}>Submit Plan</button>
          </div>
        </section>
      )}

      {/* Featured Destinations */}
      <section className="section">
        <h2>Featured Destinations</h2>
        <div className="grid">
          {[
            { name: "Santorini", price: "$1299", desc: "Beautiful sunsets and whitewashed buildings." },
            { name: "Kyoto", price: "$1099", desc: "Historic temples and serene gardens." },
            { name: "Bali", price: "$999", desc: "Tropical beaches and vibrant culture." },
          ].map((place, i) => (
            <div className="card destination-card" key={i}>
              <div className="image-container">
                <img src={`https://source.unsplash.com/400x250/?${place.name}`} alt={place.name} />
                <div className="overlay">
                  <p>{place.desc}</p>
                </div>
              </div>
              <h3>{place.name}</h3>
              <p>{place.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Team */}
      <section id="about" className="section dark">
        <h2>Meet Our Team</h2>
        <div className="grid">
          <div className="card team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ali Khan" />
            <h3>Ali Khan</h3>
            <p>Travel Expert</p>
            <p className="team-desc">Ali has 10+ years of experience creating unforgettable trips worldwide.</p>
          </div>

          <div className="card team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fatima Noor" />
            <h3>Fatima Noor</h3>
            <p>Tour Planner</p>
            <p className="team-desc">Fatima specializes in planning luxury tours with personal touches.</p>
          </div>

          <div className="card team-card">
            <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Ahmed Raza" />
            <h3>Ahmed Raza</h3>
            <p>Customer Support</p>
            <p className="team-desc">Ahmed ensures all our clients receive fast and helpful support.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card service-card">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400" alt="Travel Safety" />
            <h3>Travel Safety</h3>
            <p>Ensuring safe and secure trips for all our customers.</p>
          </div>

          <div className="card service-card">
            <img src="https://images.unsplash.com/photo-1502920917128-1aa500764b6f?w=400" alt="Booking" />
            <h3>Booking</h3>
            <p>Easy and fast booking for hotels, flights, and tours.</p>
          </div>

          <div className="card service-card">
            <img src="https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=400" alt="Transfers" />
            <h3>Transfers</h3>
            <p>Comfortable transfers from airport to hotel and destinations.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="section dark">
        <h2>Contact Us</h2>
        <div className="contact">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button onClick={handleSubmit}>Send Message</button>
        </div>
      </section>
    </div>
  );
}

export default App;