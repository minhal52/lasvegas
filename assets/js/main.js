    // // Mobile menu toggle

    // Menu toggle for mobile screens
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

// Toggle menu open/close
menuToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  menuToggle.textContent = navbarMenu.classList.contains('active') ? '✖' : '☰'; // Toggle icon
});

// Close menu when a link is clicked (for mobile screens)
navbarMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navbarMenu.classList.remove('active');
    menuToggle.textContent = '☰'; // Reset to hamburger icon
  }
});

  // FEATURED PRODUCT SLIDER
  const sliderItems = document.querySelector('.slider-items');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  let currentIndex = 1; // Start from the first actual item
  const totalItems = sliderItems.children.length;
  
  // Clone the first and last elements for looping
  const cloneStart = sliderItems.children[0].cloneNode(true);
  const cloneEnd = sliderItems.children[totalItems - 1].cloneNode(true);
  
  sliderItems.appendChild(cloneStart); // Add a clone of the first item at the end
  sliderItems.insertBefore(cloneEnd, sliderItems.firstChild); // Add a clone of the last item at the beginning
  
  const slideWidth = sliderItems.children[0].clientWidth;
  
  // Adjust initial position to show the first actual item
  sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  
  // Function to update the slider's position
  const updateSlider = () => {
    sliderItems.style.transition = 'transform 0.5s ease-in-out';
    sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  };
  
  // Handle "Next" button click
  nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
  
    // Reset to the first item when reaching the clone of the first item
    if (currentIndex === totalItems - 1) {
      setTimeout(() => {
        sliderItems.style.transition = 'none';
        currentIndex = 1; // Jump back to the first actual item
        sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }, 500); // Matches the transition duration
    }
  });
  
  // Handle "Previous" button click
  prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
  
    // Reset to the last item when reaching the clone of the last item
    if (currentIndex === 0) {
      setTimeout(() => {
        sliderItems.style.transition = 'none';
        currentIndex = totalItems - 2; // Jump back to the last actual item
        sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
      }, 500); // Matches the transition duration
    }
  });
  
  // Adjust the slider on window resize
  window.addEventListener('resize', () => {
    const newSlideWidth = sliderItems.children[0].clientWidth;
    sliderItems.style.transition = 'none'; // Temporarily disable transitions
    sliderItems.style.transform = `translateX(-${currentIndex * newSlideWidth}px)`;
  });


  
 
        // contact form

        function sendPrefilledEmail() {
            // Get form input values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
          
            // Target recipient email
            const recipientEmail = "Blanca@lasvegasvending.net";
          
            // Construct the email subject and body
            const subject = `New Contact Form Submission from ${name}`;
            const body = `Hello,
          
          You have received a new message from your contact form.
          
          Name: ${name}
          Email: ${email}
          
          Message:
          ${message}
          
          Thank you!`;
          
            // Construct the mailto link
            const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
              subject
            )}&body=${encodeURIComponent(body)}`;
          
            // Open the mailto link
            window.location.href = mailtoLink;
          
            // Prevent the default form submission
            return false;
          }