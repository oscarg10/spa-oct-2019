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
function render(st = state.Home) {
  //Query the document using a CSS selector
  document.querySelector("#root").innerHTML =
    //Developer's note: Be sure to INVOKE each of the FUNCTIONAL COMPONENTS
    `
${Header(st)}
${Nav(st)}
${Main(st)}
${Footer(st)}
`;
  //TODO: Listen for clicks on our menu and log what was clicked on.
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();

      render(state[event.target.textContent]);
    });
  });
}
render();
