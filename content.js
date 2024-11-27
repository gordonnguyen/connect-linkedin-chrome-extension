// Set polling rate to check if the element exist
const pollingInterval = 5000; // 5 seconds in milliseconds
const maxPollingDuration = 30000; // 30 seconds in milliseconds

const startTime = Date.now(); // Record the start time

const clickButton = async (text) => {
  try {
    console.log('Checking for button with text:', text);
    const buttons = document.querySelectorAll('button');

    const isButtonFound = () => {
      console.log('Loop start');
      for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        
        if (button.innerText.includes(text)) {
          if(text == 'Connect') {button.click();}
          console.log(button);
          console.log('Clicked button', text);
          clearInterval(clickButton);
          return true;  // Exit the loop once the button is found
        }
      }
    };

    if (isButtonFound()) {
      return true;
    }
    console.log('Check not found');


    // Check polling
    const elapsedTime = Date.now() - startTime;
      if (elapsedTime < maxPollingDuration) {
          setTimeout(() => clickButton(text), pollingInterval); // Schedule next request
      } else {
          console.log('Maximum polling duration reached. Stopping polling.');
      }

  }
  catch (error) {
    console.error('Button not found yet. Retrying...', error);
    const elapsedTime = Date.now() - startTime;

    if (elapsedTime < maxPollingDuration) {
        setTimeout(() => clickButton(text), pollingInterval); // Schedule next request
    } else {
        console.log('Maximum polling duration reached. Stopping polling.');
    }
  }
}

if (clickButton('Connect')) {
  clickButton('Send');
};