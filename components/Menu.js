      const NowEating = (props) => <h1>{props.meal}</h1>;

      class Menu extends React.Component{
        state = {
          meal: 'Spaghetti'
        };

        addSideDish = () => {
          this.setState(prevState => {
            return { meal: `${prevState.meal} & salad` }
          })
        };
