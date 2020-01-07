// 'Destructoring' each of the named components from the components directories.
import { Header, Nav, Main, Footer } from "./components";

const state = {
  Home: {
    //This is just going to be a string that gets passed into our Header component
    heading: "Home"
  },
  Form: {
    //This is just going to be a string that gets passed into our Header component
    heading: "Form"
  },
  Blog: {
    heading: "Blog"
  },
  Gallery: {
    heading: "Gallery"
  }
};
/**
 *
 * @param {Object} st - a piece of state
 */

function render(st = state.Home) {
  //Query the document using a CSS selector
  document.querySelector("#root").innerHTML =
    //INVOKE each FUNCTIONAL COMPONENT passing in a piece of state each time.
    `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;
  //TODO: Listen for clicks on our menu and log what was clicked on.
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      //'stop the link from linking'
      event.preventDefault();

      /**
       * Grab 'textContent from 'whoever' caused this event to fire.
       * Providing that our 'link names' match up with a key in 'state',
       * we can pass that piece of 'state' into our 'render' fxn.
       */
      render(state[event.target.textContent]);
    });
  });
}
render();
