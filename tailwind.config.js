// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'gradient-skills': 'var(--bg-gradient-skills)',
        'gradient-btn-cv' : "var(--bg-btn-cv)",
        'gradient-experience-card': 'var(--bg-gradient-card-dark)',
        'gradient-dark-card': 'var(--bg-gradient-card-dark)',
        'gradient-btn-sent' : "var(--bg-gradient-btn-sent)",
      },
      colors: {
        'color-primary': "var(--color-primary)",
        'color-secundary': "var(--color-secundary)",
        'color-blur-blob': "var(--bg-blur)",
        'color-profile': "var(--br-color-profile)",
        'color-nav': "var(--bg-nav)",
        'color-section': "var(--bg-section)",
        'color-experience-card' : "var(--bg-section)",
        'color-experience-skill-tag' : "var(--color-primary)",
      },
      boxShadow:{
        'box-btn-cv': "var(--shadow-btn-cv)",
        'box-skill-card': "var(--shadow-skill-card)",
        'box-experience-card': "var(--shadow-experience-card)",
        'box-project-card': "var(--shadow-project-card)",
        'box-education-card': "var(--shadow-education-card)",
      },
      dropShadow: {
        'profile': "var(--shadow-profile)",
      },
    },
  },
  plugins: [],
};

