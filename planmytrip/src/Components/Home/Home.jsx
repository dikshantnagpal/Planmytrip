import { useState } from 'react';
import Card from './Card';
import { data } from './data';
import { data2 } from './data';
import './Home.css';

function Home(){
    
    const [yes,setYes] = useState(true);
    console.log(yes);
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

                    <div>
                        <button disabled={yes} onClick={()=>setYes(true)}> {"<"} </button>
                        <button disabled={!yes} onClick={()=>setYes(false)}> {">"} </button>
                    </div>
                </div>
                <hr />

                <div id='crousel'>

                    {
                        yes ? data.map((ele,index)=>(
                          <Card key={index} img={ele.img} capText={ele.capText} blackText={ele.blackText} font14={ele.font14} font142={ele.font142} />
                          )):
                          data2.map((ele,index)=>(
                            <Card key={index} img={ele.img} capText={ele.capText} blackText={ele.blackText} font14={ele.font14} font142={ele.font142} />
                            ))     
                    }

                </div>
            </div>
        </div>
    )
}

export default Home;