class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if(options)
        this.setState(() => ({ options }));

      console.log("Data loaded");
    } catch (e) {
      // Nothing to be done...
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);

      console.log("Saving data");
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }

  handleAddOption(option) {
    if (!option) return "Enter a valid option";
    else if (this.state.options.indexOf(option) > -1)
      return "This option already exists";

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  render() {
    const subTitle = "Put your choice in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length}
          handlePick={this.handlePick}
        />

        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  // options: ["One", "bla", "pinon"]
  options: [],
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision App",
};

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      {!props.options.length && <p>Please add some options to get started!</p>}
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
        {props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <li>
        {props.optionText}
        <button onClick={(e) => props.handleDeleteOption(props.optionText)}>
          remove
        </button>
      </li>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {
      error: [],
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.optionText.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) e.target.elements.optionText.value = "";
  }

  render() {
    return (
      <div>
        <p> {this.state.error} </p>
        <form onSubmit={this.handleAddOption}>
          <input
            type="text"
            name="optionText"
            placeholder="Enter your choices..."
          ></input>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
