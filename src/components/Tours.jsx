import Tour from "./Tour"
import {useGlobalContext} from '../context/AppProvider'
const Tours = () => {
    const {tours} = useGlobalContext()
    return (
        <div className="tours-container">
            <h2 className="heading">our <span>tours</span></h2>
           <section className="tours">
                {tours.map(tour => {
                return  <Tour key={tour.id} {...tour}/>
                })}
           </section>
        </div>
    )
}

export default Tours