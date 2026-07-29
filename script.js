/* ============================================================
   script.js — Dr. Avinash Kumar | Academic Profile
   Functionality: scroll effects, animations, data population
   ============================================================ */

/* ----------------------------------------------------------
   1. PUBLICATION DATA
   ---------------------------------------------------------- */
const PUBLICATIONS = [
  {
    id: 1,
    title: "Nutraceutical powerhouses: leveraging α-amylase inhibitors for metabolic disease prevention",
    authors: "A. Kumar, A. M. Kayastha",
    journal: "Journal of Proteins and Proteomics",
    year: 2026,
    doi: "10.1007/s42485-026-xxxxx",
    link: "https://link.springer.com/article/10.1007/s42485-026-xxxxx"
  },
  {
    id: 2,
    title: "Mechanistic behavior of fenugreek α-amylase on starch hydrolysis upon interaction with Hesperetin and Luteolin probed by multispectroscopic and in silico approaches",
    authors: "R. Das, A. Kumar, V. Singh, A. M. Kayastha, C. Singh",
    journal: "Food Chemistry, 490, 145141",
    year: 2025,
    doi: "10.1016/j.foodchem.2025.145141",
    link: "https://doi.org/10.1016/j.foodchem.2025.145141"
  },
  {
    id: 3,
    title: "Innovative synthesis approaches and health implications of organic-inorganic Nanohybrids for food industry applications",
    authors: "R. Das, A. Kumar, C. Singh, A. M. Kayastha",
    journal: "Food Chemistry, 464, 141905",
    year: 2025,
    doi: "10.1016/j.foodchem.2024.141905",
    link: "https://doi.org/10.1016/j.foodchem.2024.141905"
  },
  {
    id: 4,
    title: "Deciphering unfolding pathways: Chemical, heat, and acid induced investigations using fenugreek (Trigonella foenum-graecum) α-amylase",
    authors: "A. Kumar, A. Aaditya, A. M. Kayastha",
    journal: "Journal of Molecular Structure, 1315, 138857",
    year: 2024,
    doi: "10.1016/j.molstruc.2024.138857",
    link: "https://doi.org/10.1016/j.molstruc.2024.138857"
  },
  {
    id: 5,
    title: "Studies on α-amylase inhibition by acarbose and quercetin using fluorescence, circular dichroism, docking, and dynamics simulations",
    authors: "A. Kumar, V. K. Singh, A. M. Kayastha",
    journal: "Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 314, 124160",
    year: 2024,
    doi: "10.1016/j.saa.2024.124160",
    link: "https://doi.org/10.1016/j.saa.2024.124160"
  },
  {
    id: 6,
    title: "Immobilization of α-amylase onto functionalized molybdenum diselenide nanoflowers (MoSe₂-NFs) as scaffolds: Characterization, kinetics, and potential applications in starch processing",
    authors: "A. Kumar, R. Dutt, A. Srivastava, A. M. Kayastha",
    journal: "Food Chemistry, 442, 138431",
    year: 2024,
    doi: "10.1016/j.foodchem.2024.138431",
    link: "https://doi.org/10.1016/j.foodchem.2024.138431"
  },
  {
    id: 7,
    title: "Advantages of Nanotechnology Developments in Active Food Packaging",
    authors: "A. Kumar, P. Kumar, A. M. Kayastha",
    journal: "Handbook of Nanofillers, 1–20",
    year: 2024,
    doi: "10.1007/978-981-99-xxxx",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-xxxx"
  },
  {
    id: 8,
    title: "Molecular modeling, docking and dynamics studies of fenugreek (Trigonella foenum-graecum) α-amylase",
    authors: "A. Kumar, V. K. Singh, A. M. Kayastha",
    journal: "Journal of Biomolecular Structure and Dynamics, 41(19), 9297–9312",
    year: 2023,
    doi: "10.1080/07391102.2022.2143434",
    link: "https://doi.org/10.1080/07391102.2022.2143434"
  },
  {
    id: 9,
    title: "α-Amylase purified and characterized from fenugreek (Trigonella foenum-graecum) showed substantial anti-biofilm activity against Staphylococcus aureus MTCC740",
    authors: "A. Kumar, R. R. Kumar, V. Chaturvedi, A. M. Kayastha",
    journal: "International Journal of Biological Macromolecules, 252, 126442",
    year: 2023,
    doi: "10.1016/j.ijbiomac.2023.126442",
    link: "https://doi.org/10.1016/j.ijbiomac.2023.126442"
  }
];

/* ----------------------------------------------------------
   2. TEAM / CO-AUTHOR DATA
   ---------------------------------------------------------- */
