import { useEffect, useState } from "react";

const Profile = (props) => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        //console.log("UseEffect")
    })
    // console.log("render");
    return(
        <>
            <h1>Profile Functional</h1>
            <h2>Name : {props.name}</h2>
            <h2>Surname : {props.surname}</h2>
            <h3>Count:{count}</h3>
            <button onClick={()=>
                setCount(1)
            }   
            >Count</button>
        </>
    )
}

export default Profile;