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
    const cardContainer = document.querySelector('.card-container');
    const serviceCards = document.querySelectorAll('.service-card');
    let currentCard = 0;
    let serviceSectionVisible = false;
    let isScrolling = false;

    function showCard(index) {
        serviceCards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
                card.classList.remove('disappear');
                gsap.to(card, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
            } else {
                card.classList.remove('active');
               if (i < index) {
                    card.classList.add('disappear');
                    gsap.to(card, { opacity: 0, y: -50, duration: 0.3, ease: "power1.in" });
                 } else {
                     card.classList.remove('disappear')
                      gsap.to(card, { opacity: 0, y: 50, duration: 0.3, ease: "power1.in" });
                }
            }
        });
    }
   function updateHeroTextVisibility(){
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
    }

    function handleScroll() {
          updateHeroTextVisibility()
        let scrollPos = cardContainer.scrollTop;
           let closestCard = 0;
            let minDistance = Infinity;
           serviceCards.forEach((card,index)=>{
               const cardTop = card.offsetTop -  (cardContainer.offsetHeight - card.offsetHeight) / 2;
                const distance = Math.abs(cardTop - scrollPos);
                 if(distance < minDistance){
                      minDistance = distance;
                      closestCard = index;
                   }
           });
         if(closestCard !== currentCard){
            currentCard = closestCard
               showCard(currentCard);
           }
    }

    cardContainer.addEventListener('scroll', handleScroll);

     updateHeroTextVisibility();
    showCard(0);
   });
