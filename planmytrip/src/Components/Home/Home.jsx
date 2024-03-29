import { useState } from "react";
import Card from "./Card";
import { data, images, images2 } from "./data";
import { data2 } from "./data";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { ImageCard } from "./ImageCard";
// import { type } from "@testing-library/user-event/dist/type";

function Home() {
  const navigate = useNavigate();
  const [yes, setYes] = useState(true);
  const [search, setSearch] = useState("");

  const handleClick = () => {
    if (search === "delhi") {
      navigate("/delhi");
    } else if (search === "goa") {
      navigate("/goa");
    } else if (search === "mumbai") {
      navigate("/mumbai");
    } else {
      navigate("/delhi");
    }
  };
  
  return (
    <div id="home">
      <div className="homeTop">
        <div className="homeTopCard">
          <div className="secondHeader">
            <Link to="" className="iconCard active">
              <i className="fa fa-plane"></i>
              <h1>Flight</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-hotel"></i>
              <h1>Hotel</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-home"></i>
              <h1>Home Style</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-train"></i>
              <h1>Train</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-bus"></i>
              <h1>Bus</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-car"></i>
              <h1>Car</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-money"></i>
              <h1>Forex</h1>
            </Link>
            <Link to="" className="iconCard">
              <i className="fa fa-plane"></i>
              <h1>Charter Plane</h1>
            </Link>
          </div>

          {/* Sub Navbar for Hotels Start */}

          <div className="homeInputBx">
            <div>
              <div className="homeInputs">
                <input checked="checked" name="type" type="radio" id="inputs" />
                <label for="inputs">UPTO 5 ROOMS</label>
              </div>
              <div className="homeInputs">
                <input name="type" type="radio" id="inputs2" />
                <label for="inputs2">GROUP DEAL</label>
              </div>
            </div>
            <p>Book International and Domestic Flights</p>
          </div>
          {/*  */}
          <div className="homeMainSearchInput">
            <div className="MainSearchinputBx">
              <span>CITY, PROPERTY NAME OR LOCATION</span>
              <input
                id="from"
                type="text"
                style={{width:"fit-content"}}
                placeholder="Search Hotel"
                onChange={(e)=>setSearch(e.target.value)}
              />
            </div>
            <div className="MainSearchinputBx">
              <span>CHECK-IN</span>
              <input type="date" style={{ width: "fit-content",fontWeight:"lighter" }} />
            </div>
            <div className="MainSearchinputBx">
              <span>CHECK-OUT</span>
              <input type="date" style={{ width: "fit-content" }} />
            </div>
            <div className="MainSearchinputBx">
              <span>ROOMS & GUESTS</span>
              <input
                type="number"
                placeholder="Person"
                style={{
                  width:"120px",
                  fontSize:"20px"
                }}
                // value={person}
                // onChange={handlePerson}
              />
            </div>
          </div>
          {/* Sub Navbar for Hotels Ends  */}
          <div className="homeSearchButtonBx">
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        <div className="homeExplore">
          <div className="exploreCard">
            <img
              src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png"
              alt=""
            />
            <p>Where2Go</p>
          </div>
          <div className="exploreCard">
            <img
              src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png"
              alt=""
            />
            <p>TripMoney</p>
          </div>
          <div className="exploreCard">
            <img
              src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
              alt=""
            />
            <p>Explore Enternational Flights</p>
          </div>
          <div className="exploreCard">
            <img
              src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png"
              alt=""
            />
            <p>MICE</p>
          </div>
          <div className="exploreCard">
            <img
              src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png"
              alt=""
            />
            <p>Gift Cards</p>
          </div>
        </div>
      </div>
      <div id="big">
        <div id="offer">
          <div id="par">
            <h1>Offers :</h1>
            <a href="">
              <h3>All Offers</h3>
            </a>
            <a href="">
              <h3>Bank Offers</h3>
            </a>
            <a href="">
              {" "}
              <h3>Holidays</h3>
            </a>
            <a href="">
              <h3>Hotels</h3>
            </a>
            <a href="">
              <h3>Flights</h3>
            </a>
            <a href="">
              <h3>Cabs</h3>
            </a>
            <a href="">
              {" "}
              <h3>Others</h3>
            </a>
          </div>

          <div id="btn">
            <button disabled={yes} onClick={() => setYes(true)}>
              {" "}
              {"<"}{" "}
            </button>
            <button disabled={!yes} onClick={() => setYes(false)}>
              {" "}
              {">"}{" "}
            </button>
          </div>
        </div>
        <hr />

        <div id="crousel">
          {yes
            ? data.map((ele, index) => <Card key={index} {...ele} />)
            : data2.map((ele, index) => <Card key={index} {...ele} />)}
        </div>
      </div>
      <div id="add">
        <img
          src="https://mmt.servedbyadbutler.com/getad.img/;libID=3712531"
          alt="image"
        />
      </div>

      <div id="down">
        <div id="get">
          <h1>
            Download App Now ! <br />{" "}
            <p>
              <span style={{ fontSize: "14px", color: "gray" }}>
                Get India's #1 travel super app, join 100 Million+ happy
                travellers!
              </span>{" "}
            </p>{" "}
          </h1>
          <p>
            {" "}
            Use code{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              {" "}
              WELCOMEMMT
            </span>{" "}
            and get upto Rs 1200 off on your first domestic flight booking
          </p>
          <input type="number" placeholder="Enter Mobile number" />
          <button>Get App Link</button>
        </div>
        <div id="app">
          <p>More ways to get the App</p>
          <Link
            to={"https://play.google.com/store/apps/details?id=com.makemytrip"}
          >
            {" "}
            <img
              id="store"
              src="https://p.kindpng.com/picc/s/114-1144140_available-on-the-app-store-and-google-play.png"
              alt="image"
            />
          </Link>
          <Link>
            {" "}
            <img
              id="qr"
              src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg"
              alt="image"
            />
          </Link>
        </div>
      </div>

      <div className="imgcard">
        <h1>Handpicked Collections for You</h1>
        <div>
          {images.map((ele, index) => (
            <ImageCard key={index} {...ele} />
          ))}
        </div>
      </div>

      <div className="imgcard">
        <h1>Unlock Lesse-Known Wonders of India</h1>
        <div>
          {images2.map((ele, index) => (
            <ImageCard key={index} {...ele} />
          ))}
        </div>
      </div>

      <div id="trip">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"
            alt="logo"
          />
          <p>
            <b>Forex </b> at best exchange rates delivered at your doorstep !
          </p>
        </div>
        <div>
          <button>Order Now{"-->"}</button>
        </div>
      </div>
    </div>
  );
}

export default Home;


















































































