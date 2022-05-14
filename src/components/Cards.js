import React from "react";
import "../css/style.css";
import img1 from "../Images/img1.jpg";
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';

export default function cards() {
  return (
    <>
    <center>
      <div class="cards">
        <div class="card">
            <div class="in">
              <div class="ini">
                  <c>Card One</c>
                  <br/>
                  <l>Lorem ipsum dolor sit amet consectetur adipisicing elit.</l>
                  <br/>
                  <button class="b2">
                      Read more
                  </button>
              </div>
            </div>
              <img src={img1} alt=""/>
          </div>      
      </div>

      <div class="cards">
        <div class="card">
            <div class="in">
              <div className="ini">
                  <c>Card Two</c>
                  <br/>
                  <l>Lorem ipsum dolor sit amet consectetur adipisicing elit.</l>
                   <br/>
                  <button class="b2">
                      Read more
                  </button>
              </div>
            </div>
              <img src={img2} alt=""/>
          </div>      
      </div>

      <div class="cards">
        <div class="card">
            <div class="in">
              <div className="ini">
                  <c>Card Three</c>
                   <br/>
                  <l>Lorem ipsum dolor sit amet consectetur adipisicing elit.</l>
                   <br/>
                  <button class="b2">
                      Read more
                  </button>
              </div>
            </div>
              <img src={img3} alt=""/>
          </div>      
      </div>
    </center>
    </>
  );
}
