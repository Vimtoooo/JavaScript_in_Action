function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const position = element.getBoundingClientRect();
    
    if (position.top < window.innerHeight - 50) element.classList.add("active");
  });
}

window.addEventListener('scroll', animateOnScroll);

// Run once on page load
animateOnScroll();
