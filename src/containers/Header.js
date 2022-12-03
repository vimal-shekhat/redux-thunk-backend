import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {

  const items = useSelector((state) => state.carts);
  const cartItm = items?.carts;
  console.log(cartItm)

  // dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2><Link to="/">Ecommarce</Link></h2>


      </div>
      <div className="menuHeader">

        <Link to={`/carts/list`}> Cart {cartItm?.length > 0 ? (<span>{cartItm.length}</span>) : null}</Link>
      </div>
    </div>
  );
};

export default Header;
