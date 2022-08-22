import '../style/ProductsSection.css'

import ProductsGrid from './ProductsGrid'

function ProductsSection() {
  return (
    <section className="productsSection">
      <h3 className='productsSectionTitle'>
        <hr size='2' width='38%' />
        Sua seleção especial
        <hr size='2' width='38%' />
      </h3>
      
      <ProductsGrid />
    </section>
  )
}

export default ProductsSection