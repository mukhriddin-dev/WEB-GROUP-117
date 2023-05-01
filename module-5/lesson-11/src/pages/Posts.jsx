import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import postApi from "../api/POST.JS";
import { Link } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const { post, load, errorMessage } = useSelector((res) => res);

  useEffect(() => {
    postApi
      .getAll()
      .then((res) => {
        dispatch({ type: "GET_ALL", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "ERROR", payload: err });
      });
  }, []);

  return (
    <div>
      <h1>Posts page</h1>
      <ul className="list-group p-4">
        {load ? (
          post.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
              <Link to={`/posts/${item.id}`}>{item.title}</Link>
              </li>
            );
          })
        ) : (
          <h1>LOADING . . .</h1>
        )}
      </ul>
    </div>
  );
};

export default Posts;
