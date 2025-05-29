 

document.querySelectorAll('#desktopNav > div > button').forEach(button => {
    const dropdown = button.nextElementSibling;
    button.addEventListener('mouseenter', () => {
      closeAllDesktopDropdowns();
      dropdown.classList.add('show');
    });
    button.parentElement.addEventListener('mouseleave', () => {
      dropdown.classList.remove('show');
    });
  });

  function closeAllDesktopDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dd => dd.classList.remove('show'));
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  

  document.querySelectorAll('.mobileDropdownBtn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isOpen = content.classList.contains('hidden');
      content.classList.toggle('hidden');
      button.querySelector('svg').classList.toggle('rotate-180');
    });
  });

  // Your function changepage (replace with your actual code)
  function changepage() {
  window.location.href = "contact.html";
}
