document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    const heroText = document.getElementById('heroText');
    gsap.to(heroText, { opacity: 1, y: 0, duration: 1, delay: 0.2 });

    const mouseAnimation = document.querySelector('.mouse-animation');
    gsap.to(mouseAnimation, { opacity: 1, duration: 1, delay: 1 });

    // Modal Handling
    const modalButtons = document.querySelectorAll('.modal-button');
    const openFormButton = document.getElementById('openFormButton');
    const formModal = document.getElementById('formModal');

    // Function to Open Modal
    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

       // Function to Close Modal
    function closeModal(modalElement) {
        modalElement.style.display = 'none';
        window.scrollTo(0, 0);
        document.body.style.overflow = 'auto';
    }


    // Open modals by data-modal-target attribute
    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal-target');
            openModal(modalId);
        });
    });

    openFormButton.addEventListener('click', () => openModal('formModal'));

    // Close all modals when clicking close buttons
    document.addEventListener('click', (event) => {
         if (event.target.classList.contains('closeModalButton')) {
            const modal = event.target.closest('.modal');
               if(modal)
              {
                closeModal(modal);
              }

        }
        if (event.target.id === 'closeFormButton')
        {
                closeModal(formModal);

        }

    });

    // Form Price Calculation
    const documentType = document.getElementById('documentType');
    const transmissionMode = document.getElementById('transmissionMode');
    const outputFormat = document.getElementById('outputFormat');
    const documentOrganization = document.getElementById('documentOrganization');
    const ocr = document.getElementById('ocr');
    const highResolution = document.getElementById('highResolution');
    const priceDisplay = document.getElementById('priceDisplay');

    function calculatePrice() {
        let price = 0;
        if (documentType.value === 'rapport') price += 10;
        if (transmissionMode.value === 'physique') price += 5;
        if (outputFormat.value === 'pdf') price += 2;
        if (documentOrganization.checked) price += 20;
        if (ocr.checked) price += 20;
        if (highResolution.checked) price += 10;

        priceDisplay.textContent = `Estimation du prix: ${price} CHF`;
    }

    [documentType, transmissionMode, outputFormat, documentOrganization, ocr, highResolution]
        .forEach(el => el.addEventListener('change', calculatePrice));


    // Form Submission
    const form = document.getElementById('digitizationForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulaire soumis (simulation)');
        closeModal(formModal);
    });
});
