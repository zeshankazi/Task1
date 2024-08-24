import React from 'react';
import HeaderComponent from './Header';
import AuthorsComponent from './Author';
import FooterComponent from './Footer';
import DottedGrid from './DottedGrid'

const LandingPage = () => {
  return (
    <div  className="max-w-screen-md min-h-screen m-auto grid  grid-cols-[1fr_30px] sm:grid-cols-[250px_1fr_40px]"
    style={{
      backgroundImage: `url(${import.meta.env.BASE_URL}/images/background.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    >
<div className=' items-end max-h-[15%] hidden sm:flex '> 
 
  <DottedGrid/>
 
</div>
<div className='flex flex-col '>
  <div className='flex items-end min-h-[15%] w-full justify-center sm:w-auto sm:justify-start'>
  <HeaderComponent/>
  </div>

<div className='flex flex-grow items-center w-full justify-center sm:w-auto sm:justify-start '>
<AuthorsComponent/>
</div>
<div className='flex items-start min-h-[15%] w-full justify-center sm:w-auto sm:justify-start'>
<FooterComponent/>
</div>
</div>

<div className='flex flex-col  justify-between'>
<span className='bg-blue-300 w-full h-full' />
<span className='bg-blue-500 w-full h-full'/>
<span className='bg-blue-900 w-full h-full'/>
</div>
    </div>

  );
};

export default LandingPage;
