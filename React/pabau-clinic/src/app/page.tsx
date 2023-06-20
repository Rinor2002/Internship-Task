'use client'
import Image from 'next/image';
import { useState } from 'react';
export default function Home() {
  const [currentStep, setCurrentStep] = useState('1/2');
  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionSelection = (optionName) => {
    setCurrentStep('2/2');
    setSelectedOption(optionName);
  };

  const handleBack = () => {
    setCurrentStep('1/2');
    setSelectedOption(null);
  };
  return (
   <main>
    <header>
      <h2><strong>Choose Service</strong></h2>
      <p>{currentStep}</p>
    </header>
    <section>
      { selectedOption ? 
      (
      <form>
        <button type="button" className='optionButton' onClick={handleBack}>
          Back
        </button>
        <h2>Selected Option: {selectedOption}</h2>
      </form>
      ) 
      : 
      (
      <form>
        <button type="button" className='optionButton' onClick={() => handleOptionSelection('Dermal Fillers')}>
          <div>
            <Image 
            src="/dermalFillers.jpeg"
            alt="noImage"
            width={30}
            height={30} />
            <span>Dermal Fillers</span>
          </div>
          <span>&gt;</span>
        </button>
        <button type="button" className='optionButton' onClick={() => handleOptionSelection('Secret RF')}>
          <div>
            <Image 
            src="/secretRF.jpeg"
            alt="noImage"
            width={30}
            height={30} />
            <span>Secret RF</span>
          </div>
          <span>&gt;</span>
        </button>
        <button type="button" className='optionButton' onClick={() => handleOptionSelection('Facials')}>
          <div>
            <Image 
            src="/facials.jpeg"
            alt="noImage"
            width={30}
            height={30} />
            <span>Facials</span>
          </div>
          <span>&gt;</span>
        </button>
        <button type="button" className='optionButton' onClick={() => handleOptionSelection('Fat Dissolve')}>
          <div>
            <Image 
            src="/fatDiss.jpeg"
            alt="noImage"
            width={30}
            height={30} />
            <span>Fat Dissolve</span>
          </div>
          <span>&gt;</span>
        </button>
      </form>
      )}
      <span className='consultation'>
        Not sure about consultation type? Please, call - <strong> 0203 7959063</strong>
      </span>
    </section>
    <footer>
      <span>Powered by Pabau</span>
    </footer>
   </main>
  )
}
