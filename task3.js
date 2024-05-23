document.addEventListener('DOMContentLoaded', function () {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      validateForm();
    });
  
    function validateForm() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const linkedin = document.getElementById('linkedin').value;
      const github = document.getElementById('github').value;
  
      if (name === '' || email === '') {
        alert('Please fill in all required fields.');
        return;
      }
  
      // Simple email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Optional URL validation regex
      const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (linkedin && !urlRegex.test(linkedin)) {
        alert('Please enter a valid LinkedIn profile URL.');
        return;
      }
  
      if (github && !urlRegex.test(github)) {
        alert('Please enter a valid GitHub profile URL.');
        return;
      }
  
      document.getElementById('formFeedback').classList.remove('hidden');
      form.reset();
    }
  
    // Interactive menu (simple example)
    const menuItems = document.querySelectorAll('#menu li a');
    menuItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        alert('You clicked on ' + this.textContent);
      });
    });
  
    // Dynamic content update example
    setTimeout(() => {
      const dynamicContent = document.createElement('p');
      dynamicContent.textContent = 'This is dynamically added content!';
      document.querySelector('.content').appendChild(dynamicContent);
    }, 3000);
  });
  
