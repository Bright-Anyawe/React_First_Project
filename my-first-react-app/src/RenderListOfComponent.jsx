
function ListItem(props) {
  return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul> 
{props.animalsList.map((animal) => {

        return <ListItem key={animal} animal={animal} />;
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