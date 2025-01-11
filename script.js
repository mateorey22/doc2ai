document.addEventListener('DOMContentLoaded', function() {
    // Hero text fade-in animation
    const heroText = document.getElementById('heroText');
    gsap.to(heroText, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay:0.2
    });
    // Mouse animation fade-in
    const mouseAnimation = document.querySelector('.mouse-animation');
    gsap.to(mouseAnimation, {
        opacity: 1,
        duration: 1,
       delay: 1
   });
    // Modal control
    const openFormButton = document.getElementById('openFormButton');
    const closeFormButton = document.getElementById('closeFormButton');
    const formModal = document.getElementById('formModal');

    openFormButton.addEventListener('click', () => {
       formModal.style.display = 'flex';
   });
   closeFormButton.addEventListener('click', () => {
        formModal.style.display = 'none';
    });
    // Form price calculation
    const documentType = document.getElementById('documentType');
    const transmissionMode = document.getElementById('transmissionMode');
    const outputFormat = document.getElementById('outputFormat');
    const documentOrganization = document.getElementById('documentOrganization');
    const ocr = document.getElementById('ocr');
    const highResolution = document.getElementById('highResolution');
    const priceDisplay = document.getElementById('priceDisplay');
    function calculatePrice() {
       let price = 0;
       const documentTypeVal = documentType.value;
       const transmissionModeVal = transmissionMode.value;
       const outputFormatVal = outputFormat.value;
       if (documentTypeVal === 'rapport') {
          price += 10;
       }
       if (transmissionModeVal === 'physique') {
           price += 5;
       }
       if (outputFormatVal === 'pdf') {
         price += 2;
       }
      if(documentOrganization.checked){
           price += 20;
       }
       if (ocr.checked) {
          price += 20;
       }
      if(highResolution.checked){
           price += 10
       }
        priceDisplay.textContent = `Estimation du prix: ${price} CHF`;
    }
    documentType.addEventListener('change', calculatePrice);
     transmissionMode.addEventListener('change', calculatePrice);
      outputFormat.addEventListener('change', calculatePrice);
     documentOrganization.addEventListener('change', calculatePrice);
    ocr.addEventListener('change', calculatePrice);
    highResolution.addEventListener('change', calculatePrice);

    // Prevent form submit
     const form = document.getElementById('digitizationForm');
    form.addEventListener('submit', (event) => {
         event.preventDefault();
         alert('Formulaire soumis (simulation)');
          formModal.style.display = 'none';
    });
 });
