import Child from "./Child";
import {useSelector, useDispatch} from 'react-redux';

const App = () => {

    const {loading , text} = useSelector((db) => db)
    const dispatch=useDispatch();
    

    console.log(loading)


    return (
        <div>

            <Child/>
<h1>{text}</h1>
            <button onClick={
                () => dispatch({type: "OPEN"})
            }>IS ACTIVE</button>
            {
            loading ? <div>
                open
            </div> : <h1>LOADING . . .</h1>
        } </div>
    );
};

export default App;
