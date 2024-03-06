function sendEmail() {
    var name = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('mensaje').value;
    
    var mailtoLink = 'mailto:urbanreview.official@gmail.com' + '?subject=' + encodeURIComponent('Mensaje de ' + name + ' (' + email + ')') + '&body=' + encodeURIComponent(message);
    
    window.location.href = mailtoLink;
  }