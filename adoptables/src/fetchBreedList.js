const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];

    if (!animal) return [];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`);

    if (!apiRes.ok) {
        throw new Error(`details/${animal} fetch not ok`);
    }

    return apiRes.json();
}; // fetchBreedList end where it is exported to useFetchBreedList.js file to be used in the SearchParams.js file to fetch the breed list

export default fetchBreedList;