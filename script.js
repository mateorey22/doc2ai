document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('heroTitle');
    const mouseAnim = document.getElementById('mouseAnim');
    const aboutModal = document.getElementById('aboutModal');
    const contactModal = document.getElementById('contactModal');
    const formModal = document.getElementById('formModal');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const requestBtn = document.getElementById('requestBtn');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    const digitizationForm = document.getElementById('digitizationForm');
    const estimatedPriceDisplay = document.getElementById('estimatedPrice');
    const documentTypeSelect = document.getElementById('documentType');
    const transmissionModeSelect = document.getElementById('transmissionMode');
    const ocrOptionCheckbox = document.getElementById('ocrOption');
    const iaOptionCheckbox = document.getElementById('iaOption');

    // Animation
    gsap.to(heroTitle, {opacity: 1, duration: 1, delay: 0.5});
    setTimeout(() => {
        gsap.to(mouseAnim, {opacity: 1, y: 10, duration: 1});
    }, 1000);


    // Modal Functions
    function openModal(modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
       modal.classList.add('hidden');
       document.body.style.overflow = '';
      window.scrollTo(0, 0);
    }


    // Button Event Listeners
    aboutBtn.addEventListener('click', () => openModal(aboutModal));
    contactBtn.addEventListener('click', () => openModal(contactModal));
    requestBtn.addEventListener('click', () => openModal(formModal));

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
             closeModal(modal);
        });
    });

    function updatePrice() {
        let price = 20;

        if (documentTypeSelect.value === 'contrat') price += 10;
         if (documentTypeSelect.value === 'rapport') price += 15;


        if (transmissionModeSelect.value === 'postal') price += 10;
        if (ocrOptionCheckbox.checked) price += 5;
         if (iaOptionCheckbox.checked) price += 10;
        estimatedPriceDisplay.textContent = price + " CHF";
    }

    documentTypeSelect.addEventListener('change', updatePrice);
    transmissionModeSelect.addEventListener('change', updatePrice);
    ocrOptionCheckbox.addEventListener('change', updatePrice);
    iaOptionCheckbox.addEventListener('change', updatePrice);

     digitizationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Votre demande a bien été soumise!');
           closeModal(formModal);
        });
     updatePrice();
});
