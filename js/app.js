$(document).ready(function () {

	const modal = $('#Modal')[0]
	if (modal) {

		modal.addEventListener('show.bs.modal', event => {
		    const button = event.relatedTarget
		    const recipient = button.getAttribute('data-titulo')

		    $('.modal-title').text(recipient)
		})
	}

});


function SwalDelete(id, nombre, gl_url) {
  Swal.fire({
    title:
      "¿Esta seguro que quiere eliminar " + nombre + " ?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#28a745",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Confirmar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location = gl_url + id;
    }
  });
}

function SwalMensaje(title, text, icon, url) {
    swal.fire({
	  title: title,
	  text: text,
	  icon: icon,
	  confirmButtonText: 'OK',
	  timer: 2500,
	  timerProgressBar: true
	}).then((result) => {

		//window.location =  url
		window.location.reload();

	});
}

function crear(){

    SwalMensaje('Guardada', 'Se ha creado.', 'success');
	
}