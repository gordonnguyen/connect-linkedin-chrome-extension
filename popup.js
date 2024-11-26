document.getElementById('startButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    
    if (fileInput.files.length === 0) {
      alert('Please upload a file.');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      const urls = reader.result.split('\n').map(url => url.trim()).filter(Boolean);
      chrome.runtime.sendMessage({ action: 'processUrls', urls }, (response) => {
        console.log(response.status);
      });
    };
  
    reader.readAsText(file);
  });