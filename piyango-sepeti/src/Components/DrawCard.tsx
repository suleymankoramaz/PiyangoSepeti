import drawStore from '../Stores/DrawStore';
import { DrawType } from '../Stores/DrawStore';
import '../global.css'

const DrawCard = ({ draw }: { draw: DrawType }) => {

  const handleDrawClick = () => {
    drawStore.setSelectedDraw(draw);
  };

  return (
    <div onClick={handleDrawClick} className='drawCard'>
      <img src={draw.image} alt={draw.title} className='drawImg' />
      <div className='drawContainer'>
        <div className='drawRightBox'>
          <p className='drawTitle'>{draw.title}</p>
          <p className='drawDate'>{draw.date}</p>
        </div>   
        <div className='drawLeftBox'>
          <p className='drawRemain'>{draw.remain}</p>
          <p className='kalanbilet'>KALAN BİLET</p>
        </div>        
      </div>
    </div>
  );
};

export default DrawCard;