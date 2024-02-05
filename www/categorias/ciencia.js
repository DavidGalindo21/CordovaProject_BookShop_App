let padre = document.getElementById('ciencia');

let ciencia = JSON.parse(localStorage.getItem('CienciaFiccion')) || [];

ciencia.forEach((element, index) => {
  document.getElementById('categoria').innerText = element.categoria
  padre.innerHTML += `
  <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center justify-content-center mt-3 mb-3" >
  <div class="card w-100" style="border:none;" >
         <div class="card-header bg-transparent position-relative" style="border:none;" >
         <img src="${element.imagen}" class="card-img-top h-100" onclick="mostrarParrafo(${index})"  style="object-fit:cover;" alt="Imagen Libro">
         <p id="descripcion-${index}" class="position-absolute" style="top:0;left:0;width:100%;padding:10px;background:rgba(255,255,255,.8);display:none;" >
                ${element.descripcion}
         </p>
         </div>
      <div class="card-body p-1   ">
          <div class="titulos px-3" style="border-radius: 0px 0px 10px 10px;background:#fff;text-align:center;" >
          <h5 class="card-title pb-2 pt-3" style="color:#27282B; font-size:1.3rem;border-bottom: 1px solid #E3E3E3;" >${element.nombre}</h5>
          <h6 style="background:#A1BBA2; width:50%;border-radius:5px;margin:auto;" class="py-2 px-3" >${element.autor}</h6>
          <h6  class="text-center py-2 px-3  pb-3" >${element.fechaPublicacion}</h6>
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
      ciencia = JSON.parse(localStorage.getItem('CienciaFiccion')) || [];
      ciencia.splice(index, 1);
      localStorage.setItem('CienciaFiccion', JSON.stringify(ciencia));
      location.reload();
    }
  });
}
function editar(index) {
  document.getElementById('newId').value = ciencia[index].id;
  document.getElementById('newNombre').value = ciencia[index].nombre;
  document.getElementById('newAutor').value = ciencia[index].autor;
  document.getElementById('newCategorias').value = ciencia[index].categoria;
  document.getElementById('newFechaP').value = ciencia[index].fechaPublicacion;
  document.getElementById('newDescripcion').value = ciencia[index].descripcion;
}
function actualizarDatos(){
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
      var ciencia = JSON.parse(localStorage.getItem('CienciaFiccion')) || [];
      let elementIndex = id - 1;
      ciencia[elementIndex].nombre = nuevoNombre;
      ciencia[elementIndex].autor = nuevoAutor;
      ciencia[elementIndex].categoria = nuevaCategoria;
      ciencia[elementIndex].fechaPublicacion = nuevaFecha;
      ciencia[elementIndex].descripcion = nuevaDescripcion;
      console.log(nuevoNombre)
    
      localStorage.setItem('CienciaFiccion', JSON.stringify(ciencia))
      location.reload();
    }
  });

}
window.sr = ScrollReveal();

sr.reveal('.card',{
    duration: 1500,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.btn1',{
  duration: 1000,
  origin: 'left',
  distance: '100px',
  delay: 1000
});