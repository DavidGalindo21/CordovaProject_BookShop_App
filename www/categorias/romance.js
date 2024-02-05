let padre = document.getElementById('romance');

let romance = JSON.parse(localStorage.getItem('Romance')) || [];

romance.forEach((element, index) => {
  document.getElementById('categoria').innerText = element.categoria
  padre.innerHTML += `
  <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center justify-content-center mt-3 mb-3" >
  <div class="card w-100 " style="border:none;" >
         <div class="card-header bg-transparent position-relative" style="border:none;" >
         <img src="${element.imagen}" class="card-img-top h-100" onclick="mostrarParrafo(${index})"  style="object-fit:cover;" alt="Imagen Libro">
         <p id="descripcion-${index}" class="position-absolute descripcion text-white" style="top:0;left:0;width:100%;padding:10px;background:rgba(0,0,0,.6);display:none;font-size:1.2rem;" >
                ${element.descripcion}
         </p>
         </div>
      <div class="card-body p-1 text-center">
          <div class="titulos px-3 bg-transparent" style="border-radius: 0px 0px 10px 10px;" >
          <h5 class="card-title pb-2" style="color:#27282B; font-size:1.3rem;border-bottom: 1px solid #E3E3E3;" >${element.nombre}</h5>
          <h6 style="background:#A1BBA2; color:white; font-weight:800;border-radius:5px;" class="text-center py-2 px-3" >${element.autor}</h6>
          <h6 class="" style="text-align:end;" >${element.fechaPublicacion}</h6>
          </div>
      </div>
      <div class="card-footer bg-transparent " style="border:none;" >
           <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="background:#C57D56;border:none;font-weight:bold; font-size:1.2rem;" class=" btn1 btn btn-warning w-100" onclick="editar(${index})"  >Editar</button>
          <button class="btn mt-2 mb-2 w-100 btn1 " style="background:#B9B9B9;font-weight:bold; font-size:1.2rem;" onclick="eliminar(${index})" >Eliminar</button>
      </div>
  </div>
</div>
    `;
});
function mostrarParrafo(index) {
  var parrafo = document.getElementById(`descripcion-${index}`);
  parrafo.style.display = (parrafo.style.display === 'none' || parrafo.style.display === '') ? 'block' : 'none';
}
function eliminar(index) {
  Swal.fire({
    title: "¿Estas seguro de eliminarlo?",
    showCancelButton: true,
    confirmButtonText: "Si",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Registro eliminado", "", "success");
      romance = JSON.parse(localStorage.getItem('Romance')) || [];
      romance.splice(index, 1);
      localStorage.setItem('Romance', JSON.stringify(romance));
      location.reload();
    }
  });
}
function editar(index) {
    document.getElementById('newId').value = romance[index].id;
    document.getElementById('newNombre').value = romance[index].nombre;
    document.getElementById('newAutor').value = romance[index].autor;
    document.getElementById('newCategorias').value = romance[index].categoria;
    document.getElementById('newFechaP').value = romance[index].fechaPublicacion;
    document.getElementById('newDescripcion').value = romance[index].descripcion;
}
function actualizarDatos() {

  Swal.fire({
    title: "¿Estas seguro de actualizar los datos?",
    showCancelButton: true,
    confirmButtonText: "Si",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Registro actualizado", "", "success");
      let id = document.getElementById('newId').value
      var nuevoNombre = document.getElementById('newNombre').value
      var nuevoAutor = document.getElementById('newAutor').value
      var nuevaCategoria = document.getElementById('newCategorias').value
      var nuevaFecha = document.getElementById('newFechaP').value
      var nuevaDescripcion = document.getElementById('newDescripcion').value
      var romance = JSON.parse(localStorage.getItem('Romance')) || [];
      let elementIndex = id - 1;
      romance[elementIndex].nombre = nuevoNombre;
      romance[elementIndex].autor = nuevoAutor;
      romance[elementIndex].categoria = nuevaCategoria;
      romance[elementIndex].fechaPublicacion = nuevaFecha;
      romance[elementIndex].descripcion = nuevaDescripcion;
      console.log(nuevoNombre)
    
      localStorage.setItem('Romance', JSON.stringify(romance))
      location.reload();
    }
  });

  
}



window.sr = ScrollReveal();

sr.reveal('.card', {
  duration: 1500,
  origin: 'top',
  distance: '100px'
});
sr.reveal('.btn1', {
  duration: 1000,
  origin: 'left',
  distance: '100px',
  delay: 800
});



