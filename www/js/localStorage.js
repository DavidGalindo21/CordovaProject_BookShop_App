let id = 0;
 function agregar() {
     // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var autor = document.getElementById('autor').value;
    var categoria = document.getElementById('categorias').value;
    var fechaPublicacion = document.getElementById('fechaP').value;
    var imagenInput = document.getElementById('imagen');
    var descripcion = document.getElementById('descripcion').value;
    // Validar que los campos no estén vacíos (puedes agregar más validaciones según tus necesidades)
    if (!nombre || !autor || !categoria || !fechaPublicacion || !imagenInput.files[0] || !descripcion) {
        Swal.fire({
            title: 'Error!',
            text: 'Falta algún campo por rellenar',
            icon: 'error',
            confirmButtonText: 'OK'
          })
        return;
    }
    id = id + 1;
    // Leer la imagen como base64
    var reader = new FileReader();
    reader.onload = function (e) {
        var imagenBase64 = e.target.result;
        console.log(e.target)
        // Crear un objeto con los datos del formulario
        var libro = {
            id: id,
            nombre: nombre,
            autor: autor,
            categoria: categoria,
            fechaPublicacion: fechaPublicacion,
            imagen: imagenBase64,
            descripcion: descripcion
        };

        // Obtener el array de libros del localStorage (si existe)
        var libros = JSON.parse(localStorage.getItem(categoria)) || [];

        // Agregar el nuevo libro al array
        libros.push(libro);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem(categoria, JSON.stringify(libros));

        // Opcional: Limpiar los campos del formulario después de agregar el libro
        document.getElementById('nombre').value = '';
        document.getElementById('autor').value = '';
        document.getElementById('categorias').value = '';
        document.getElementById('fechaP').value = '';
        document.getElementById('imagen').value = '';
        document.getElementById('descripcion').value = '';

        Swal.fire({
            title: 'Registrado',
            text: 'Registro de libro exitoso',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    };

    reader.readAsDataURL(imagenInput.files[0]);
}