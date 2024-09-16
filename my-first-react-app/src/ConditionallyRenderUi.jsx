function List(props) {
  return (
    <>
      {!props.animals ? (
        <div>Loading...</div>
      ) : props.animals.length > 0 ? (
        <ul>
          {props.animals.map((animal) => {
            return <li key={animal}>{animal}</li>;
          })}
        </ul>
      ) : (
        <div>There are no animals in the list!</div>
      )}
    </>
  );
}

function AnimalListApp() {
  const animals = [];

  return (
    <div>
      <h1>Animals: </h1>
      <List animalsList={animals} />
    </div>
  );
}

// export {ListItem, List, DefineAnimalListApp }
export default List;
