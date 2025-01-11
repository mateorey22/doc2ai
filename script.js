 document.addEventListener('DOMContentLoaded', function() {
        
    // --- Hero Text Animation ---
    const heroText = document.querySelector('.hero-text');
    setTimeout(() => {
            heroText.classList.add('visible');
     }, 100); // Slight delay for hero text

     // ---- Scroll Animation ----
      const serviceCards = document.querySelectorAll('.service-card');
    let cardsShown = 0; // Track the number of cards already revealed
     function checkScroll() {
            serviceCards.forEach((card, index) => {
                const cardPosition = card.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                  if (cardPosition < screenHeight * 0.9 && index === cardsShown) {
                      card.classList.add('visible');
                      cardsShown++; // Reveal the next card only after scrolling
                  }
           });
    }
  
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check for elements in view

    // --- Dark Gradient on Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
           document.body.classList.add('scrolled');
        } else {
             document.body.classList.remove('scrolled');
       }
  });


     // --- Form Modal ---
    const openFormButton = document.getElementById('openFormButton');
    const formModal = document.getElementById('formModal');
    const closeFormButton = document.getElementById('closeFormButton');

    openFormButton.addEventListener('click', () => {
        formModal.classList.remove('hidden');
        formModal.classList.add('flex');
       document.body.style.overflow = 'hidden';
    });

    closeFormButton.addEventListener('click', () => {
        formModal.classList.add('hidden');
         formModal.classList.remove('flex');
         document.body.style.overflow = 'auto';
    });

     // -- Close Modal on Outside Click ---
       window.addEventListener('click', (event) => {
           if (event.target === formModal) {
               formModal.classList.add('hidden');
              formModal.classList.remove('flex');
              document.body.style.overflow = 'auto';
          }
     });

     // ---- Price Calculation ----
    const digitizationForm = document.getElementById('digitizationForm');
    const priceDisplay = document.getElementById('priceDisplay');
      digitizationForm.addEventListener('change', updatePrice);

    function updatePrice() {
           let basePrice = 20; 
            let additionalPrice = 0;

            const hasOCR = document.getElementById('OCR').checked;
            const organizeDocs = document.getElementById('organizeDocs').checked;
            const highRes = document.getElementById('HighRes').checked;

             if (hasOCR) {
               additionalPrice += 10;
           }

          if (organizeDocs) {
               additionalPrice += 5;
          }
            if (highRes) {
               additionalPrice += 8;
           }
        
         let totalPrice = basePrice + additionalPrice;

         priceDisplay.textContent = `CHF ${totalPrice.toFixed(2)}`;
    }

  // Prevent default form submission
    digitizationForm.addEventListener('submit', (event) => {
        event.preventDefault();
         //Here you can add further logic to send the form data.
       console.log("Form submitted!");
       console.log(new FormData(digitizationForm));
        formModal.classList.add('hidden');
        formModal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    });
});
