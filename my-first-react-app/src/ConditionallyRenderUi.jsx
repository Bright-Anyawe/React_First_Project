function List(props) {
  return (
    <ul>
      {props.animalsList.map((animal) => {
        return animal.startWith("L") ? <li key={animal}> {animal} </li> : null;
      })}
    </ul>
  );
}

function AnimalListApp() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </div>
  );
}

// export {ListItem, List, DefineAnimalListApp }
export default AnimalListApp;
