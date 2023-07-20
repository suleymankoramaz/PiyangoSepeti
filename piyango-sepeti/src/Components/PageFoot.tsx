import { Link } from 'react-router-dom';
import logo from '../Assets/logo.gif'
import piyangosepeti from '../Assets/piyangosepetiTXT.png'

const PageFoot = () => {
  return (
    <div className='pageFootContainer'>
      <div className='pageFootContainerItem'>
        <div className='pageFootHelp'>
          <div className='pageFootLogo'>
            <div>
              <img src={logo} alt="piyangosepeti" className="footLogoImg" />
            </div>
            <div>
              <Link to="/" className="logo">
                <img src={piyangosepeti} alt="piyangosepeti" className="footPiyangoSepetiTXT" />
              </Link>
            </div>
          </div>
          <div className='pageFootHelperItemEposta'>
            <div className='pageFootEposta'>E-POSTA ADRESİ</div>
            <div className='pageFootEpostaContent'>info@piyangosepeti.com.tr</div>
          </div>
          <div className='pageFootHelperItemDestek'>
            <div className='pageFootDestekHatti'>DESTEK HATTI</div>
            <div className='pageFootDestekHattiContent'>0850 260 11 60</div>
          </div>
        </div>
        <div className='pageFootMenu'>
          <div className='pageFootMenuItem'>
            <p className='footpBlock'>Eşya Piyangosu</p>
            <div className='pageFootSubMenu'>
              <div className='pageFootSubMenuItem'>Aktif Çekilişler</div>
              <div className='pageFootSubMenuItem'>Sonuçlar</div>
              <div className='pageFootSubMenuItem'>Bilet Sorgulama</div>
              <div className='pageFootSubMenuItem'>Sorumlu Oyun</div>
              <div className='pageFootSubMenuItem'>Çekilişlerimiz Hakkında</div>
            </div>
          </div>
          <div className='pageFootMenuItem'>
            <p className='footpBlock'>Hakkımızda</p>
            <div className='pageFootSubMenu'>
              <div className='pageFootSubMenuItem'>Milli Piyango İdaresi</div>
              <div className='pageFootSubMenuItem'>106 Dijital Hizmetler vs Şans Oyunları A.Ş.</div>
            </div>
          </div>
          <div className='pageFootMenuItem'>
            <p className='footpBlock'>Kurallar</p>
            <div className='pageFootSubMenu'>
              <div className='pageFootSubMenuItem'>Üyelik Sözleşmesi</div>
              <div className='pageFootSubMenuItem'>Çerez Politikası</div>
              <div className='pageFootSubMenuItem'>KVKK İlgili Kişi Başvurusu</div>
              <div className='pageFootSubMenuItem'>Kurallar</div>
            </div>
          </div>
          <div className='pageFootMenuItem'>
            <p className='footpBlock'>Yardım</p>
            <div className='pageFootSubMenu'>
              <div className='pageFootSubMenuItem'>İletişim</div>
              <div className='pageFootSubMenuItem'>Sık Sorulan Sorular</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageFoot;