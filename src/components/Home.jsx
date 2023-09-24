import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="row">
  <div className="col-sm-5 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="button">Comidas</button>
            <button className="btn btn-primary" type="button">Clientes</button>  
            <button className="btn btn-primary" type="button">Personal</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home
