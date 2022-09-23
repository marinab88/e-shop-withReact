import Product from './models/Product'

const RenderProduct = (product) => {
  product = new Product();
  
  return (
    <div>
       <h2>{product.name}</h2>
      <img src={product.image} alt="Img"></img> 
    </div>
  )
}

export default RenderProduct