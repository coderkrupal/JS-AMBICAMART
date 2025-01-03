const text = "Trusted electronics, delivered with excellence.";
const typingTextElement = document.getElementById("typing-text");

let index = 0;

function typeSentence() {
  if (index < text.length) {
    typingTextElement.textContent += text[index];
    index++;
    setTimeout(typeSentence, 100); // Typing speed
  } else {
    setTimeout(eraseSentence, 1000); 
  }
}

function eraseSentence() {
  if (index > 0) {
    typingTextElement.textContent = text.substring(0, index - 1);
    index--;
    setTimeout(eraseSentence, 50); 
  } else {
    setTimeout(typeSentence, 500); 
  }
}


typeSentence();

document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("product").value;
    if (query) {
        const googleImageSearchUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
        window.open(googleImageSearchUrl, "_blank"); // Open the search in a new tab
    } else {
        alert("Please enter a product name to search.");
    }
});