import React from 'react';
import Product from "./components/Product/Product.js";
import ProductImage from "./images/product1.png";

const App = () => {

  // Obv as props... 
  const productData = {
    title: 'Clean Protein Dog Food ',
    description: '(Large Bag, 18lb)',
    featureTitle: 'Subscribe & Save',
    featureCta: 'Change to subscription',
    featureDescription: {
      start: 'Get',
      shipping: 'free shipping',
      shippingPrice: '$14.00',
      content: 'and save an additional',
      end: 'today'
    },
    productPrice: '$70.00',
    productImage: ProductImage,
    featureOption: {
      regular: 'Deliver',
      bold: 'Every 4 Weeks'
    },
  }
  const { title, description, featureTitle, featureCta, featureDescription, productPrice, featureOption, productImage } = productData;

  return (
    <>
      <Product
        title={title}
        description={description}
        featureTitle={featureTitle}
        featureCta={featureCta}
        featureDescription={featureDescription}
        productPrice={productPrice}
        featureOption={featureOption}
        productImage={productImage} />
    </>
  );

}
export default App;