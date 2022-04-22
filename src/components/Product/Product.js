import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  color: white;
  border-color: #C6DAE7;
  width:100%;
  border: 2px solid #C6DAE7;
  box-sizing: border-box;
  border-radius: 6px;
  max-height: 174px;
  margin: 0 auto;
  max-width: 1162px;
  padding: 21px 23px 21px 34px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  margin: 49px auto;

`;

const SectionContainer = styled.div`
    display: flex;
`;

const SectionFeatured = styled.div`
    margin-top: 2px;
    width: 100%;
    max-width: 455px;
    max-height: 132px;
    height: 100%;
    background: #F2F3F4;
    padding: 23px 8px 19.91px 17px;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    display:flex;
`;

const FeatureTitle = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 17px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    letter-spacing: -0.01em;
    color: #54BB53;
    margin: 0;
`;

const FeatureSubscriptionCta = styled.button`
    width: 206px;
    padding: 6.54px 20px;
    height: 28.09px;
    background: #004986;
    color: white;
    border: 0;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    justify-content: center;
`;

const FeatureOptionCta = styled.button`
    width: 206px;   
    background: none;
    border: 0;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    display: flex;
    line-height: 15px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 3px 0;
`;

const FeatureOptionTextRegular = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #004986;
    margin: 0;
`;

const FeatureOptionTextBold = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #004986;
    font-weight: bold;
    margin:0 0 0 5px;
`;

const FeatureDescription = styled.text`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: flex-end;
    letter-spacing: -0.01em;
    color: #13294B;
`;

const TextBold = styled.strong`
    font-weight: bold;
    display: contents;
`;

const Div = styled.div`

  `;

const Quantity = styled.div`
    background: #FFFFFF;
    border: 1.63019px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 6.52075px;
    height: 39px;
    width: 97px;
    left: 0px;
    top: 0px;
    border-radius: 6.520754814147949px;
    color: black;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-content: space-evenly;
`;

const QuantityAmount = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
`;

const QuantityRemove = styled.button`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-decoration-line: underline;
    color: #9B2653;
    border: 0;
    background: none;
    margin: 0 0 0 12px;
`;
const QuantityWrapper = styled.div`
    display: flex;
`;
const QuantityCta = styled.button`
    border: 0;
    background: none;
    font-size: 20px;
    font-weight: 100;
`;

const Image = styled.img`
    margin: 0 23px 0 0;
  `;

const Text = styled.p`
    display: block;
    color:black;
  `;

const Title = styled.p`
    font-family: Gotham;
    font-size: 24px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #004986;
    margin: 0 0 7px 0;
`;

const Description = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 13px;
    display: flex;
    align-items: center;
    color: #004986;
    margin: 0 0 18px 0;
`;

const SectionPrice = styled.div`
    display: flex;
    align-items: flex-start;
    height: 170px;
`;

const ProductPrice = styled.p`
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    display: flex;
    align-items: center;

    color: #000000;
`;

const Button = styled.button``;


const DownArrow = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10H7Z" fill="#004986" />
    </svg>
);

const Product = ({
    title,
    description,
    featureTitle,
    featureCta,
    featureDescription,
    productPrice,
    productImage,
    featureOption,
    ...props }
) => {
    // All the JSX will go inside this return
    return (
        <Container>
            <SectionContainer>
                <Image
                    alt="Clean Protein Dog Food"
                    width="100"
                    height="100"
                    src={productImage} />
                <Div>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                    <QuantityWrapper>
                        <Quantity>
                            <QuantityCta onClick={() => { alert('Minus') }}> - </QuantityCta> <QuantityAmount>1</QuantityAmount><QuantityCta onClick={() => { alert('Plus') }}> + </QuantityCta>
                        </Quantity>
                        <QuantityRemove>Remove</QuantityRemove>
                    </QuantityWrapper>
                </Div>
            </SectionContainer>
            <SectionFeatured>
                <Div>
                    <FeatureTitle>{featureTitle}</FeatureTitle>
                    <FeatureOptionCta>
                        <FeatureOptionTextRegular>
                            {featureOption.regular}
                            <FeatureOptionTextBold>
                                {featureOption.bold}
                            </FeatureOptionTextBold>
                        </FeatureOptionTextRegular>
                        <DownArrow />
                    </FeatureOptionCta>
                    <FeatureSubscriptionCta>{featureCta}</FeatureSubscriptionCta>
                </Div>
                <Div>
                    <FeatureDescription>
                        {featureDescription.start}
                        <TextBold>{` ${featureDescription.shipping} `}</TextBold>
                        {`${featureDescription.content} `}
                        <TextBold>{` ${featureDescription.shippingPrice} `}</TextBold>
                        {featureDescription.end}
                    </FeatureDescription>
                </Div>
            </SectionFeatured>
            <SectionPrice>
                <ProductPrice>{productPrice}</ProductPrice>
            </SectionPrice>
        </Container>
    )
}

export default Product;