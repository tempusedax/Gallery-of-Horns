import React from "react";
import Hornedbeast from "./Hornedbeast";
import data from './data.json'
import './Main.css'



class Main extends React.Component {
  render() {
    let beasts = data.map((beast, index) => {
        return <Hornedbeast
        title={beast.title}
        imageurl={beast.image_url}
        description={beast.description}
        key={index}
        />

  })

    return (
      <main>
        {beasts}
      </main>
    )
  }
}


export default Main;