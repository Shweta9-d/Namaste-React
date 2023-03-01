import {createElement as ce} from "react";
import ReactDOM from "react-dom/client";

    // React element is an object
 
        const heading = ce(
            "h1",
            {},
            "Namaste React"
        ); 

        //JSX
        const Title = () => (
            <h1 id="title" key="h2">
                Namaste React
            </h1>
        );

        const HeaderComponent = () => (
            <div>
                {Title}
                <h2>
                    Namaste React Functional Component
                </h2>
                <h2>
                    This is h2 tag
                </h2>
            </div>
        );
        // This is place where I want my application to run that is root
        const root = ReactDOM.createRoot(document.getElementById("root"));
    
        //passing a react element inside the root
        root.render(<HeaderComponent />);
