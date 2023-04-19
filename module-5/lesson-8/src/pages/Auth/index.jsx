import React, {useState} from 'react';
import LOGIN from '../../service/auth';
import { useNavigate } from 'react-router-dom';


const index = () => {
    const [usename, setUsername] = useState(null);
    const [pasword, setPasword] = useState(null);


    const redirect=useNavigate();


    const userLogin = (e) => {

        e.preventDefault();

        const userData = {
            username: usename,
            password: pasword
        }


        if (userData.username.length === 0 || userData.password.length === 0) {
            alert('Please enter a username and password');
        } else {

            LOGIN.auth(userData).then((res) => {
                if(res.status===200) {
                    localStorage.setItem('token', res.data.token);
                     redirect("/");
     
                }
            })
        }

    }


    return (
        <div className='w-25 p-5 shadow bg-white rounded-2 my-5 mx-auto'>


            <form className='mx-auto'>
                <input onChange={
                        (e) => setUsername(e.target.value)
                    }
                    type="text"
                    placeholder='Enter username'
                    className=' p-3 form-control w-100'/>
                <input onChange={
                        (e) => setPasword(e.target.value)
                    }
                    type="password"
                    placeholder='*****************'
                    className=' p-3 from-control my-5 w-100'/>
                <button onClick={
                        (e) => userLogin(e)
                    }
                    className="btn btn-primary my-5">login</button>
            </form>


        </div>
    );
};

export default index;
