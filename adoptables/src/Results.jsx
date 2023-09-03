import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <div className="search">
            {!pets.length ? (
                <h2>No Pets Found</h2>
            ) : (
                pets.map((pet) => (
                    <Pet
                        animal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id}
                    />
                ))
            )}
        </div>
    );
}; // end of Results component function that takes in pets and returns a div with a h2 of "No Pets Found" if there are no pets or a Pet component for each pet in the pets array

export default Results;

