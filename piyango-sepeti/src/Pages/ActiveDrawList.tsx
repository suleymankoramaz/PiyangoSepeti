import DrawCard from '../Components/DrawCard';
import '../global.css'
import data from '../temporary/draws.json';

const ActiveDrawList = () => {

  return (
    <div className='draws'>
      <h1 className='drawsH1'>AKTİF ÇEKİLİŞLER</h1>
      <div className='drawsContainer'>
        {data.draws.map((draw) => (
          <DrawCard key={draw.id} draw={draw}/>
        ))}
      </div>  
    </div>
  );
};

export default ActiveDrawList; 