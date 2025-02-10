document.addEventListener("DOMContentLoaded", function() {
    // Interactive Elements
    const ctaBtn = document.querySelector('.cta-btn');
    
    // Button click event to trigger a contact prompt (simple interaction)
    ctaBtn.addEventListener('click', function() {
        alert("Thank you for reaching out! We will get back to you shortly.");
    });

    // Example of smooth scroll to the "Contact" section
    const contactLink = document.querySelector('a[href="#contact"]');
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector("#contact").scrollIntoView({ behavior: 'smooth' });
    });
});
