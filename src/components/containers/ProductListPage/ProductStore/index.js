import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../../../../actions";
import { generatePublicUrl } from "../../../../urlConfig";

const  ProductStore=() =>{
    const { slug } = useParams();
    const Product = useSelector((state) => state.product);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getProductsBySlug(slug));
    }, [slug]);

    return (
        <>
        {Product.productsByPrice.map(({ price, products }, i) => (
            <section key={i} className="d-flex mx-2 my-4  flex-column bg-white">
              <div className="productsByPrice-heading  d-flex px-4 py-3 justify-content-between">
                <h5>
                  {slug} Mobiles under {price / 1000}K
                </h5>
                <button>View All</button>
              </div>
    
              <div className="d-flex py-3 justify-content-between overflow-auto">
                {products.map((product, i) => (
                  <div
                    key={i}
                    className="item px-4 d-flex align-items-center flex-column justify-content-evenly"
                  >
                    <div className="d-flex w-100 justify-content-betwee mb-2n mb-2">
                      <div className="d-flex img-box justify-content-center">
                        <img
                          src={generatePublicUrl(product.images[0].img)}
                          alt={product.name}
                        />
                      </div>
    
                      <i className="fa fa-heart text-muted"></i>
                    </div>
    
                    <div className="mb-2 text-center">
                      <div className="mb-2">{product.name}</div>
                      <div className="d-flex justify-content-center">
                        <span className=" rounded-3 mx-1 px-1 text-white bg-success-2 d-flex align-items-center">
                          <span>4.2 </span>
                          <i className="fas fa-star"></i>
                        </span>
                        <span>(23244)</span>
                      </div>
                      <div className="d-flex mb-2 justify-content-evenly">
                        <span>{product.price}</span>
                        <s>{product.price}</s>
                        <small>27% off</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          </>
    )
}

export default ProductStore
