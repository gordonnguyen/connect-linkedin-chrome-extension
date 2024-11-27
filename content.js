// Set polling rate to check if the element exist
const pollingInterval = 5000; // 5 seconds in milliseconds
const maxPollingDuration = 30000; // 30 seconds in milliseconds

// Async function to click button based on text
async function Button(text) {
  const startTime = Date.now(); // Record the start time
  console.log('button func');
  return new Promise((resolve, reject) => {
    const clickButton = () => {
      try {
        console.log('Checking for button with text:', text);
        const buttons = document.querySelectorAll('button');

        const isButtonFound = () => {
          console.log('Loop start');
          for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            
            if (button.innerText.includes(text)) {
              //if(text == 'Connect') {button.click();}      // For debug
              button.click();
              console.log(button);
              console.log('Clicked button', text);
              resolve(true)
              return;  // Exit the loop once the button is found
            }
          }
        };

        // Return if button is clicked
        if (isButtonFound()) {
          //return;
        }
        console.log('Check not found');

        // Check polling
        const elapsedTime = Date.now() - startTime;
          if (elapsedTime < maxPollingDuration) {
              return setTimeout(clickButton, pollingInterval); // Schedule next request
          } else {
              console.log('Maximum polling duration reached. Stopping polling.');
              reject(new Error('Polling timed out without receiving success response.'));
          }

      }
      // Catch error if unsuccessful
      catch (error) {
        console.error('Button not found yet. Retrying...', error);
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < maxPollingDuration) {
            setTimeout(clickButton, pollingInterval); // Schedule next request
        } else {
            console.log('Maximum polling duration reached. Stopping polling.');
            reject(new Error('Polling timed out due to repeated errors.'));
        }
      }
    }

    clickButton();
  });
}

// Main program
// to click "Connect" then "Send" buttons to complete
(async () => {
    if (await Button('Connect')) {
      if(await Button('Send')) {
        console.log('Operation succeeded');
        window.close()
      }
    }
    else {
      alert('Unable to complete!')
    }
    
}
)();