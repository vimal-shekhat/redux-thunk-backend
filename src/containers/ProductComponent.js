import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddCarts } from "../redux/actions/cartAction";

const ProductComponent = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.allProducts.products);
  const onAddCart = (product) => {

    console.log(product)

    dispatch(AddCarts({ ...product }))
  }

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>

        <div className="ui link cards">

          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>

            <div className="content">
              <div className="header"><Link to={`product/${id}`}>{title}</Link></div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <div style={{ display: "flex", gap: "0 12px" }} className="action">
                <div className="visible content" onClick={() => onAddCart(product)}>Add to Cart</div>
                Detail
              </div>

            </div>
          </div>
        </div>

      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
