
import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1> Hello World using React Elements <h1>
 *          <h2> Hello World using React Elements 1 <h2>
 *      </div>
 * 
 * <div id="child2">
 *          <h1> Hello World using React Elements <h1>
 *          <h2> Hello World using React Elements 1 <h2>
 *      </div>
 * </div>
 */

const parent = React.createElement('div', {id: "parent"}, [
    React.createElement('div', {id: "child1"}, [
        React.createElement('h1', {}, "Hello World using React Elements"),
        React.createElement('h2', {}, "Hello World using React Elements 1 ")
    ]),

    React.createElement('div', {id: "child2"}, [
        React.createElement('h1', {}, "Hello World using React Elements"),
        React.createElement('h2', {}, "Hello World using React Elements 1 ")
    ]),
]
    );


//JSX --- HTML like syntax
const root = ReactDOM.createRoot(document.getElementById('root'));

const number = 10;

const header = (
    <>
         <div id="parent">
        <div id="child">
            <h1>Hiiii</h1>
        </div>

    </div>
        <h1 id="heading"> Hello World </h1> 
    </>
   
);

console.log(header);

// Babel -----  converts html like syntax to JS Object (React Element)

root.render(header);



//root.render(parent);
// replace
//root.render("anshika");


// const header = React.createElement('h1', {id: "heading"}, 'Hello World');

// // React Element ====> JS Object

// console.log(header);

// // ReactDOM is used for dom manipulation
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(header);

// // render method converts your JS object into html (which browser understands)


// React Elements
// JSX

// React Components

// Functional Componets ----- new way
// Class Based Components ----- old way

// Functional components ----> Javascript function which returns JSX

const XyzComponent = () => {
    return <h1> Learning Functional Component </h1>
}

const AbcComponent = () => {
    return (
        <>
        <XyzComponent />
        <h1> ABC component</h1>
        </>
    )
};

