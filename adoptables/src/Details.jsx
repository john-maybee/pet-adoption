import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";

const Details = () => {
    const { id } = useParams();
    const results = useQuery(["details", id], fetchPet); // useQuery hook takes in a key and a function that returns a promise (fetchPet) and returns an object with properties. This can replace the useEffect hook in usable components.

    if (results.isError) {
        return <h2>ohno! There is an error with the results.</h2>;
    } 

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <div className="details">
            <div>
                <h1>{pet.name}</h1>
                <h2>
                    {pet.animal} -- {pet.breed} -- {pet.city}, {pet.state}
                    <button>Adopt {pet.name}</button>
                    <p>{pet.description}</p>
                </h2>
            </div>
        </div>
    );
}; // end of Details component function that takes in id and returns a div with a h1 of the pet's name, a h2 of the pet's animal, breed, city, and state, a button to adopt the pet, and a p of the pet's description if there is no error and the results are not loading

export default Details;