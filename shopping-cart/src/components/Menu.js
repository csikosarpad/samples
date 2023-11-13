/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../redux/cartSlice';

const Menu = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isShowCart, setIsShowCart] = useState({});

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const onToggleShowCart = (e) => {
    setIsShowCart(!isShowCart);
  };
  /*const onShowCart = (e) => {
    setIsShowCart(true);
  };
  const onHideCart = (e) => {
    setIsShowCart(false);
  };*/

  return (
    <header>
      <h3>Application</h3>
      <nav>
        <ul>
          <li>
            <i className='total-quantity' onClick={onToggleShowCart}>
              {getTotal().totalQuantity || 0}
            </i>
            <span className='shopping-cart' href='#' onClick={onToggleShowCart}>
              Shopping Cart
            </span>
          </li>
        </ul>
        {isShowCart && (
          <div className='cart-display'>
            {getTotal().totalQuantity === 0 && (
              <h3>You have no items in your cart</h3>
            )}
            {getTotal().totalQuantity > 0 && (
              <>
                <h3>
                  You have {getTotal().totalQuantity || 0} items in your cart
                </h3>
                <table className='cart-table'>
                  <tr>
                    <th>Items</th>
                    <th className='right-align'>Units</th>
                    <th className='right-align'>Price</th>
                  </tr>
                  {cart?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          {item.title}
                          <span
                            className='btn btn-remove'
                            onClick={() => dispatch(removeItem(item.id))}
                          >
                            remove
                          </span>
                        </td>
                        <td className='right-align'>
                          <span
                            className='btn'
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </span>
                          <span
                            className='btn'
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </span>
                          <span>{item.quantity}</span>
                        </td>
                        <td className='right-align'>
                          {formatPrice(item.price)}
                        </td>
                      </tr>
                    );
                  })}
                  <tr className='total-row'>
                    <td colspan='2'>Total order value</td>
                    <td className='right-align'>
                      {formatPrice(getTotal().totalPrice)}
                    </td>
                  </tr>
                  <tr>
                    <td colspan='3'>
                      <button className='btn btn-checkout'>Checkout</button>
                    </td>
                  </tr>
                </table>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Menu;
