import { useContext, createContext, useReducer, useEffect} from "react";
import { GET_TOURS_BEGIN, GET_TOURS_SUCCESS, GET_TOURS_ERROR, REMOVE_TOUR}   from "./actions";
import reducer from "./reducer";
const AppContext = createContext()
const url = 'https://course-api.com/react-tours-project';

const initialState = { 
    loading: false,
    error: false,
    tours: []
}
const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchTours = async () => {
        dispatch({type: GET_TOURS_BEGIN})
        try {
            const response = await fetch(url)
            const tours = await response.json()
            dispatch({type: GET_TOURS_SUCCESS, payload: tours})
        }catch(err) {
               console.log(err)
               dispatch({type: GET_TOURS_ERROR})
        } 
    }
    useEffect(()=>{
        fetchTours()
    }, [])
    const removeTour = (id) => {
        dispatch({type: REMOVE_TOUR, payload: id})
    }

    return (
        <AppContext.Provider value={{...state, removeTour, fetchTours}}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}