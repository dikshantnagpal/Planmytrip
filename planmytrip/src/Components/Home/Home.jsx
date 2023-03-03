import { useState } from 'react';
import Card from './Card';
import { data, images, images2 } from './data';
import { data2 } from './data';
import './Home.css';
import { Link } from 'react-router-dom';
import { ImageCard } from './ImageCard';

function Home(){
    
    const [yes,setYes] = useState(true);
    const date = new Date();
    let today = date.getDate() +"/"+ date.getFullYear();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekday[date.getDay()];
    return(
        <div id="home">
            <div id='blue'>
                <div id="whit">

                    <div className="check">
                        <div>
                            <label style={{marginRight:"11px"}}><input type="checkbox"/>ONE-WAY</label>
                            <label style={{marginRight:"11px"}}><input type="checkbox"/>ROUND-TRIP</label>
                            <label style={{marginRight:"11px"}}><input type="checkbox"/>MULTICITY</label>
                        </div>
                        <div>Book International and domestic flights</div>
                    </div>

                    <div id='delhi'>
                        <div className='bang'>
                            <div>
                                FROM <br /><h1>Delhi</h1> DEL,Delhi Airport India
                            </div>
                            <div>
                                TO <br /><h1>Bangaluru</h1>BLR,Bangaluru International Airport
                            </div>
                        </div>
                        <div className='bang'>
                            <div>
                                Departure :<br /> <h1>{today}</h1>  {day}
                            </div>
                            <div style={{padding:"0 20px 0 20px"}}>
                                Return : <br /> <h4 style={{color:"grey",wordSpacing:"-1px"}}>Tap to add a return date for bigger returns</h4>
                            </div>
                            <div>
                                TRAVELLER & CLASS <br /> <h1>1 <span style={{fontSize:"18px"}}>Traveller</span> </h1> 
                               <span style={{color:"tomato",fontWeight:"bolder"}}> Premiuim Economy</span>
                            </div>
                        </div>
                    </div>
                    <div id='label'>
                        <div><label><input type="checkbox"/>Regular Fares</label></div>
                        <div><label><input type="checkbox"/>Armed Forces Fare</label></div>
                        <div><label><input type="checkbox"/>Student Fares</label></div>
                        <div><label><input type="checkbox"/>Senior Citizen Fares</label></div>
                        <div><label><input type="checkbox"/>Double Fares</label></div>   
                    </div>
                </div>
                <button id='search'>SEARCH</button>
                
                <h4>-- Explore More --</h4>

                <div id='where'>
                    <div>
                        <img src="https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png" alt="icon" /> <p>Where2go</p>
                    </div>
                    <div>
                        <img src="https://promos.makemytrip.com/appfest/2x/trip-money-1.png" alt="icon" /> <p>TripMoney</p>
                    </div>
                    <div>
                        <img src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png" alt="icon" /> <p>Explore International Flights</p>
                    </div>
                    <div>
                        <img src="https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png" alt="icon" /> <p>MICE</p>
                    </div>
                    <div>
                        <img src="https://promos.makemytrip.com/appfest/2x/gift%20card%201.png" alt="icon" /> <p>Gift Cards</p>
                    </div>
                </div>
            </div>
            <div id='big'>

                <div id='offer'>
                    <div id='par'>
                        <h1>Offers :</h1>
                        <a href=""><h3>All Offers</h3></a>
                        <a href=""><h3>Bank Offers</h3></a>
                        <a href=""> <h3>Holidays</h3></a>
                        <a href=""><h3>Hotels</h3></a>
                        <a href=""><h3>Flights</h3></a>
                        <a href=""><h3>Cabs</h3></a>
                        <a href=""> <h3>Others</h3></a>
                    </div>

                    <div id='btn'>
                        <button disabled={yes} onClick={()=>setYes(true)}> {"<"} </button>
                        <button disabled={!yes} onClick={()=>setYes(false)}> {">"} </button>
                    </div>
                </div>
                <hr />

                <div id='crousel'>

                    {
                        yes ? data.map((ele,index)=>(
                          <Card key={index} {...ele} />
                          )):
                          data2.map((ele,index)=>(
                            <Card key={index} {...ele} />
                            ))     
                    }

                </div>
            </div>
            <div id='add'><img src="https://mmt.servedbyadbutler.com/getad.img/;libID=3514048" alt="image" /></div>
            
            <div id='down'>
                <div id='get'>
                    <h1>Download App Now ! <br /> <p><span style={{fontSize:"14px",color:"gray"}}>Get India's #1 travel super app, join 100 Million+ happy travellers!</span> </p>  </h1>
                    <p> Use code <span style={{color:"red",fontWeight:"bold"}}> WELCOMEMMT</span> and get upto Rs 1200 off on your first domestic flight booking</p>
                    <input type="number" placeholder='Enter Mobile number' />
                    <button>Get App Link</button>
                </div>
                <div id='app'>
                    <p>More ways to get the App</p>
                   <Link to={"https://play.google.com/store/apps/details?id=com.makemytrip"}> <img id='store' src="https://p.kindpng.com/picc/s/114-1144140_available-on-the-app-store-and-google-play.png" alt="image" /></Link>
                   <Link> <img id='qr' src="https://promos.makemytrip.com/notification/xhdpi/QRCodeDT_QR-code.jpg" alt="image" /></Link>
                </div>
            </div>

            <div className='imgcard'>
                <h1>Handpicked Collections for You</h1>
                <div>
                    {
                        images.map((ele,index)=>(
                            <ImageCard key={index} {...ele} />
                        ))
                    }
                </div>
            </div>

            <div className='imgcard'>
                <h1>Unlock Lesse-Known Wonders of India</h1>
                <div>
                    {
                        images2.map((ele,index)=>(
                            <ImageCard key={index} {...ele} />
                        ))
                    }
                </div>
            </div>

            <div id='trip'>
                <div style={{display:"flex",alignItems:"center"}}>
                    <img src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png" alt="logo" />
                    <p><b>Forex </b> at best exchange rates delivered at your doorstep !</p>
                </div>
                <div><button>Order Now{"-->"}</button></div>
            </div>
        </div>
    )
}

export default Home;
