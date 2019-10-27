const Display = ({ifTruthy=true, children}) => {
  if (ifTruthy) {
    console.log(children);
    return React.Children.only(children);
  } else {
    console.log(children);
    return null
  }
};

const age = 12;
