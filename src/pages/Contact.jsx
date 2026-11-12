import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate(values) {
    const newErrors = {}
    if (!values.name.trim()) newErrors.name = 'Full name is required.'
    if (!values.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!values.subject.trim()) newErrors.subject = 'Subject is required.'
    if (!values.message.trim()) newErrors.message = 'Message cannot be empty.'
    return newErrors
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <section className="page contact-page">
      <div className="page-heading">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out using the details below or send us a message.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 14 Admiralty Way, Lekki Phase 1, Lagos</p>
          <p>📞 +234 801 234 5678</p>
          <p>✉️ hello@savorybites-sample.com</p>
          <p>🕒 Mon – Sun: 9:00 AM – 10:00 PM</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && <span className="error-text">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>

          {submitted && (
            <p className="success-text">✅ Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
