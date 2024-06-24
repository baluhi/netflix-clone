import { FaCircleExclamation } from "react-icons/fa6";
import "./carousel.css";
import React from 'react';
const CarouselCard = () => {
  return (
    <div className="container-fluid mt-4">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item align-items-center   active">
            <img
              src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/102de8278bed6e8a346a8f04b5b3c7db.jpe"
              className="d-block w-100 carousel-image "
              alt="First slide"
            />
          </div>
          <div className="carousel-item  align-items-center  ">
            <img
              src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
              className="d-block w-100 carousel-image"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item  align-items-center  ">
            <img
              src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/ad3c6bbdc8d6e3a236292f3e8223f852.jpe"
              className="d-block w-100 carousel-image"
              alt="Third slide"
            />
          </div>
        </div>
        <div className="card-body  d-flex justify-content-between  carousel-card-body">
            <div className="media-btn d-flex">
            <button className="btn btn-dark ms-3 "> Play</button>
            <button className="btn btn-dark ms-3 " >Download</button>
            </div>
            <div className="desc  w-50 justify-content-around">
            <FaCircleExclamation className="fs-5 text-light  "  />
                <p className="fs-6  text-light " style={{fontWeight:'600'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, cumque.</p>
            </div>
        
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;
