import RenderProduct from './components/product/Product'
import Product from './models/Product'
import Image1 from './img/paleta-machiaj.jpg'
import Image2 from './img/patch-uri.jpg'
import Image3 from './img/ruj.jpg'

function App() {

  let product = new Product();
  
  return (
    <div>
      <RenderProduct name='Paleta de machiaj' image={Image1} />
      <RenderProduct name='Patch-uri' image={Image2} />
      <RenderProduct name='Ruj' image={Image3} />
      {/* <Product name='Paleta de machiaj' image={Image1}/>
      <Product name='Patch-uri' image={Image2}/>
      <Product name='Ruj' image={Image3}/> */}
    </div>
  );
}

export default App;
