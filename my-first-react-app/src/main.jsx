import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './PublicGreeting.jsx'
import DisplayFavoriteFood from './FavoriteFood.jsx'
import ConvertHtmlJsx from "./convertHtml.jsx";
import RenderListOfElements from "./RenderListOfElements.jsx"
// import {ListItem, List, DefineAnimalListApp } from "./RenderListOfComponent.jsx"
import DefineAnimalListApp from './RenderListOfComponent'



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <App />

    <DisplayFavoriteFood />
    <ConvertHtmlJsx />
    {/* <RenderListOfElements/> */}
    <DefineAnimalListApp/>

  </StrictMode>
);
