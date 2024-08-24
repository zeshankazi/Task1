import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      
      <p className="font-lora  text-custom-blue text-xl font-[600] mb-2"> <span className='text-custom-black'>for</span> BoardPro © 2024</p>
      <a href="https://www.boardpro.com" className="flex items-center space-x-2 text-blue-600">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-custom-blue" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-11.707a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3z" clipRule="evenodd" />
  </svg>
  <span className='text-custom-black font-lora'>www.boardpro.com</span>
</a>
     
    </div>
  );
};

export default FooterComponent;
