import { Tours, Loading, Error } from "./components"
import {useGlobalContext} from './context/AppProvider'
function App() {
  const {loading, error, tours, fetchTours} = useGlobalContext()

  if (loading) {
      return (
        <main>
           <Loading />
        </main>
      )
  }
  if (error) {
    return (
      <main>
        <Error />
      </main>
    )
  }
  if (tours.length < 1) {
    return (
      <main>
        <div style={{textAlign: "center"}}>
          <h2 className="heading"><span>{tours.length}</span> tours left</h2>
          <button className="btn" onClick={fetchTours}>fetch tours</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  )
}

export default App
