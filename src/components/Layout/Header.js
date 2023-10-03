import { Fragment } from 'react';
import mealsImage from '../../assets/meals.avif';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactDine</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='a  burger' />
      </div>
    </Fragment>
  );
};

export default Header;
