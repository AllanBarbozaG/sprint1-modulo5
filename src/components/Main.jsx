import '../style/Main.css';
import MensagemSobreOAlgoritmo from './MensagemSobreOAlgoritmo';
import FormSubscription from './FormSubscription';
import ProductsSection from './ProductsSection';
import ShareProductsForm from './ShareProductsForm';

function Main() {
  return (
    <>
      <main className="main">

        <div className='messageFormDiv'>
          <MensagemSobreOAlgoritmo />
          <FormSubscription />
        </div>

        <ProductsSection />

        <ShareProductsForm />



      </main>
      <div className="backGroundColorFooterCut">
        
      </div>
      <div className="backGroundColorFooter"></div>

    </>
  )
}

export default Main