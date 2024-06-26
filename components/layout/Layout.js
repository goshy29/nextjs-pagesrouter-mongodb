import classes from './Layout.module.css';
import Navigation from '../header/Navigation';

function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
