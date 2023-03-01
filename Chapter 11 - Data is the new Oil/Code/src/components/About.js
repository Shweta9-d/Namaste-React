import { Outlet } from "react-router-dom";
import Profile from "./ProfileClassComponent";
import ProfileFunctionalComponent from "./Profile"
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
   
    constructor(props){
        super(props);
       
        //console.log("Parent - Constructor");
     }

    componentDidMount(){
        
       
        //console.log("Parent - ComponentDidMount");
    }

    render(){
       // console.log("Parent - render");
        return(
            <>
            <div>
                <h1>
                    About Us Page
                </h1>
                <UserContext.Consumer>
                    {({user})=><h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
                </UserContext.Consumer>
                <p>
                    Namaste React Course Chapter 07 - finding the path to the
                </p>
                {/* <Outlet/> */}
                <Profile name={"ShwetaClass"} surname={"Dokhe"}/>
               
            </div>
            </>
        );  
    }
}
export default About;