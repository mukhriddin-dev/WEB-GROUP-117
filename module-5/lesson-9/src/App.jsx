import {useReducer, useEffect} from 'react';


const App = () => {

    const initialState = {
        username: "",
        number: 0,
        load: false,
        count: 0,
        post: []
    }


    const reducer = (state, action) => {

        console.log(action.type)
        console.log(action.payload)

        switch (action.type) {
            case 'INCR':
                return {
                    ...state,
                    number: state.number + 1
                }
            case 'DECR':
                return {
                    ...state,
                    number: state.number - 1
                }
            case 'SETVAL':
                return {
                    ...state,
                    username: action.payload
                }
            case 'SEND_POST':
                return {
                    ...state,
                    post: action.payload
                }

            case 'LOADED':
                return {
                    ...state,
                    load: true
                }
            default:
                return state
        }


    }


    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
            return res.json();
        }).then((reult) => {
            dispatch({type: 'SEND_POST', payload: reult});
            dispatch({type: 'LOADED'})
        })
    }, [])


    if (!state.load) {
        return <h1>LOADING . . .</h1>
    }

    return (
        <div>
            <h1>{
                state.number
            }</h1>

            <h1>{
                state.username
            }</h1>

            <input type="text" placeholder='enter username'
                onChange={
                    (e) => dispatch({type: 'SETVAL', payload: e.target.value})
                }/>


            <button onClick={
                () => dispatch({type: 'INCR'})
            }>SEND ACTION  INCR</button>
            <button onClick={
                () => dispatch({type: 'DECR'})
            }>SEND ACTION DECR
            </button>


            <ul> {
                state ?. post ?. map((el) => {
                    return <li key={
                        el.id
                    }>
                        {
                        el.title
                    }</li>
            })
            } </ul>
        </div>
    );
};

export default App;
