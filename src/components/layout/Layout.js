import classes from './Layout.module.css';

const Layout = (props) => {
  return <section className={classes.main}>{props.children}</section>;
};

export default Layout;
