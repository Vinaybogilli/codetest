const servicesBtn = document.getElementById('servicesBtn');
const servicesDropdown = document.getElementById('servicesDropdown');

// Show the dropdown when hovering over the Services button
servicesBtn.addEventListener('mouseenter', () => {
  servicesDropdown.classList.add('show');
});

// Hide the dropdown when the mouse leaves the Services button
servicesBtn.addEventListener('mouseleave', () => {
  servicesDropdown.classList.remove('show');
});
