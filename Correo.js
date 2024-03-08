function sendEmail() {
  const d = document;

  const name = d.getElementById('nombre').value;
  const email = d.getElementById('email').value;
  const message = d.getElementById('mensaje').value;

  // Expresión regular para validar el formato del correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name && email && message) {
    // Verificar si el correo electrónico es válido
    if (emailRegex.test(email)) {
      let mailtoLink =
        'mailto:urbanreview.official@gmail.com' +
        '?subject=' +
        encodeURIComponent('Mensaje de ' + name + ' (' + email + ')') +
        '&body=' +
        encodeURIComponent(message);

      window.location.href = mailtoLink;

      d.getElementById('nombre').value = '';
      d.getElementById('email').value = '';
      d.getElementById('mensaje').value = '';
    } else {
      // Alerta si el correo electrónico no es válido
      alert("Por favor, introduzca una dirección de correo electrónico válida.");
    }
  } else {
    // Alerta si no se completan todos los campos
    alert("Por favor, complete todos los campos.");
  }
}
