 const video = document.getElementById('video');
 const button = document.getElementById('btnTakePic');
 const pic = document.getElementById('take-picture');
 let stream, track;
 
 // Ask for permission to access the camera
 navigator.mediaDevices.getUserMedia({ video: true })
   .then(function(s) {
     stream = s;
     video.srcObject = stream;
     track = stream.getVideoTracks()[0];
   })
   .catch(function(error) {
     console.error('Failed to get user media', error);
   });
 
 // Add a click event listener to the button
 button.addEventListener('click', function() {
   const canvas = document.createElement('canvas');
   const context = canvas.getContext('2d');
 
   // Set the canvas dimensions to match the video element
   canvas.width = video.videoWidth;
   canvas.height = video.videoHeight;
 
   // Draw the current video frame onto the canvas
   context.drawImage(video, 0, 0, canvas.width, canvas.height);
 
   // Convert the canvas data to an image
   const image = new Image();
   image.src = canvas.toDataURL('image/png');
   
 
   // Append the captured image to the container element
   video.appendChild(image);
 
   // Append the container element to the document body
   //document.body.appendChild(video);
 
   // Stop the camera stream and track
   video.pause();
   stream.getTracks().forEach(track => track.stop());
 });
 
 