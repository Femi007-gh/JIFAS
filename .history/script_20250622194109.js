function toggleJob(button) {
    const allButtons = document.querySelectorAll('.job-title');
    const allDescriptions = document.querySelectorAll('.job-description');

    allButtons.forEach((btn, i) => {
      if (btn !== button) {
        btn.classList.remove('active');
        allDescriptions[i].style.display = 'none';
      }
    });

    const description = button.nextElementSibling;
    const isOpen = button.classList.contains('active');
    button.classList.toggle('active', !isOpen);
    description.style.display = isOpen ? 'none' : 'block';
  }