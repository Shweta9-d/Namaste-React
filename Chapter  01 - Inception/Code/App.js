
    // React element is an object
    const heading = React.createElement(
        "h1",
        {
            id:"title",
        },
        "Heading 1"
        );
    
        const heading2 = React.createElement(
            "h2",
            {
                id:"title",
            },
            "Heading 2"
        );
    
        const container = React.createElement(
            "div",
            {
                id:"container",
            },
            [heading, heading2]
            ); 
    
        console.log(heading);
    
        // This is place where I want my application to run that is root
        const root = ReactDOM.createRoot(document.getElementById("root"));
    
        //passing a react element inside the root
        root.render(container);s