import ProductCard from "./ProductCard";
import request from '../service/request.js';
import { useEffect, useState } from 'react';
import '../style/ProductsGrid.css';
import Button from "./Button";

const productList = [];

function ProductsGrid() {

  const [productsListsArr, setProductsListsArr] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => { 
    request(page).then(data => {
      setProductsListsArr(productList)
      productList.push(data.products)
    })
  }, [page]);

  return (
    <div className="productsGrid">
      {productsListsArr.map((arr) => {
        return arr.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              oldPrice={product.oldPrice}
              price={product.price}
              installmentCount={product.installments.count}
              installmentValue={product.installments.value}
            />
          )
        });


      })};
      <Button func={() => {
        setPage(page + 1);
      }} className='moreProductsBtn' name='Ainda mais produtos aqui!' />
    </div>
  );
}

export default ProductsGrid