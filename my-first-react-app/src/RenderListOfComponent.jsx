
// function ListItem(props) {
//   return <li>{props.animalsList}</li>
// }

function List(props) {
    return (
        <ul> 
{props.animalsList.map((animal) => {

        return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
})}

        </ul>
    )

    
}

function DefineAnimalListApp() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </div>
  );
}

// export {ListItem, List, DefineAnimalListApp } 
export default DefineAnimalListApp