import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddCarts, RemoveCarts } from '../redux/actions/cartAction';


export default function CartListing() {

    const dispatch = useDispatch();
    const removeItem = (id) => {

        dispatch(RemoveCarts(id))
    }
    const addItem = (product) => {

        dispatch(AddCarts({ ...product }))
    }

    const items = useSelector((state) => state.carts);
    const cartItems = items?.carts;
    let total = 0;
    return (
        <div className="shopping-cart">

            <div className="title">
                Shopping Bag
            </div>
            {
                cartItems.map((item) => {
                    const { image, title, price, quantity } = item;
                    const itemTotal = price * (quantity || 1)
                    total = total + itemTotal
                    return (
                        <div>
                            <div className="item">
                                <div className="buttons">
                                    <span className="delete-btn"></span>
                                    <span className="like-btn"></span>
                                </div>

                                <div className="image">
                                    <img style={{
                                        height: '100px',
                                        width: '100px'
                                    }} src={image} alt={title} />
                                </div>

                                <div className="description">
                                    <span>Common Projects</span>
                                    <span>Bball High</span>
                                    <span>White</span>
                                </div>

                                <div className="quantity">
                                    <button className="plus-btn" type="button" name="button" onClick={() => removeItem(item.id)}>
                                        -
                                    </button>
                                    <input type="text" name="name" value={quantity} />
                                    <button className="minus-btn" type="button" name="button" onClick={() => addItem(item)}>
                                        +
                                    </button>
                                </div>

                                <div className="total-price">${itemTotal}</div>
                            </div>
                        </div>
                    )
                })
            }


            {total > 0 ? (
                <div className='cartTotal'>
                    <h4> Cart Total </h4>  &nbsp;&nbsp; ${Math.ceil(total)}
                </div>
            ) : (
                <div className="item">
                    <div>
                        <h4> Cart is Empty </h4>
                        <Link to="/"> Back to Home</Link>
                    </div>
                </div>
            )

            }
        </div >
    )
}
