import React, { Component } from "react";
import Images from "./Images"

const image1 = "https://img-aws.ehowcdn.com/600x375/photos.demandstudios.com/184/197/fotolia_2617328_XS.jpg"
const image2 = "https://webdeimagenes.com/wp-content/uploads/2018/02/14-5.jpg"
const image3 = "https://amordeimagenes.com/wp-content/uploads/2018/04/bonita-imagen-de-lago-para-fondo-de-pantalla.jpg"

const images = [{
    title: "Osky",
    url:image1
}, {title: "Raushau", url: image2}, {title: "Shauosky", url: image3}]

class Publication extends Component { 
    render(){
        return(
            <div>
            {
                images.map( image => {
                    return(<Images saludo={image.title} url={image.url} />)
                })
            }
            </div>
        )
    }
}
  
export default Publication;