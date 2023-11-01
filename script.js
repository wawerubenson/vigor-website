


(() => {

    // Get the header element
  const header = document.querySelector('.main-header');
  
  // Get the offset where the header should become sticky
  const stickyOffset = header.offsetTop + header.offsetHeight;
  
  // Function to handle scrolling and make the header sticky
  function handleScroll() {
      if (window.pageYOffset >= stickyOffset) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  }
  
  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);

})();