// import { Component } from 'react'
import './produs.css'

class Product {
  constructor(id, name, image) {
    this.id = id;
    this.name = name;
    this.image = image;
  }

  toPOJO() {
    return { id: this.id, 
             name: this.name, 
             image: this.image
            }
  }
  
  toJson() {
    // this.toPOJO().toJson()
    return JSON.stringify(this.toPOJO)
  }
  
}


// class Product extends Component {

//   render() {
//     return (
//       <div>
//         <h2>{this.props.name}</h2>
//         <img src={this.props.image} alt='Img' />
//       </div>
//     )
//   }
// }


export default Product