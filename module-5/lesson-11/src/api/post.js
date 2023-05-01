import axios from "../service/axios";

const postApi={
    getAll : async ()=> axios.get("/posts") ,
    getItem: async (ID)=> axios.get(`/posts/${ID}`),
    deleteItem: (ID)=> axios.delete(`/posts/${ID}`),
    addPost: (object)=> axios.post(`/posts`, object),
    updatePost: (id,object)=> axios.put(`/posts/${id}`, object)
}


export default postApi;