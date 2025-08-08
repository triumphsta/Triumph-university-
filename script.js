document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.dropdown-button');
  const dropdown = document.querySelector('.dropdown-content');
  button.addEventListener('click', function() {
    dropdown.classList.toggle('show');
  });
  // Optional: close dropdown when clicking outside
  window.addEventListener('click', function(e) {
    if (!button.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
});


  function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }



