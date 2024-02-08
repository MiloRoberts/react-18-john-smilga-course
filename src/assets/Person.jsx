const Person = ({ name, age, image }) => {
    return (
        <>
            <h3>{name}</h3>
            <h4>{age} years old</h4>
            <img src={image} alt={name + "'s image"} />
        </>
    );
};
export default Person;