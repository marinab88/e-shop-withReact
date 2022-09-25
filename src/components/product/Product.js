// import Product from './models/Product'

const RenderProduct = (product) => {
    
  return (
    <div>
       <h2>{product.name}</h2>
      <img src={product.image} alt="Img" /> 
    </div>
  )
}

export default RenderProduct