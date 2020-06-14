// let visibility = false;

// const showThis = () => {
//     visibility = !visibility;
//     reloadPage();
// };

// const appRoot = document.getElementById("app");

// const reloadPage = () => {
//     const template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick = {showThis}>{visibility ? "Hide details" : "Show details"}</button>
//             {visibility && (
//                 <div>
//                     <p>Here, are some details...</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// reloadPage();

// Component based approach
class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.showDetails = this.showDetails.bind(this);

    this.state = {
      buttonName: "Show Details",
      visibility: false,
    };
  }

  showDetails(){
    this.setState((prevState) => {
        return {
            buttonName: prevState.visibility ? "Show Details" : "Hide Details",
            visibility: !prevState.visibility
        }
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.showDetails} > {this.state.buttonName} </button>
        {
            this.state.visibility &&
                <p>Here, are some details....</p>
        }
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));
