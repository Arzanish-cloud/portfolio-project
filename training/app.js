// JavaScript code to create and append an iframe dynamically
function createIframe() {
  var div = document.createElement('div');
  var iframe = document.createElement('iframe');
  div.appendChild(iframe); // Append iframe to the div

  // Set attributes for styling (optional)
  iframe.width = '400';
  iframe.height = '500';
  iframe.frameBorder = '0';

  iframe.src = 'iframe.html';

  div.style.position = 'fixed';
  div.style.bottom = '10px';
  div.style.zIndex = '999';
  div.style.right = '10px';

  return div; // Return the div element containing the iframe
}

// Append the div (containing the iframe) to the body of the document
document.body.appendChild(createIframe());
