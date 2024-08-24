import React from 'react';


const Profiles = ({data}) => {
  const imgSrc = `${import.meta.env.BASE_URL}/images/${data?.img}`
  return (
    <div className="m-2">
          <div className="relative w-16 h-16 sm:w-24 sm:h-24">
          <img src={imgSrc} alt="sk" className="w-full h-full" />
{data?.id && (
            <div className="font-lora absolute top-[-6px] left-[-6px] bg-blue-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            by
          </div>
)}
          </div>

    <p className="text-center text-pretty font-lora text-custom-black"><b className=''>{data.fname}</b> <br/> {data.lName}</p>
 
  </div>
  )
}


const AuthorsComponent = () => {
  const authors = [{
    id:"1",
    fname:'Stephen',
    lName:'Broan',
    img:'1st.jpg'
  },
  {
    fname:'Anna',
    lName:'Firdousi',
    img:'2nd.jpg'
  },
  {
    fname:'Gordon',
    lName:'Shah',
    img:'3rd.jpg'
  }

]
  return (
    <div className='flex flex-col'>
<div className='mb-8 flex flex-col w-full justify-center sm:w-auto sm:justify-start'>
<div className="relative">
     <div className="absolute top-0 left-5 w-12  sm:w-20 h-[3px] bg-custom-blue"/>
    <div
  className="bg-transparent font-lora font-[700] text-2xl leading-snug m-2 resize-none focus:outline-none overflow-hidden sm:text-4xl sm:font-[900] text-custom-blue"
  contentEditable
    autoCorrect="off"

>Is Your Constitution Fit for Purpose?</div>
</div>

<div
contentEditable
  className="bg-transparent font-lora font-[300] text-custom-black text-xl leading-8 m-2  resize-none outline-none focus:outline-none overflow-hidden sm:text-3xl sm:font[400] max-w-[350px] w-full" 
>A Practical Guide to Effective Governance</div>

</div>
<div className='inline-flex w-full justify-center sm:w-auto sm:justify-start'>
  {
    authors.map((k)=> <Profiles key={k.fname || Math.random()} data={k} />)
  }
 </div>
    </div>
 
  );
};

export default AuthorsComponent;
