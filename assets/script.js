// Small helper JS for navigation and contact form (no backend)
// Replace with your own analytics or form handling (e.g. Formspree).
document.addEventListener('DOMContentLoaded', function(){
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var msg = document.getElementById('formMsg');
      msg.textContent = 'Thanks — this demo form does not send emails. Copy the form code and connect a backend or service like Formspree.';
      form.reset();
    });
  }
});