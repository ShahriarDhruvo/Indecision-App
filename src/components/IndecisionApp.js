import React from "react";
import Header from "./Header";
import Action from "./Action";
import AddOption from "./AddOption";
import Options from "./Options";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove),
    }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[random];

    this.setState(() => ({ selectedOption }));
  };

  handleAddOption = (option) => {
    if (!option) return "Enter a valid option";
    else if (this.state.options.indexOf(option) > -1)
      return "This option already exists";

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     options: props.options,
  //   };
  // }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) this.setState(() => ({ options }));

      // console.log("Data loaded");
    } catch (e) {
      // Nothing to be done...
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);

      // console.log("Saving data");
    }
  }

  render() {
    const subTitle = "Put your choice in the hands of a computer";

    return (
      <div>
        <Header subTitle={subTitle} />
        <div className = "container">
          <Action
            hasOptions={this.state.options.length}
            handlePick={this.handlePick}
          />

          <div className = "widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal 
          selectedOption = {this.state.selectedOption}
          handleClearModal = {this.handleClearModal}
        />
      </div>
    );
  }
}

// IndecisionApp.defaultProps = {
//   // options: ["One", "bla", "pinon"]
//   options: [],
// };

export default IndecisionApp;
