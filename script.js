document.addEventListener('DOMContentLoaded', function() {
    // --- Hero Text Animation ---
    const heroText = document.querySelector('.hero-text');
    const mouseAnimation = document.querySelector('.mouse-animation');
    const serviceSection = document.querySelector('.service-section');
    setTimeout(() => {
        heroText.classList.add('visible');
        mouseAnimation.classList.add('visible');
    }, 100); // Slight delay for hero text

    // ---- Scroll Animation ----
    const serviceCards = document.querySelectorAll('.service-card');
    let currentCard = 0;
    let cardInView = false;
    let initialScroll = true; // Flag to track initial scroll
    let serviceSectionVisible = false; // Flag to track if the service section is visible

    function showCard() {
        serviceCards.forEach((card, index) => {
            if (index === currentCard) {
                card.classList.add('active');
                card.classList.remove('disappear')
            } else {
                card.classList.remove('active');
                if (index < currentCard) {
                    card.classList.add('disappear');
                } else {
                    card.classList.remove('disappear');
                }
            }
        });
    }

    function cardIsVisible() {
        const cardPosition = serviceCards[currentCard].getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        return cardPosition < screenHeight * 0.7 && cardPosition > screenHeight * 0.1;
    }


    function nextCard() {
        if (currentCard < serviceCards.length - 1) {
            currentCard++;
            showCard();
        }
    }

    function previousCard() {
        if (currentCard > 0) {
            currentCard--;
            showCard();
        }
    }


    function handleScroll() {
          const serviceSectionTop = serviceSection.getBoundingClientRect().top;

          if (serviceSectionTop < window.innerHeight/2) {
            if (!serviceSectionVisible) {
                heroText.classList.add('hidden');
                mouseAnimation.classList.remove('visible');
                serviceSectionVisible = true;
            }
        } else {
            if (serviceSectionVisible) {
                heroText.classList.remove('hidden');
                mouseAnimation.classList.add('visible');
                serviceSectionVisible = false;
            }
        }
      
         if (initialScroll) {
            if (cardIsVisible()) {
                cardInView = true;
                initialScroll = false;

            }
        } else {
             if (cardIsVisible()){
                  cardInView = true;
            }
          else{
                if (cardInView === true) {
                    if(serviceCards[currentCard].getBoundingClientRect().top < window.innerHeight * 0.1){
                            nextCard();
                        }
                    else{
                         previousCard();
                        }
                   cardInView = false;
               }
           }
       }
    }

    window.addEventListener('scroll', handleScroll);
     showCard(); // Initial check for elements in view


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
