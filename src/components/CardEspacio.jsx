import React from "react";
import imagenCurso from '../assets/psicoarte_01.jpg';

function CardEspacio() {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Product image--> */}
        <img
          className="card-img-top"
          src={imagenCurso} //https://dummyimage.com/450x300/dee2e6/6c757d.jpg
          alt="..."
        />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">Clases de Dibujo</h5>
            {/* <!-- Product price--> */}
            $35000
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Mas info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardEspacio;
