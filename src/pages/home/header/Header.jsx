import logo from '../../../assets/logoPokemon.png';
import css from './header.module.scss';

export default function Header() {
  return (
<nav className={css.header}>
  <div className={css.div_header}>
    <div className={css.div_logo}>
      <img src={logo} alt="logo" />
    </div>
    <div className={css.div_search}>
      <input type="search" />
    </div>
  </div>
</nav>
  );
}

