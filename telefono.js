
$(window).on('load', function () {
  $('#offcanvasBottom').offcanvas('show');
});

mostrarContacto();

function allStorage() {
  var contactos = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    contactos.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return contactos;
}

function mostrarContacto() {
  let contactoSeleccionado = localStorage.getItem('contactoSeleccionado');
  let contacto = localStorage.getItem(contactoSeleccionado);
  let devolucionDeContacto = JSON.parse(contacto);
  let node = document.getElementById('output');
  console.log(devolucionDeContacto.telefono);
  const textnode = document.createTextNode(devolucionDeContacto.telefono);
  node.appendChild(textnode);
}

function llamada() {
  var count = 0;
  $(".digit").on('click', function () {
    let num = ($(this).clone().children().remove().end().text());
    if (count < 11) {
      $("#output").append('<span>' + num.trim() + '</span>');

      count++
    }
    $('.fa-long-arrow-left').on('click', function () {
      $('#output span:last-child').remove();
      count--;
    })
  })
}

const llamar = document.getElementById('llamar');
llamar.addEventListener('click', () => {
  let sonido = new Audio('../sounds/llamada.mp3');
  let contactoSeleccionado = localStorage.getItem('contactoSeleccionado');
  let contacto = localStorage.getItem(contactoSeleccionado);
  let devolucionDeContacto = JSON.parse(contacto);
  sonido.play();
  let timerInterval
  Swal.fire({
    title: 'Llamando al ' + devolucionDeContacto.telefono,
    timer: 13400,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
      Swal.fire({
        title: 'El número ' + devolucionDeContacto.telefono + ' no se encuentra disponible'
      });
    }
  });
});


