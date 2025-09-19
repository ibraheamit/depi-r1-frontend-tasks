document.addEventListener('DOMContentLoaded', function () {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabs = document.querySelectorAll('.tab');
  
    tabLinks.forEach(link => {
      link.addEventListener('click', function () {
        // Remove active class from all tabs and tab links
        tabLinks.forEach(link => link.classList.remove('active'));
        tabs.forEach(tab => tab.classList.remove('active'));
  
        // Add active class to the clicked tab and the corresponding tab content
        this.classList.add('active');
        const target = document.getElementById(this.dataset.target);
        target.classList.add('active');
      });
    });
  });
  