    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    const dropdown = document.getElementById('dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    // Toggle menu open/close for mobile screens
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      menuToggle.textContent = navbarMenu.classList.contains('active') ? '✖' : '☰'; // Toggle icon
    });
    
    // Show dropdown on hover (for desktop screens)
    dropdown.addEventListener('mouseover', () => {
      dropdownMenu.style.display = 'block'; // Show the dropdown menu
    });
    
    dropdown.addEventListener('mouseout', () => {
      dropdownMenu.style.display = 'none'; // Hide the dropdown menu when mouse leaves
    });
    
    // Close menu when a link is clicked (for mobile screens)
    navbarMenu.addEventListener('click', (event) => {
      if (event.target.tagName === 'A' && !event.target.classList.contains('dropdown-toggle')) {
        navbarMenu.classList.remove('active');
        menuToggle.textContent = '☰'; // Reset to hamburger icon
      }
    });
    
    // Handle the click on "All Products" link (navigates to productlist.html)
    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      window.location.href = 'productlist.html'; // Navigate to the product list page
    });
    
    // Optionally, you can add an event listener to open/close dropdown for smaller screens (when clicked)
    dropdownToggle.addEventListener('click', (event) => {
      event.preventDefault();
      dropdown.classList.toggle('active');
      if (dropdown.classList.contains('active')) {
        dropdownMenu.style.display = 'block'; // Show the dropdown
      } else {
        dropdownMenu.style.display = 'none'; // Hide the dropdown
      }
    });
    // FEATURED PRODUCT SLIDER
  
    const sliderItems = document.querySelector('.slider-items');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let currentIndex = 1;
        const totalItems = sliderItems.children.length;

        const cloneStart = sliderItems.children[0].cloneNode(true);
        const cloneEnd = sliderItems.children[totalItems - 1].cloneNode(true);

        sliderItems.appendChild(cloneStart);
        sliderItems.insertBefore(cloneEnd, sliderItems.firstChild);

        const slideWidth = sliderItems.children[0].clientWidth;
        sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        const updateSlider = () => {
            sliderItems.style.transition = 'transform 0.5s ease-in-out';
            sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        };

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            updateSlider();
            if (currentIndex >= totalItems) {
                setTimeout(() => {
                    sliderItems.style.transition = 'none';
                    currentIndex = 1;
                    sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 500);
            }
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            updateSlider();
            if (currentIndex < 0) {
                setTimeout(() => {
                    sliderItems.style.transition = 'none';
                    currentIndex = totalItems - 2;
                    sliderItems.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }, 500);
            }
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