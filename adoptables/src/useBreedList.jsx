import { useState, useEffect } from "react";

const localCache = {}; // localCache object that stores the breeds for each animal

export default function useBreedList(animal) {
    const [breedList, setBreedList] = useState([]);
    const [status, setStatus] = useState("unloaded");

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            requestBreedList();
        } // end of if/else statement that checks if the animal is in the localCache and if not, calls the requestBreedList function

        async function requestBreedList() {
            setBreedList([]);
            setStatus("loading");

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )
            const json = await res.json();
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
            setStatus("loaded");
        } // end of requestBreedList function that fetches the breeds from the API and sets the breeds state to the json.breeds array of breeds from the API response and sets the status state to "loaded"
    }, [animal]); // end of useEffect hook that runs when the animal state changes and calls the requestBreedList function if the animal is not in the localCache or sets the breeds state to the localCache[animal] if the animal is in the localCache or sets the breeds state to an empty array if the animal is not defined or sets the status state to "loading" if the animal is not in the localCache or sets the status state to "loaded" if the animal is in the localCache or sets the status state to "unloaded" if the animal is not defined

    return [breedList, status];
} // end of useBreedList function that takes in an animal and returns an array of breeds and a status of "unloaded", "loading", or "loaded" depending on the status of the requestBreedList function that fetches the breeds from the API and sets the breeds state to the json.breeds array of breeds from the API response and sets the status state to "loaded"