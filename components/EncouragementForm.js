export default class EncouragementForm extends React.Component {
  state = {
    message: ''
  };

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    });
  };

  handleSubmit = (event) => {
    alert(this.state.message);
    event.preventDefault();
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Send an Encouraging Message:
          <input text='text' value={this.state.message} onChange={this.handleChange}/>
        </label>
        <button>
          Submit
        </button>
      </form>
    )
  };
};
