document.getElementById('contactForm').addEventListener('submit', function (event) {

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();


  if (!name || !email || !subject || !message) {
    event.preventDefault(); 
    alert('Please Fill Out All Fields Before Submitting.');
  }
});
