
import React from "react"; 

class Profile extends React.Component{
    constructor(props){
        
        super(props);
        //Create State
        this.state = {
            name:"Shweta Dokhe",
            location:"Pune",
        }
        console.log("Child - Constructor");
    }
     componentDidMount(){
        
        // console.log("Child - componentDidMount");

        // const data = await fetch("https://api.github.com/users/Shweta9-d");
        // const json = await data.json();
        // console.log(json);
        // this.setState({
        //     userInfo:json,
        // })

        this.timer = setInterval(()=>{
            console.log("Set Interval")
        }, 1000);
       
    }

    componentDidUpdate(){
       // console.log("Child - componentDidUpdate");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("ComponentWillUnmount");
    }
    render(){
        console.log("Child - render");
        // const {count,count2} = this.state;
        return(
            <div>
                <h1>Profile Class Component</h1>
                <img src={this?.state?.userInfo?.avatar_url}/>
                <h2>Name : {this?.state?.userInfo?.name}</h2>
                <h2>Location : {this?.state?.userInfo?.location}</h2>
                {/* <h3>Count : {count}</h3>
                <h3>Count2 : {count2}</h3>
                <button onClick={()=>
                    this.setState({
                        count:1,
                        count2:2,
                    })
                }>
                    Count
                </button> */}
            </div>
        );
    }
}

export default Profile;