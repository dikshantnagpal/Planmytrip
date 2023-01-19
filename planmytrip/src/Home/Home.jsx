import './Home.css';

function Home(){
    const date = new Date();
   let today = date.getDate() +"/"+ date.getFullYear();
    console.log(today);
    return(
        <div id="home">
            <div id='blue'>
                <div id="whit">

                    <div className="check">
                        <div>
                            <label style={{marginRight:"8px"}}><input type="checkbox"/>ONE-WAY</label>
                            <label style={{marginRight:"8px"}}><input type="checkbox"/>ROUND-TRIP</label>
                            <label style={{marginRight:"8px"}}><input type="checkbox"/>MULTICITY</label>
                        </div>
                        <div>Book International and domestic flights</div>
                    </div>

                    <div id='delhi'>
                        <div id='bang'>
                            <div>
                                FROM <br /><h1>Delhi</h1> DEL,Delhi Airport India
                            </div>
                            <div>
                                TO <br /><h1>Bangaluru</h1>BLR,Bangaluru International Airport
                            </div>
                        </div>
                        <div>
                            <div>Departure <h1 style={{marginLeft:"40%"}}>{today}</h1>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Home;