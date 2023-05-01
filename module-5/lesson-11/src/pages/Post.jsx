import {useState, useEffect} from "react";
import postApi from "../api/POST.JS";
import {useSelector, useDispatch} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";

const Post = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {postItem, loadItem} = useSelector((res) => res);

    useEffect(() => {
        postApi.getItem(id).then((res) => {
            dispatch({type: "ITEM", payload: res.data});
        }).catch((err) => {
            console.log(err);
        });
    }, [id]);

    const back = useNavigate();

    return (<div>
        <button onClick={
            () => back(-1)
        }>go back</button>
        <h1>Post item</h1>
        {
        loadItem ? (<>
            <h2> {
                postItem ?. title
            }</h2>
            <p> {
                postItem ?. author
            }</p>
        </>) : (<>
            <p>loading . . ..</p>
        </>)
    } </div>);
};

export default Post;
