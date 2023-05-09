/*
// Get the target element
const typedElement = document.querySelector('.typed');

// Get the data-typed-items attribute value
const typedItems = typedElement.getAttribute('data-typed-items').split(',');

// Set the initial index
let index = 0;

// Update the element's text every 3 seconds
setInterval(() => {
  // Update the element's text with the current item
  typedElement.textContent = typedItems[index];
  
  // Increment the index and loop back to the beginning if necessary
  index = (index + 1) % typedItems.length;
}, 2000);

*/

/*
// Get the target element
const typedElement = document.querySelector('.typed');

// Get the data-typed-items attribute value
const typedItems = typedElement.getAttribute('data-typed-items').split(',');

// Set the initial index
let index = 0;

// Set up the typing effect
let text = '';
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;

// Update the element's text every 2 seconds
setInterval(() => {
  // Check if the text has been fully typed and needs to be deleted
  if (!isDeleting && text === typedItems[index]) {
    isDeleting = true;
    typingSpeed = deletingSpeed;
  }
  
  // Update the text with the current substring
  if (isDeleting) {
    text = typedItems[index].substring(0, text.length - 1);
  } else {
    text = typedItems[index].substring(0, text.length + 1);
  }
  typedElement.textContent = text;
  
  // Check if the text has been fully deleted and needs to be typed again
  if (isDeleting && text === '') {
    isDeleting = false;
    index = (index + 1) % typedItems.length;
    typingSpeed = 10000;
  }
}, 2000);

*/

/*
// Get the target element
const typedElement = document.querySelector('.typed');

// Get the data-typed-items attribute value
const typedItems = typedElement.getAttribute('data-typed-items').split(',');

// Set the initial index and create the typed instance
let index = 0;
let typedInstance = new Typed('.typed', {
  strings: typedItems,
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 2000
});

// Remove the original content of the element
typedElement.textContent = '';

// Update the element's text every 3 seconds
setInterval(() => {
  // Get the current typed string from the instance
  let currentString = typedInstance.strings[typedInstance.currentStringIndex];
  
  // Update the element's text with the current string
  typedElement.textContent = currentString;
  
  // Increment the index and loop back to the beginning if necessary
  index = (index + 1) % typedItems.length;
  
  // Update the typed instance with the new index
  typedInstance.reset();
  typedInstance.options.strings = [typedItems[index]];
  typedInstance.start();
}, 3000);

*/

// Get the target element
const typedElement = document.querySelector('.typed');

// Get the data-typed-items attribute value
const typedItems = typedElement.getAttribute('data-typed-items').split(',');

// Set the initial index and create the typed instance
let index = 0;
let typedInstance = new Typed('.typed', {
  strings: [typedItems[index]],
  loop: false,
  typeSpeed: 100,
  backSpeed: 50,
  onStringTyped: function() {
    // Increment the index and loop back to the beginning if necessary
    index = (index + 1) % typedItems.length;

    // Set a delay before resetting and starting the Typed instance with the new string
    setTimeout(function() {
      typedInstance.strings = [typedItems[index]];
      typedInstance.reset();
      typedInstance.start();
    }, 1500); // Change the delay time to adjust the smoothness
  }
});

// Remove the original content of the element
typedElement.textContent = '';




















