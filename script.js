  let currentRadio = 1; 
  const intervalDuration = 5000; 
  function changeSlide() {
    currentRadio++; 
    if (currentRadio > 4) {
      currentRadio = 1; 
    }
    document.getElementById(`radio-${currentRadio}`).checked = true; 
  }

  setInterval(changeSlide, intervalDuration);

