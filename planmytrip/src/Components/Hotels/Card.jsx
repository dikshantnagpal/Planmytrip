import './Hotels.css';

function Card(props){

    const {img,capText,blackText,font14,font142} = props;

    return(
        <div id="live">
            <div id="image">
                <img src={img} alt="image" />
            </div>
            <div id="gene">
                <p style={{color:"tomato",fontWeight:'bolder'}}>{capText}</p>
                <p style={{fontWeight:"bolder"}}>{blackText}</p>
                <p style={{color:"gray"}}>{font14}</p>
                <button>{font142}</button>
            </div>
        </div>
    )
}

export default Card;