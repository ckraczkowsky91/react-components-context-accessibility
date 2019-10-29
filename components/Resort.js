const Context = React.createContext();

class Provider extends React.Component {
  state = {
    name: 'Sawtooth Mountains',
    status: 'OPEN'
  };

  render() {
    return(
      <Context.Provider value={{
        state: this.state,
        changeStatus: () => {
          this.setState({
            status: 'CLOSED'
          })
        }
      }}>
        {this.props.children}
      </Context.Provider>
    );
  };
};

const Trail = (props) => {
    return(
        <div>
          <Context.Consumer>
            {(context) => {
              return(
                <div>
                  <p>This is the context: {context.state.name}</p>
                  <p>The resort is: {context.state.status}</p>
                  <button onClick={context.changeStatus}>Close Resort</button>
                </div>
              )}
            }
          </Context.Consumer>
        </div>
    );
};

const Lift = (props) => {
    return(
      <div>
        <Trail />
      </div>
    );
};

class Resort extends React.Component {
  render() {
    return(
      <Provider>
        <div>
          <Lift />
        </div>
      </Provider>
    );
  };
};
