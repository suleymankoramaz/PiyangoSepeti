import { ReactNode } from 'react'

type Props = {
  children: ReactNode
};

const Layout = ( { children } : Props ) => {
  return (
    <div className='pageChild'>
      {children}
    </div>  
  )
};

export default Layout;