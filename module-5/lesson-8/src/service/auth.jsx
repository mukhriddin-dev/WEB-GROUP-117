import axios from "axios";

const LOGIN={
    auth: (data)=> axios.post("https://fakestoreapi.com/auth/login",data)
}

export default LOGIN;