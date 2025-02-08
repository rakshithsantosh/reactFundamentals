import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object => HTMLElement (render)

const heading = React.createElement("h1", { id: "heading" }, "Hi there");

//JSX - HTML like syntax
const headingOne = <h1>this is a heading</h1>;
//JSX is tranpiled before this code reaches JS Engine parcel(bundler) transpiles this using babel package

//Babel tranpiles JSX to JS

//JSX => React.createElement => ReactElement JS Object => HTMLElement

//React Component
//Class Based Component
//Functional Component

//React Functional Component

const Heading = () => {
  return (
    <>
      <h1>Heading</h1>
      {headingOne}
      <Title />
    </>
  );
};

//JSX prevents cross site scripting even if we right some code in {} that is sanitized by JSX

const Title = () => <div>this is some div</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
