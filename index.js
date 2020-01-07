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
//Query the document using a CSS selector
document.querySelector("#root").innerHTML = `
${Header()}
${Nav()}
${Main()}
${Footer()}
`;
