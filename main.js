let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".project-slide");
    const dots = document.querySelectorAll(".dot");

    // Loop to hide all slides
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
        dots[i].classList.remove("active");
    });

    // Show the active slide and activate the dot
    dots[index].classList.add("active");
}

// Initialize the slideshow
function currentSlide(index) {
    if (index < 0) {
        currentIndex = 2;
    } else if (index > 2) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    showSlide(currentIndex);
}

// Function to toggle the expanded state of the card
// Function to toggle the expanded state of the card
// Function to toggle the expanded state of the card
// Function to toggle the expanded state of the card
function toggleCard(card) {
    // Get project-specific data from the card's data attributes
    var title = card.getAttribute('data-title');
    var description = card.getAttribute('data-description');
    var image = card.getAttribute('data-image');
    var slides = JSON.parse(card.getAttribute('data-slides')); // Parse the slides JSON

    // Check if the card is already expanded
    if (card.classList.contains('expanded')) {
        // Collapse it
        card.classList.remove('expanded');
        // Reset the content to the original content (image and description)
        card.innerHTML = `
            <img src="${image}" alt="${title}" class="project-image">
            <div class="project-description">
                <p>${description}</p>
            </div>
        `;
    } else {
        // Collapse all other cards before expanding this one
        var allCards = document.querySelectorAll('.project-card');
        allCards.forEach(function (otherCard) {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
                var otherImage = otherCard.getAttribute('data-image');
                var otherDescription = otherCard.getAttribute('data-description');
                otherCard.innerHTML = `
                    <img src="${otherImage}" alt="Project" class="project-image">
                    <div class="project-description">
                        <p>${otherDescription}</p>
                    </div>
                `;
            }
        });

        // Expand the clicked card
        card.classList.add('expanded');
        // Add the expanded content, including title and description
        card.innerHTML = `
            <div class="project-info">
                <h3 class="project-title">${title}</h3>
                <p class="project-description-text">${description}</p>
    
                <div class="slideshow-container">
                    <div class="slideshow-images">
                        ${slides.map(slide => `<img src="${slide}" alt="Slide">`).join('')}
                    </div>
                    <button class="slideshow-button prev-button">❮</button>
                    <button class="slideshow-button next-button">❯</button>
                </div>
    
                <a href="https://github.com/your-repository" target="_blank" class="github-link">View on GitHub</a>
            </div>
        `;

        // Initialize the slideshow for the expanded card
        startSlideshow(card.querySelector('.slideshow-container'));
    }
}

// Event listener for clicking outside the expanded card to collapse it
document.addEventListener('click', function(event) {
    var allCards = document.querySelectorAll('.project-card');
    var clickedInsideCard = false;

    // Check if the click happened inside any project card
    allCards.forEach(function(card) {
        if (card.contains(event.target)) {
            clickedInsideCard = true;
        }
    });

    // If the click was outside all project cards, collapse any expanded card
    if (!clickedInsideCard) {
        allCards.forEach(function(card) {
            card.classList.remove('expanded');
            // Reset content to the original content
            var image = card.getAttribute('data-image');
            var description = card.getAttribute('data-description');
            card.innerHTML = `
                <img src="${image}" alt="Project" class="project-image">
                <div class="project-description">
                    <p>${description}</p>
                </div>
            `;
        });
    }
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
      const isExpanded = card.classList.contains('expanded');
      // Toggle the expanded class
      card.classList.toggle('expanded', !isExpanded);
  
      // Show or hide the image based on the state
      const image = card.querySelector('.project-image');
      if (image) {
        image.style.display = isExpanded ? 'block' : 'none';
      }
    });
  });
  




