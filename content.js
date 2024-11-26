let buttonExist = setInterval(() => {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
  
    if (button.innerText.includes('Connect')) {
      button.click();
      console.log(button);
      console.log('Clicked Connect button');
      clearInterval(buttonExist);
      break;  // Exit the loop once the button is found
    }
  }
}, 100);

// Time out after 30 seconds
setTimeout(() => {
  clearInterval(buttonExist);
  console.log('Program stopped')
}, 30000);