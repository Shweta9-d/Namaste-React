import React from "react";
import ReactDOM from "react-dom/client";
import logo from './images/logo.png';
import "./style.css";

const header = React.createElement(
    "div",
    {
        id:"header",
        class : "title",
    },
    [
        React.createElement("h1",{key:"h1",className:"header1"},"Header 1"),
        React.createElement("h2",{key:"h2",className:"header2"},"Header 2"),
        React.createElement("h3",{key:"h3",className:"header3"},"Header 3"),
    ]
);

//Using JSX
const header_jsx = (
    <div className="title">
        <h1 className="header1">JSX-Header1</h1>
        <h2 className="header2">JSX-Header2</h2>
        <h3 className="header3">JSX-Header3</h3>
    </div>
);

//Using Functional Component
const Header1 = () => {
         return <h1 className="header1">FunctionalComponent-Header1</h1>
}

const Header2 = () => {   
        return <h2>FunctionalComponent-Header2</h2>        
}

const Header3 = () => {
        return <h3>FunctionalComponent-Header3</h3>
}

const TitleComponent = () => {
    return(
        <div className="title"> 
            <Header1 />
            <Header2></Header2>
            <Header3 />
        </div>
    )
};

//Functional Component with JSX

const HeaderComponent = () => {
    return(
        <div className="heading-wrapper" key="div_key">
        <div className="logo-wrapper" key= "logo_key">
        <img src={logo} alt="Logo" key= "img_key"/>
        <span className="logo-name" key= "span_key">React</span>
        </div>

        <div className="search" key= "search_key">
        <input type="text" key="search" placeholder="Search"/>
        </div>
    
        <div className="avatar" key= "avatar_key">
        <div className="user-icon" key="user-icon"> </div>
        </div>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
    
root.render(<HeaderComponent />);