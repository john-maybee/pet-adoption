const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`);
    }

    return apiRes.json();
}; // fetchPet end where it is exported to useFetchPet.js file to be used in the PetDetails.js file to fetch the pet details

export default fetchPet;