const Pet = ({ name, animal, breed }) => {
  // createElement accepts 3 args: type of element, attributes & children (which can be an array)
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ])
}

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, { 
        name: "Luna", 
        animal: "Dog", 
        breed: "Havanese"
      }),
      React.createElement(Pet, { 
        name: "Polo", 
        animal: "Dog", 
        breed: "Basset Hound"
      }),
      React.createElement(Pet, { 
        name: "Doink", 
        animal: "Cat", 
        breed: "Mixed"
      })
    ]
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))