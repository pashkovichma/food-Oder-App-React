import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContex from '../../store/cart-contex';
import classes from './HeaderCardButton.module.css';

const HeaderCardButton = props => {
  const cartCtx = useContext(CartContex);
  
  const numberOfCartItems = cartCtx.itms.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
      {numberOfCartItems}
    </span>
  </button>
}

export default HeaderCardButton;