const skiDictionary = [
  { id: 1, name: 'Send', definition: "To throw one's body off of a cliff or rock" },
  { id: 2, name: "Chowder", definition: "Snow or powder that has been skied" }
];

const NavItems = () => {
  return(
  <React.Fragment>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
  </React.Fragment>
  );
};

const App = (props) => {
  return(
    <dl>
      {props.skiDictionary.map(term => (
        <React.Fragment key={term.id}>
          <dt>{term.name}</dt>
          <dd>{term.definition}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
};
