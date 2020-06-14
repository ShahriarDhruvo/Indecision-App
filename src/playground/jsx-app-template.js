const app = {
    title: "Indecision App",
    subtitle: "This is a subtitle",
    options: []
    // options: ["one", "two", "three", "Four"]
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if(option){
      app.options.push(option);
      console.log(app.options);
      templateFunc();
      e.target.elements.option.value = "";
    }
  }
  
  const removeAll = () => {
    app.options = [];
    console.log(app.options);
    templateFunc();
  }
  
  const chooseRand = () => {
    const randomThing = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomThing]);
  }
  
  const templateFunc = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options: " : "No options"}</p>
  
        <button disabled = {app.options.length > 1 ? false : true} onClick = {chooseRand}>What should I do?</button>
    
        <ol>
          {
            app.options.map((option) => <li key = {option}>{option}</li>)
          }
        </ol>
    
        <form onSubmit = {onFormSubmit}>
          <input type = "text" name = "option" />
          <button>Add Option</button>
          <button onClick = {removeAll}>Remove All</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  const appRoot = document.getElementById("app");
  
  templateFunc();
  