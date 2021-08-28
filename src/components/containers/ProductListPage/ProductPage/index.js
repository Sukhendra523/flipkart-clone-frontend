import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../../actions";
import { getQuery } from "../../../../utils/getQuery";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from '../../../UI/Card';

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const {page} = useSelector((state) => state.product);


  useEffect(() => {
    const query = getQuery(props.location.search);
    dispatch(getProductPage(query));
  }, []);

  return (
    <div style={{ margin: '0 10px' }}>
        <h3>{page.title}</h3>
        <Carousel
            renderThumbs={() => {}}
        >
            {
                page.banners && page.banners.map((banner, index) => 
                    <a 
                        key={index}
                        style={{ display: 'block' }}
                        href={banner.navigateTo}
                    >
                        <img src={banner.img} alt="" />
                    </a>
                )
            }
        </Carousel>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: '10px 0'
        }}>
            {
                page.products && page.products.map((product, index) => 
                    <Card 
                        key={index}
                        style={{
                            width: '400px',
                            height: '200px',
                            margin: '5px'
                        }}
                    >
                        <img style={{
                            width: '100%',
                            height: '100%'
                        }} src={product.img} alt="" />
                    </Card>
                )
            }
        </div>
    </div>
);
};

export default ProductPage;
