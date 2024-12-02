document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav a");
  
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Example interaction for the CTA button
    document.querySelector(".cta").addEventListener("click", () => {
      alert("Welcome to the journey!");
    });
  });
  
