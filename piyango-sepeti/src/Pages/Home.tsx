import '../global.css'
import ActiveDrawList from '../Components/ActiveDrawList';
import DrawList from '../Components/DrawList';

const Home = () => {
  return (
    <div className='containerHome'>
      <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/ebe88147-cfcb-4b2f-8033-ecb6554191c6_resize-slider.webp" alt="duyuru" className='imgDuyuru'/>
      <div className='circleImgs'>
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/ebe88147-cfcb-4b2f-8033-ecb6554191c6_resize-thumb-min.webp" alt="1" className='circleImg'/>
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/7b922a0e-e4bd-4258-9def-88a4580af77e_resize-thumb-min.webp" alt="2" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/e7ab97ab-5a67-41a8-8284-9d199d5c72dc_resize-thumb-min.webp" alt="3" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/22c61e60-ef0e-435d-a239-2537ae338c49_resize-thumb-min.webp" alt="4" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/62f3bc43-c58c-467e-a610-3e84ebe9a004_resize-thumb-min.webp" alt="5" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/5a326773-4d5d-4d19-99fc-14d273cbd88d_resize-thumb-min.webp" alt="6" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/7caecffb-64d1-4009-b1ac-728f39eb8859_resize-thumb-min.webp" alt="7" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/88d3ec90-4de0-4175-9c95-3ca39c88b588_resize-thumb-min.webp" alt="8" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/d7f95b40-d002-465e-a1b4-68143c1b0abc_resize-thumb-min.webp" alt="9" className='circleImg' />
        <img src="https://cdn.piyangosepeti.com.tr/cdn/mpi-ps/fcae69e1-0740-4617-b173-fc24fd6369b0_resize-thumb-min.webp" alt="10" className='circleImg' />
      </div>
      <ActiveDrawList/>
      <DrawList/>
    </div>
  )
}

export default Home;