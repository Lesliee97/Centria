import {itemPersona} from '../view/itemPersona.js';
export default (data) => {
	console.log(data);
	var d = new Date();
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
"Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(months[d.getMonth()]);
  const divElem = document.createElement('div');
  const viewHome =  `
  <header>
  <section id="nav-bar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a id ="logo-centria" class="navbar-brand" href="#">
      <img  src="../src/imgs/LOGO CENTRIA.png" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fa fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li  id="centria-nosotros" class="nav-item">
          <a class="nav-link active" href="#!"><img  class="centria" src="../src/imgs/C azul_Mesa de trabajo 1.png"></a>
          <p class="texto">Nosotros</p>
                </a>
          </li>
          <li id="centria-usuarios" class="nav-item">
          <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/usuario.png"></a>
          <p class="texto">Gestion Humana</p>
          </li>
          <li id="centria-portales" class="nav-item">
          <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/laptop (2).png"></a>
          <p class="texto">Portales</p>
          </li>
          <li id="centria-salas"class="nav-item">
          <a class="nav-link" href="#!"><img class="centria" src="../src/imgs/sala.png"></a>
          <p class="texto">Salas</p>
          </li>
          <li id="centria-users" class="nav-item">
          <a  class="nav-link" href="#">
          <img  src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="centria rounded-circle z-depth-0"
            alt="avatar image" height="55">
            </a>
            <p class="texto" >Erika Gomez</p>
          </li>
          
        </ul>
      </div>
    </nav>
  </section>
</header>
<body>
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner data-interval="2000">
    <div class="carousel-item active data-interval="2000">
      <img src="../src/imgs/IMG_1318 (1).JPG" class="d-block w-100 h-60" alt="...">
    </div>
    
    <div class="carousel-item data-interval="2000">
      <img src="../src/imgs/slide3 (1).jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item data-interval="2000">
      <img src="../src/imgs/code-coder-codes-34600 (1).jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div class="contenedor-padre">

<div class="card" style="width: 25rem;">
  <img src="../src/imgs/noticia.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Hoy iniciamos nuestra participación en la Hackathon de treinta y seis horas ininterrumpidas como parte del #TalentFest2019 organizado por Laboratoria, en donde resolveremos el reto de negocio planteado de la mano de las egresadas de Laboratoria.</p>
  </div>
 
</div>
<div id="hijo-contenedor"class="google-calendar">
<iframe src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLima&amp;src=Zm5ycmJyMnBqODg1OGtwN3RkazJrdm1ib29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23336699&amp;showTz=0&amp;showCalendars=0&amp;showPrint=0&amp;showTitle=0&amp;showNav=1" style="border-width:0" width="400" height="400" frameborder="0" scrolling="no"></iframe>
</div>
  </div> <!-- end contenedor-padre -->
  
  </div>
  <div class="beneficios-div">
  <div>
   <img id="beneficios" class="img-beneficios"src="../src/imgs/Botón-Beneficios.jpg" >
  </div>
  <div>
  <img id="integridad"class="img-beneficios" src="../src/imgs/Botón-Canal-de-Integridad.jpg" >
  </div>
  <div>
  <img id ="oportunidades" class="img-beneficios" src="../src/imgs/Botón-Oportunidades-de-Desarrollo.jpg" >
  </div>
  </div>
  <div>
  <img src="../src/imgs/cumpleanos.png" alt="icono cumpleaños" class="imagenCumple">
  </div>
  <div class="contenedorPersonal">
  <label>${(months[d.getMonth()])}</label>
  <div id="contenedorPersona">
  </div>

<footer class="page-footer font-small blue">

  <!-- Copyright -->
  <div  class="text-center py-3">
  <p id="copyright">Mantente conectado</p>
  </div>
  <div class="social text-senter">
  
</div>
  <div class="footer-copyright text-center py-3"><strong>©2019 CENTRIA - TODOS LOS DERECHOS RESERVADOS </strong>
 
 
  </div>
  <!-- Copyright -->

</footer>
</body>

    `;
    divElem.innerHTML = viewHome;
  const contenedorPersonasCumpleaños = divElem.querySelector('#contenedorPersona');
  data.forEach((element) => {
	  console.log(element.Nombres);
	  console.log(element.FechaNacimiento);
	  contenedorPersonasCumpleaños.appendChild(itemPersona(element.Nombres,element.imagen));
  })
  return divElem;
  };
 
  
