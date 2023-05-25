import { useState } from "react"
import { useGlobalContext } from "../context/AppProvider"
const Tour = ({id, image, name, info, price }) => {
    const {removeTour} = useGlobalContext()
    const [readMore, setReadMore] = useState(false)
    return (
        <article className="tour">
            <img className="tour-img" src={image} alt={name} />
            <div className="tour-details">
                <h5 className="tour-name">{name}</h5>
                <p className="tour-info">{readMore ? info : info.substring(0, 200)}... 
                    <button className="read-more-btn" onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                </p>
                <span className="tour-price">{price}</span>
                <button onClick={() => removeTour(id)} className="btn btn-block">not interested</button>
            </div>
        </article>
    )
}

export default Tour