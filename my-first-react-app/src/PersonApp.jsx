import { useState } from "react";

// function Person() {
//   const [person, setPerson] = useState({ name: "John", age: 100 });

//   // BAD - Don't do this!
// //   const handleIncreaseAge = () => {
// //     // mutating the current state object
// //     person.age = person.age + 1;
// //     setPerson(person);
//   //   };

//   // GOOD - Do this!
//   const handleIncreaseAge = () => {
//     // copy the existing person object into a new object
//     // while updating the age property
//     const newPerson = { ...person, age: person.age + 1 };
//     setPerson(newPerson);
//   };

//   return (
//     <>
//       <h1>{person.name}</h1>
//       <h2>{person.age}</h2>
//       <button onClick={handleIncreaseAge}>Increase age</button>
//     </>
//   );
// }

function Person() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({ userName: firstName + lastName, age: 100 });

  const handleFirstName = (e) => {
    const updateFirstName = e.target.value
    setFirstName(updateFirstName);
    handleUserName(updateFirstName, lastName);
  };

  const handleLastName = (e) => {
    const updateLastName = e.target.value;
    setLastName(updateLastName);
    handleUserName(firstName, updateLastName);
  };

  function handleUserName(updateFirstName, updateLastName) {
    const newPerson = {
      ...person,
      userName: updateFirstName + " " + updateLastName,
    };
    setPerson(newPerson);
  };  

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstName}
      />
      <input type="text" value={lastName} onChange={handleLastName} />
      <h1>{person.userName }</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
    </>
  );
}

export default Person;
