import React from 'react';
import herramientas from './heramientas.jpg';
import principal from './principal.jpg';


const Card = () => {
  return (
    <div className="App">
      <header className="">
       

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
       <img src={herramientas} alt="" width="30" height="24" className="d-inline-block align-text-top"/> 
      Siempre Herramientas
    </a>
    </div>
    <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mi cuenta</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Favoritos</a>
        </li>
       
      </ul>
      </div>
     </div>
      </nav>
      </header>
      <div>
      <img src={principal} alt="" width="1000" height="500" className="d-inline-block align-text-top"/> 
      </div>
      <div>
      <div className="card-group">
  <div className="card">
  <img src={principal} alt="" width="500" height="200" className="d-inline-block align-text-top"/> 
    <div className="card-body">
      <h5 className="card-title">Electricas</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img src={principal} alt="" width="500" height="200" className="d-inline-block align-text-top"/> 
    <div className="card-body">
      <h5 className="card-title">Manuales</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
  <img src={principal} alt="" width="500" height="200" className="d-inline-block align-text-top"/> 
    <div className="card-body">
      <h5 className="card-title">Inalambricos</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
      </div>
    </div>
    
  )
}

export default Card