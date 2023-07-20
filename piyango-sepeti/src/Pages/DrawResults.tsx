import Select from 'react-select'

const DrawResults = () => {

  const years = [
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' }
  ]

  const months = [
    { value: 'ocak', label: 'Ocak' },
    { value: 'subat', label: 'Şubat' },
    { value: 'mart', label: 'Mart' },
    { value: 'nisan', label: 'Nisan' },
    { value: 'mayis', label: 'Mayıs' },
    { value: 'haziran', label: 'Haziran' },
    { value: 'temmuz', label: 'Temmuz' },
    { value: 'agustos', label: 'Ağustos' },
    { value: 'eylul', label: 'Eylül' },
    { value: 'ekim', label: 'Ekim' },
    { value: 'kasim', label: 'Kasım' },
    { value: 'aralik', label: 'Aralık' }
  ]

  return (
    <div className='drawResultsAllSite'>
      <div className='drawResults'>
        <h1 className='drawResultsH1'>Çekiliş Sonuçları</h1>
        <div className='drawResultsContainer'>
          <form className='filterForm' action="#" autoComplete="off">
            <div className='dropDown'>
              <div className='label'>Yıl</div>
              <Select defaultInputValue={'2023'} classNamePrefix="select" options={years} className='select' />
            </div>
            <div className='dropDown'>
              <div className='label'>Ay</div>
              <Select defaultInputValue={'Ocak'} classNamePrefix="select" options={months} className='select' />
            </div>
            <div className='filterButton'>Filtrele</div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DrawResults;