import React from "react";
import Photo from "../Image/photo.png";
import { ListIconFramework } from "../Components/ListIconFramework";
export const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <div className="row d-flex flex-column left">
            <div className="col">
              <h1>Frontend Developer.</h1>
            </div>
            <div className="col ">
              <p>
                Me encantaria empezar a empezar mi habito laboral mediante el
                Frontend ya que lo veo entretenido y interesante
              </p>
            </div>
            <ListIconFramework width={50} height={50} /* fill="#dff" */></ListIconFramework>
          </div>
        </div>
        <div className="col-4 right">
          <img src={Photo}></img>
        </div>
      </div>
    </div>
  );
};
