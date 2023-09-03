// This is an example of a jsx component and cannot be named Pet.js because it is not a simple JavaScript React component but a jsx component that needs to be transpiled by Vite to be used in the browser.

// import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };

// below is the same as above but using JSX instead of React.createElement through Vite transpiling
import { Link } from "react-router-dom";

const Pet = ({name, animal, breed, images, location, id}) => {
    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link to ={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${location}`}</h2>
            </div>
        </Link>
    );
}; // end of Pet component function that takes in name, animal, breed, images, location, and id and returns a Link component with a div with a img tag and a div with a h1 and h2

export default Pet;