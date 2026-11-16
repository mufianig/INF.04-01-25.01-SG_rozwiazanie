import { useState } from 'react'
import './App.css'
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [kwiaty, switchKwiaty] = useState(true);
  const [zwierze, switchZwierze] = useState(true);
  const [auta, switchAuta] = useState(true);


  const photos = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321} 
  ]
  
    return (
    <>
      <div className="container-fluid text-start">
        <div className="row">
          <h1 className="">Kategorie zdjęć</h1>
        </div>
        <div className="d-flex align-items-center gap-3">
          <div className="form-check form-switch">
            <input type="checkbox" id="kwiaty" className="form-check-input"></input>
            <label htmlFor="kwiaty" className="form-check-label">Kwiaty</label>
           </div> 
            
          <div className="form-check form-switch">
            <input type="checkbox" id="zwierzeta" className="form-check-input"></input>
            <label htmlFor="zwierzeta" className="form-check-label">Zwierzęta</label>
            </div>
            
          <div className="form-check form-switch">
            <input type="checkbox" id="samochody" className="form-check-input"></input>
            <label htmlFor="samochody" className="form-check-label">Samochody</label>
            </div>
          </div>
        
        <div className="row">

          {photos.map((photo) => (
            <div className="col-12 col-md-6 col-lg-4" key={photo.id}>
              <div class="card">
                <div className="card-body">
                  <img className="card-img-top" src={"./src/assets/" + photo.filename} alt={photo.alt}/>
                  <h5 className="card-title">Pobrań: {photo.downloads}</h5>
                  <button type="button" className="btn btn-success">Pobierz</button>
                  </div>
              </div>
            </div>
          ))
          }
          </div>
        </div>
    </>
  )
}

export default App
