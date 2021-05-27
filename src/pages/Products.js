import { Link } from 'react-router-dom';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>The Products page</h2>
      <ul>
        <li>
          <Link to="/products/book">A book</Link>
        </li>
        <li>
          <Link to="/products/carpet">A Carpet</Link>
        </li>
        <li>
          <Link to="/products/online-course">An online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