const TEAM = [
  { name: "Prof. A. M. Kayastha", role: "Senior Supervisor, BHU", initials: "AK" },
  { name: "Dr. V. K. Singh", role: "Research Collaborator", initials: "VS" },
  { name: "Dr. R. Das", role: "Research Collaborator", initials: "RD" },
  { name: "Dr. C. Singh", role: "Research Collaborator", initials: "CS" },
  { name: "Dr. R. R. Kumar", role: "Research Collaborator", initials: "RK" },
  { name: "Dr. V. Chaturvedi", role: "Research Collaborator", initials: "VC" },
  { name: "Dr. R. Dutt", role: "Research Collaborator", initials: "RD" },
  { name: "Dr. A. Srivastava", role: "Research Collaborator", initials: "AS" },
  { name: "A. Aaditya", role: "Research Collaborator", initials: "AA" },
  { name: "Dr. P. Kumar", role: "Research Collaborator", initials: "PK" }
];

/* ----------------------------------------------------------
   3. DOM REFERENCES
   ---------------------------------------------------------- */
const navbar    = document.getElementById('navbar');
const navLinks  = document.getElementById('navLinks');
const mobileBtn = document.getElementById('mobileToggle');
const backTop   = document.getElementById('backTop');
const pubList   = document.getElementById('pubList');
const teamGrid  = document.getElementById('teamGrid');
const pubFilters = document.querySelectorAll('.pfilter');

/* ----------------------------------------------------------
   4. NAVBAR — SCROLL EFFECT & MOBILE TOGGLE
   ---------------------------------------------------------- */
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  navbar.classList.toggle('scrolled', scrollY > 60);
  backTop.classList.toggle('show', scrollY > 500);
});

mobileBtn.addEventListener('click', () => {
  mobileBtn.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileBtn.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ----------------------------------------------------------
   5. ACTIVE NAV LINK — HIGHLIGHT ON SCROLL
   ---------------------------------------------------------- */
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  let current = '';
  const scrollPos = window.scrollY + 120;

  sections.forEach(sec => {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      current = sec.getAttribute('id');
    }
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.s === current);
  });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

/* ----------------------------------------------------------
   6. REVEAL ANIMATIONS — INTERSECTION OBSERVER
   ---------------------------------------------------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

/* ----------------------------------------------------------
   7. COUNT-UP ANIMATION
   ---------------------------------------------------------- */
function animateCountUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (isNaN(target)) return;
  const duration = 2000;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCountUp(entry.target);
      countObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

/* ----------------------------------------------------------
   8. SKILL BAR FILL ANIMATION
   ---------------------------------------------------------- */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      const w = parseInt(fill.dataset.w, 10);
      if (!isNaN(w)) fill.style.width = w + '%';
      skillObserver.unobserve(fill);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-fill').forEach(el => skillObserver.observe(el));

/* ----------------------------------------------------------
   9. STAT RING (SVG CIRCLE) ANIMATION
   ---------------------------------------------------------- */
const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const circle = entry.target;
      const pct = parseFloat(circle.dataset.pct);
      if (!isNaN(pct)) {
        const circumference = 2 * Math.PI * 52; // r=52 → ~326.73
        circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;
      }
      ringObserver.unobserve(circle);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.stat-ring-fill').forEach(el => ringObserver.observe(el));

/* ----------------------------------------------------------
   10. PUBLICATIONS — RENDER & FILTER
   ---------------------------------------------------------- */
function renderPublications(yearFilter = 'all') {
  const filtered = yearFilter === 'all'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.year === parseInt(yearFilter, 10));

  if (filtered.length === 0) {
    pubList.innerHTML = '<div class="pub-empty">No publications found for this year.</div>';
    return;
  }

  pubList.innerHTML = filtered.map(p => `
    <div class="pub-item" data-reveal>
      <div class="pub-year-tag">${p.year}</div>
      <div class="pub-content">
        <div class="pub-title">${p.title}</div>
        <div class="pub-authors">${p.authors}</div>
        <div class="pub-journal">${p.journal}</div>
        <div class="pub-links">
          <a href="${p.link}" target="_blank" rel="noopener" class="pub-link">DOI →</a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe newly added [data-reveal] items
  pubList.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));
}

// Filter button clicks
pubFilters.forEach(btn => {
  btn.addEventListener('click', () => {
    pubFilters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderPublications(btn.dataset.f);
  });
});

// Initial render
renderPublications('all');

/* ----------------------------------------------------------
   11. TEAM — RENDER
   ---------------------------------------------------------- */
teamGrid.innerHTML = TEAM.map(t => `
  <div class="team-card" data-reveal>
    <div class="team-avatar">${t.initials}</div>
    <div class="team-name">${t.name}</div>
    <div class="team-role">${t.role}</div>
  </div>
`).join('');

// Re-observe team [data-reveal]
teamGrid.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ----------------------------------------------------------
   12. BACK TO TOP — SMOOTH SCROLL
   ---------------------------------------------------------- */
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ----------------------------------------------------------
   13. SMOOTH SCROLL FOR NAV ANCHORS (fallback if CSS fails)
   ---------------------------------------------------------- */
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ----------------------------------------------------------
   14. CONSOLE — WELCOME MESSAGE
   ---------------------------------------------------------- */
console.log('%c🔬 Dr. Avinash Kumar — Academic Profile', 'font-size:1.4rem; font-weight:700; color:#6c8cff;');
console.log('%cProject Scientist, IIT Kanpur • Enzyme Technology & Nanobiotechnology', 'color:#8b8fa3;');
