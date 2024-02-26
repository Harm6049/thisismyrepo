window.addEventListener("load",function(){
  const images=['images/horse1.png','images/horse2.png','images/horse3.png',
      'images/cat1.png','images/cat2.png','images/cat3.png',
      'images/dog1.png','images/dog2.png','images/dog3.png'];
  
  const imageElements1 = document.getElementById("theme1");
  const imageElements2 = document.getElementById("theme2");
  const imageElements3 = document.getElementById("theme3");
  
  let refreshInterval = 10; // default refresh interval in seconds
  let countdownIntervalId;
  let updateCount = 0;
  let clickedImage = false;
  
  // function to update the images
  function updateImages() {
    let randomImage1 = Math.floor(Math.random()*9);
    let randomImage2 = Math.floor(Math.random()*9);
    let randomImage3 = Math.floor(Math.random()*9);
    imageElements1.src = images[randomImage1];
    imageElements2.src = images[randomImage2];
    imageElements3.src = images[randomImage3];
    if (clickedImage) {
      updateCount += 1;
      clickedImage = false;
    } else {
      updateCount += 3;
    }
    document.getElementById("update-count").textContent = "Images updated: " + updateCount;
  }
  
  // automatic refresh
  function startAutoRefresh() {
    refreshInterval = parseFloat(document.getElementById("refresh-interval").value);
    clearInterval(countdownIntervalId);
    countdownIntervalId = setInterval(function() {
      var countdownTimer = document.getElementById("countdown-timer");
      countdownTimer.textContent = refreshInterval/100;
      refreshInterval--;

      if (refreshInterval/100 < 4) {
        countdownTimer.style.backgroundColor = "red"; // Change background color to red if less than 4 seconds
      } else if (refreshInterval/100 < 8) {
        countdownTimer.style.backgroundColor = "green"; // Change background color to green if less than 8 seconds
      } else {
        countdownTimer.style.backgroundColor = "blue"; // Default background color
      }

      if (refreshInterval === -1) {
        updateImages();
        refreshInterval = parseFloat(document.getElementById("refresh-interval").value);
      }
    }, 10);
  }

  // manual refresh
  function manualRefresh() {
    clearInterval(countdownIntervalId);
    updateImages();
    startAutoRefresh();
  }
  
  // event listener for manual refresh button
  document.getElementById("manual-refresh").addEventListener("click", function() {
    manualRefresh();
  });
  
  // start the automatic refresh
  startAutoRefresh();
  
});

// function to add animation class to image
function doAnimation(event) { 
  const target = event.srcElement; 
  target.classList.remove('spin'); 
  setTimeout(() => {target.classList.add('spin');}, 0); 
  
} 

// stop the countdown timer
function myStopFunction() {
  clearInterval(countdownIntervalId);
}
