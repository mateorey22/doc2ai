document.addEventListener('DOMContentLoaded', function() {
      const toggleButton = document.querySelector('nav button');
      const menu = document.querySelector('nav ul + div ul');
      let isOpen = false;

      if (toggleButton){
          toggleButton.addEventListener('click', function() {
            isOpen = !isOpen;
            if (menu){
                menu.style.display = isOpen ? 'block' : 'none';
            }
           });
      }
});
