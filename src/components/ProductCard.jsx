import '../style/ProductCard.css';

function ProductCard({ name, description, image, oldPrice, price, installmentCount, installmentValue }){
  return(
    <div className="productCardDiv">
      <img src={image} alt="product" className="cardImg" />
      <h3 className="productName">{name}</h3>
      <h6 className="productDescription">{description}</h6>
      <p className="productOldPrice">{`De: R$${oldPrice},00`}</p>
      <p className="productCurrentPrice">{`Por: R$${price},00`}</p>
      <p className="productInstallment">{`ou ${installmentCount}x de R$${installmentValue}0`}</p>
      <button type='submit' className='buyBtn'>Comprar</button>
    </div>
  )
}

export default ProductCard