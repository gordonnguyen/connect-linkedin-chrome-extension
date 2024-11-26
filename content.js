// content.js
function clickConnectButton() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      if (button.innerText.includes('Connect')) {
        button.click();
        console.log('Clicked Connect button');
      }
    });
  }
  
  // Run the function when the script is injected
  clickConnectButton();