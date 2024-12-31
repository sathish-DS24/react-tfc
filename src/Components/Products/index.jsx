import React from 'react';
import Icon1 from '../../images/healthsip.png';
import Icon2 from '../../images/classicbiriyanipowder.png';
import Icon3 from '../../images/multicusinegarammasala.jpeg';
import Icon4 from '../../images/idlichillipowder.jpeg';
import Icon5 from '../../images/multimixhealthflourwomen.png';
import Icon6 from '../../images/multimixhealthflourkids.png';
import Icon7 from '../../images/multimixhealthflouradults.png';
import Icon8 from '../../images/multimixhealthflourdiabetic.png';
import { ProductsContainer,
        ProductsH1,
        ProductsWrapper,
        ProductsCard,
        ProductsIcon,
        ProductsH2,
        ProductsP
        } from './ProductElements';    

const Products = () => {
    return (
        <ProductsContainer id="products">
            <ProductsH1>Products</ProductsH1>
            <ProductsWrapper>
                <ProductsCard>
                    <ProductsIcon src={Icon1} />
                    <ProductsH2>The Healthy Sip</ProductsH2>
                    <ProductsP>This is the right alternative for those who'd like to Say "good bye" to TEA / COFFEE/MILK PRODUCT HIGHLIGHTS
                               * A VARIANT OF TRADITIONAL SUKKU MALLI COFFEE
                               * IMPROVES ORAC, IMMUNITY, MEMORY, VISION
                               * REDUCES TOXINS, STRESS, INSOMNIA
                               * REGULATES CHOLESTEROL, BP, SUGAR
                               * STRENGTHENS BONES, MUSCLES, NERVES
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon2} />
                    <ProductsH2>TFC's CLASSIC BIRYANI POWDER</ProductsH2>
                    <ProductsP>The right choice for those with cravings for a classic flavour of biryani. 
                               * CLASSIC TASTE
                               * RICH FLAVOUR
                               * UNIQUE AROMA 
                               * HEALTHY SPICES
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon3} />
                    <ProductsH2>TFC's MULTICUISINE GARAM MASALA</ProductsH2>
                    <ProductsP>Why Choose Multi Cuisine Garam Masala?

                                The unique blend of chosen spices in MGM helps.

                                * To Fry potatoes, yam, chicken, mutton, prawns, fishes.
                                * To prepare chicken, mutton gravy.
                                * To prepare potato, chicken, mutton Curry (use this masala along with coriander powder in the ratio of 1:3). This curry goes well with tiffin items - idli, dosa, appam, idiyappam, chapatis, Wheat parathas & maida parathas.
                                * To prepare egg scramble with onions, tomatoes  & Capsicum.
                                * To prepare tangy tomato rice.
                                * To prepare non-veg masala modaks/ dumplings.
                                * To prepare spicy vermicelli biryani veg/ nv.
                                * To prepare spicy wheat broken biryani veg/nv
                                * MAKES MULTIPLE CUISINES
                                * OFFERS HEALTHY EATS
                                * HEALS GUT HEALTH
                                * SAVES COOKING TIME
                    </ProductsP>
                </ProductsCard>
				<ProductsCard>
                    <ProductsIcon src={Icon4} />
                    <ProductsH2>TFC's IDLI CHILLI POWDER</ProductsH2>
                    <ProductsH2>(BLACK GRAM, SESAME, GARLIC POWDER)</ProductsH2>
                    <ProductsP>
                                * Black Gram Powder Rice / Uland Ogare. 
                                * Allow 1 cup of cooked rice to cool. 
                                * Dry roast a small piece of tamarind, ½ tsp cumin and 2 tbsp of grated coconut.
                                * Grind this mixture into a Coarse a powder.
                                * Heat sesame oil (4-5 tbsp) in a powder pan & saute ½ tsp mustard, ¼  tsp cumin, a pinch of asafoetida, a spring of curry leaves, ½ tsp cashew pieces and 2 red chillies.
                                * Add the Coarsely ground powder and 3 tbsp of TFC’s Idli chilli powder Mix well.i
                                * Add previously cooked rice and mix thoroughly. Serve hot.
                                * FILLED WITH NUTRITION
                                * USED WITH IDLI, DOSA, UTHAPPAM & HOT RICE
                                * STRENGTHENS BONES
                                * USED TO MAKE BLACK GRAM RICE
                                * BALANCES HORMONES.
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon5} />
                    <ProductsH2>Multimix Health Flour (Women)</ProductsH2>
                    <ProductsP>A perfect combination of chosen traditional red & samba rice varieties with whole black gram.
                                * Stronger Bones, Nerves, Joints & Internal Organs.
                                * Improves immunity, haemoglobin.
                                * Rich in antioxidants, vitamins, minerals
                                * Balances Hormones.
                                * Treats Uterus Disorders.
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon6} />
                    <ProductsH2>Multimix Health Flour (Kids 2-12 Yrs)</ProductsH2>
                    <ProductsP>A nutritious blend of traditional black & red rice varieties with roasted whole bengal gram.
                                * Improves brain function, Stamina.
                                * Strengthens nerves, bones, joints.
                                * Rich in antioxidants, Protein, Fibre, Vitamins, Minerals.
                                * Boosts immunity.
                                * Provides stable energy
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon7} />
                    <ProductsH2>Multimix Health Flour (Adults)</ProductsH2>
                    <ProductsP>A right combo of 4 types of red rice varieties with black rice & whole green gram.
                                * Storehouse of antioxidants, vitamins, Minerals, protein etc..
                                * Removes toxins from the liver.
                                * Promotes heart health, immunity. 
                                * Improves stamina, metabolism
                                * Strengthens muscles / nerves / bones
                    </ProductsP>
                </ProductsCard>
                <ProductsCard>
                    <ProductsIcon src={Icon8} />
                    <ProductsH2>Multimix Health Flour (Diabetic/Heart Healthy)</ProductsH2>
                    <ProductsP>A healthy fusion of traditional black, red & samba rice varieties with barley.
                                * Powerhouse of energy stamina, metabolism, immunity.
                                * Reduces toxins, stress, cholesterol.
                                * Fights infections, cancers.
                                * Improves functions of brain, heart, liver and kidney.
                                * Relaxes muscles & nerves; strengthens bones.
</ProductsP>
                </ProductsCard>
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Products