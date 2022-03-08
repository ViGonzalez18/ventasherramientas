import React from 'react';
import herramientas from './heramientas.jpg';
import principal from './principal.jpg';


const Card = () => {
  return (
    <div className="App">
      <header className="">
       

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
       <img src={herramientas} alt="" width="30" height="24" class="d-inline-block align-text-top"/> 
      Siempre Herramientas
    </a>
    </div>
    <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Mi cuenta</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Favoritos</a>
        </li>
       
      </ul>
      </div>
     </div>
      </nav>
      </header>
      <div>
      <img src={principal} alt="" width="1000" height="500" class="d-inline-block align-text-top"/> 
      </div>
      <div>
      <div class="card-group">
  <div class="card">
  <img src={principal} alt="" width="500" height="200" class="d-inline-block align-text-top"/> 
    <div class="card-body">
      <h5 class="card-title">Electricas</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <img src={principal} alt="" width="500" height="200" class="d-inline-block align-text-top"/> 
    <div class="card-body">
      <h5 class="card-title">Manuales</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <img src={principal} alt="" width="500" height="200" class="d-inline-block align-text-top"/> 
    <div class="card-body">
      <h5 class="card-title">Inalambricos</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
      </div>
    </div>
    
  )
}

export default Card