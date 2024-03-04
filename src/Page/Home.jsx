import React from "react";
import "../Css/Nav.css";

const Home = () => {
  return (
    <div>
      <section>
        <div>
          <div className="banner-bg">
            <div className="col-md-7">
              <h1 className="p">THE BEST</h1>
              <h1 className="p">MUSIC BAND EVER</h1>
              <br />
              <p className="p">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                <br /> content here', making it look
              </p>
            </div>
            <button>
              <a href="product" className="pro px-3 py-2">
                product
              </a>
            </button>
            <button>
              <a href="cart" className="pro-1 px-4 py-2 ">
                cart
              </a>
            </button>
          </div>
        </div>
      </section>

      


   

    </div>
  );
};


export default Home;
