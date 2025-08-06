// console.log("Hi Gbw");


document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery .image img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox .lightbox-img');
  const closeBtn = document.querySelector('.close');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');


  let currentIndex = 0;

  images.forEach((img, index) => {  
    //   console.log('image clicked', index);
      img.addEventListener('click', () => {
        console.log('image clicked', index);
        currentIndex = index;
        openLightbox(img.src);
    });
    
});


images.forEach((img) => {
    img.addEventListener('click', () => {
        console.log(img);
    })
});




function openLightbox(src) {
    console.log("openLightbox called"); // ✅ Log 1
    lightboxImg.src = src;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('show');
    console.log("lightbox.classList:", lightbox.classList); // ✅ Log 2
}


  function closeLightbox() {
    console.log('closing');
    
    lightbox.classList.remove('show');
    lightbox.classList.add('hidden');
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  }

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });

  const filterButtons = document.querySelectorAll('.filters button');
const imageElements = document.querySelectorAll('.gallery .image');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-filter');

    imageElements.forEach(image => {
      const imageCategory = image.getAttribute('data-category');

      if (category === 'all' || imageCategory === category) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  });
});

});

