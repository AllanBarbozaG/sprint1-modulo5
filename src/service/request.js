function request(page){
 return  fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
  .then(response => {
    console.log(response)
    return response.json()

  });
}

export default request