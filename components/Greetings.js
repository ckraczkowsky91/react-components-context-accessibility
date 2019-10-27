const data = [
  { greeting: "Hello!", id: 1 },
  { greeting: "Bonjour!", id: 2 },
  { greeting: "Hola!", id: 3 }
];

default export const Greetings = ({info}) => {
  return info.map(item => {
    return (
      <li key={item.id}>{item.greeting}</li>
    )
  })
};
// give the Greetings component a prop called info that references the array of Greetings
// shows that we can now use ReactDOM.render() to render an array of components rather than a single component
