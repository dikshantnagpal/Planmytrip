import { images } from "./data"
import './ImageCard.css';

export const ImageCard = ({img})=>{
    
    return(
        <div id="card">
            <img src={img} alt="image" />
        </div>
    )
}