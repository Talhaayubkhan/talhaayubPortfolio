export const navigationItems = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];

export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};