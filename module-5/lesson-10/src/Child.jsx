import { useSelector , useDispatch } from "react-redux";

const Child = () => {

    const {text}=useSelector((res)=>res)
    const dispatch=useDispatch();

    return (
        <div>
            <h1>Child {text} </h1>
            <button onClick={()=>dispatch({type:'EDIT_TEXT'})}> edit in Vuex</button>
        </div>
    );
};

export default Child;