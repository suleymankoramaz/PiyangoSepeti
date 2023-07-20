import { Link } from "react-router-dom"
import '../global.css'
import logo from '../Assets/logo.gif'
import piyangosepeti from '../Assets/piyangosepetiTXT.png'
import sepet from '../Assets/sepet.png'

const NavbarComp = () => {
  return (
    <nav className="navbar">
      <div className="navbarDiv">
        <img src={logo} alt="piyangosepeti" className="logoImg" />
        <Link to="/" className="logo">
          <img src={piyangosepeti} alt="piyangosepeti" className="piyangoSepetiTXT" />
        </Link>
        <div>
          <ul className="navbarUl">
            <li className="navbarLi">
              <Link to="/cekilisler">Çekilişler</Link>
            </li>
            <li className="navbarLi">
              <Link to="/cekilis-sonuclari">Çekiliş Sonuçları</Link>
            </li>
            <li className="navbarLi">
              <Link to="/">Bilet Sorgulama</Link>
            </li>
            <li className="navbarLi">
              <Link to="/">Bayilerimiz</Link>
            </li>
            <li className="navbarLi">
              <Link to="/">Puan Kazan</Link>
            </li>
          </ul>
        </div>
        <div>
          <button className="navbarButton">
            <Link to="/">
              GİRİŞ YAP / KAYIT OL
            </Link>
          </button>
        </div>
        <div className="sepet">
          <img src={sepet} alt="sepet" />
        </div>
      </div>
    </nav>
  )
}

export default NavbarComp