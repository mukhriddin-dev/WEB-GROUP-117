

export const Logout=(navigate)=>{
    console.log("ok")
    console.log(navigate)
    localStorage.clear();
    return  navigate("/login")
}