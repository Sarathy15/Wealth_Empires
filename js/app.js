/* ═══════════════════════════════════════
   APPLICATION LOGIC
═══════════════════════════════════════ */

/* Navigation */
function navigate(id) {
  const svc = SERVICES[id] || SERVICES['home'];
  window.scrollTo(0, 0);
  renderPage(svc, id);
  document.title = 'Wealth Empire – ' + (svc.h1 ? svc.h1.filter(s => !s.startsWith('<')).join(' ') : 'Business Services');
}

function toggleMenu() {
  const h = document.getElementById('hamburger');
  const m = document.getElementById('mobileMenu');
  h.classList.toggle('open');
  m.classList.toggle('open');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

/* ═══════════════════════════════════════
   PAGE RENDERING
═══════════════════════════════════════ */
function renderPage(svc, id) {
  const app = document.getElementById('app');

  const breadcrumbHTML = svc.breadcrumb ? `
    <div class="breadcrumb">
      <a onclick="navigate('home')">Home</a>
      <span class="sep">›</span>
      <a onclick="navigate('${svc.category ? svc.category.toLowerCase() : 'home'}')">${svc.breadcrumb[0]}</a>
      <span class="sep">›</span>
      <span class="current">${svc.breadcrumb[1]}</span>
    </div>` : '';

  const h1HTML = svc.h1.map(line => line.startsWith('<em>') ? line : `<span>${line}</span>`).join('<br>');

  const plansHTML = svc.plans.map(p => `
    <div class="plan-card ${p.featured ? 'featured' : ''}">
      ${p.featured ? '<div class="plan-badge">Most Popular</div>' : ''}
      <div class="plan-name">${p.name}</div>
      <div class="plan-price">${p.price} <span>${p.unit}</span></div>
      <div class="plan-desc">${p.desc}</div>
      <ul class="plan-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <button class="${p.featured ? 'btn-gold' : 'btn-outline'} plan-cta" onclick="alert('Starting ${p.name} plan…')">Get Started</button>
    </div>`).join('');

  const faqsHTML = svc.faqs.map((f, idx) => `
    <div class="faq-item" onclick="toggleFaq(this)">
      <div class="faq-header">${f.q}<span class="faq-arrow">▾</span></div>
      <div class="faq-body"><div class="faq-body-inner">${f.a}</div></div>
    </div>`).join('');

  const relatedHTML = svc.related.map(r => `<a class="tag" href="#">${r}</a>`).join('');

  const reviewsHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="reviewer">
        <div class="avatar">${r.init}</div>
        <div class="reviewer-info">
          <div class="reviewer-name">${r.name}</div>
          <div class="reviewer-service">${r.svc}</div>
        </div>
      </div>
      <div class="stars">${r.stars}</div>
      <div class="review-date">${r.date}</div>
      <div class="review-text">${r.text}</div>
    </div>`).join('');

  const popularTags = ["Company Registration", "GST Registration", "LLP Registration", "Partnership", "Startup Registration", "Trademark Search", "Trademark Registration", "Trademark Renewal", "GST Return Filing", "Proprietorship Compliance", "Company Annual Filing", "Tax Audit", "Virtual Office", "One Person Company", "Trade License", "Udyam Registration", "Income Tax Filing", "CA Consultation", "DIN Reactivation", "ISO Registration", "ESI Registration", "Professional Tax", "Patent Registration", "Copyright Registration", "LLP Annual Filing", "FSSAI License", "Import Export Code", "TDS Return Filing", "PF Registration", "Startup India"];
  const popularHTML = popularTags.map(t => `<a class="tag" href="#" onclick="event.preventDefault()">${t}</a>`).join('');

  app.innerHTML = `
    <div class="page">
      ${breadcrumbHTML}

      <!-- HERO -->
      <section id="hero">
        <div class="hero-grid">
          <div class="hero">
            <div class="hero-eyebrow">${svc.eyebrow}</div>
            <h1>${h1HTML}</h1>
            <p class="hero-desc">${svc.desc}</p>
            <div class="hero-strip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--gold);flex-shrink:0"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
              Start from just &nbsp;<strong>${svc.price}</strong>
            </div>
            <div class="trust-row">
              <div class="trust-item"><span class="trust-num">4.3★</span><span class="trust-label">Verified Reviews</span></div>
              <div class="trust-item"><span class="trust-num">15+</span><span class="trust-label">Years of Experience</span></div>
              <div class="trust-item"><span class="trust-num">2L+</span><span class="trust-label">Happy Customers</span></div>
              <div class="trust-item"><span class="trust-num">Live</span><span class="trust-label">App Tracking</span></div>
            </div>
          </div>
          <div class="form-card">
            <div class="form-title">Get Started Today</div>
            <div class="form-sub">Free consultation • No hidden charges</div>
            <button class="btn-google">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Continue with Google
            </button>
            <div class="divider">OR</div>
            <div class="form-group"><input type="text" placeholder="Full Name *"></div>
            <div class="form-group"><input type="email" placeholder="Email Address *"></div>
            <div class="form-group">
              <div class="phone-row">
                <div class="phone-prefix">🇮🇳 +91</div>
                <input type="tel" placeholder="Phone Number *">
              </div>
            </div>
            <div class="form-group">
              <select>
                <option value="" disabled selected>Select State *</option>
                <option>Tamil Nadu</option><option>Maharashtra</option><option>Karnataka</option>
                <option>Delhi</option><option>Gujarat</option><option>Rajasthan</option>
                <option>Uttar Pradesh</option><option>West Bengal</option><option>Andhra Pradesh</option>
                <option>Kerala</option><option>Telangana</option><option>Punjab</option>
              </select>
            </div>
            <button class="btn-continue" onclick="alert('Submitting…')">Continue →</button>
            <div class="trust-badges">
              <div class="badge-item">
                <div class="badge-icon"><svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" stroke-width="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>
                <div class="badge-num">4.3★</div><div class="badge-lbl">Reviews</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon"><svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                <div class="badge-num">15+</div><div class="badge-lbl">Years Exp</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon"><svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <div class="badge-num">2L+</div><div class="badge-lbl">Customers</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon"><svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
                <div class="badge-num">Live</div><div class="badge-lbl">Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CLIENTS -->
      <section id="clients">
        <p class="clients-label">Trusted by India's Leading Businesses</p>
        <div class="clients-row">
          <span class="client-name">YES BANK</span>
          <span class="client-name">FLIPKART</span>
          <span class="client-name">ICICI BANK</span>
          <span class="client-name">EaseMyTrip</span>
          <span class="client-name">Duracool</span>
          <span class="client-name">Cello</span>
        </div>
      </section>

      ${svc.content ? `
      <!-- CONTENT DETAILS -->
      <section id="content-details">
        <div class="container content-wrapper">
          <h2 class="content-title">${svc.content.title}</h2>
          <p class="content-intro">${svc.content.intro}</p>
          ${svc.content.sections.map(sec => `
            <div class="content-section">
              <h3>${sec.heading}</h3>
              ${sec.content ? `<p>${sec.content}</p>` : ''}
              ${sec.subheading ? `<h4>${sec.subheading}</h4>` : ''}
              ${sec.items ? `<ul>${sec.items.map(item => `<li>${item}</li>`).join('')}</ul>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}

      <!-- PRICING -->
      <section id="pricing">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">Pricing</span>
            <h2 class="section-title">Simple packages. Transparent pricing.</h2>
            <p class="section-sub">Choose the plan that fits your business needs. All plans include expert support.</p>
          </div>
          <div class="pricing-grid">${plansHTML}</div>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">FAQ</span>
            <h2 class="section-title">Frequently asked questions</h2>
            <p class="section-sub">Common questions about ${svc.h1.filter(s => !s.startsWith('<')).join(' ')}.</p>
          </div>
          <div class="faq-grid">${faqsHTML}</div>
          <div class="faq-load">
            <button class="btn-gold" onclick="alert('More FAQs loading…')">Load more questions</button>
          </div>
        </div>
      </section>

      <!-- RELATED SERVICES -->
      <section id="related">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">Related Services</span>
            <h2 class="section-title">${svc.breadcrumb ? svc.breadcrumb[0] : 'Business Registration'}</h2>
          </div>
          <div class="tags-wrap">${relatedHTML}</div>
        </div>
      </section>

      <!-- REVIEWS -->
      <section id="reviews">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">Testimonials</span>
            <h2 class="section-title">Customer Reviews</h2>
          </div>
          <div class="reviews-grid">${reviewsHTML}</div>
          <div class="reviews-cta">
            <button class="btn-gold">View all verified customer reviews</button>
          </div>
        </div>
      </section>

      <!-- POPULAR -->
      <section id="popular">
        <div class="container">
          <div class="section-header">
            <span class="section-eyebrow">Explore</span>
            <h2 class="section-title">Popular Searches</h2>
          </div>
          <div class="tags-wrap">${popularHTML}</div>
        </div>
      </section>
    </div>`;
}

function toggleFaq(el) {
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

/* ═══════════════════════════════════════
   INITIALIZATION
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  navigate('home');
});
