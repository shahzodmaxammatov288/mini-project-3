// Selectors
const textContainer  = document.getElementById("text-container");
const textContent = document.getElementById("text-content");
const countInfo = document.querySelector('.count-info');

// Event listener && Functions

let limit = 50;

countInfo.innerText = 0 + '/' + limit;

textContent.addEventListener('input', function() {
  
  let textLength = textContent.value.length;
  countInfo.innerText = textLength + '/' + limit;
  
  if(textLength > limit) {
    textContainer.style.borderColor = "red";
    countInfo.style.color = "red"; 
  } else {
    textContainer.style.borderColor = "rgb(35, 37, 35)";
    countInfo.style.color = "rgb(35, 37, 35)"; 
  }
  
});

