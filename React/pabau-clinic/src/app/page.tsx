'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface Option{
  id: number;
  label: string;
  image: string;
}
export default function Home() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<Option>(null);

  const options: Option[] = [
    { id: 1, label: 'Dermal Fillers', image: '/dermalFillers.jpeg' },
    { id: 2, label: 'Secret RF', image: '/secretRF.jpeg' },
    { id: 3, label: 'Facials', image: '/facials.jpeg' },
    { id: 4, label: 'Fat Dissolve', image: '/fatDiss.jpeg' },
    { id: 5, label: 'Growth Factors', image: '/growth.jpeg'},
    { id: 6, label: 'Consultation', image: '/consul.jpeg'},
  ];

  const handleOptionSelection = (option: Option) => {
    setCurrentStep((prevStep: number) => prevStep + 1);
    setSelectedOption(option);
  };

  const handleBack = () => {
    setCurrentStep((prevStep: number) => prevStep - 1);
    setSelectedOption(null);
  };

  return (
    <main>
      <header>
        <h2>
          <strong>Choose Service</strong>
        </h2>
        <p>
          {currentStep}/2
        </p>
      </header>
      <section>
        {/* 
        since we only had to make 2 pages ( 1/2 , 2/2 ), I used a ternary operator
        Of course that would need to be changed if we had more pages
        */}
        {selectedOption ? (
          <form>
            <button type="button" className="optionButton" onClick={handleBack}>
              Back
            </button>
            <h2>Selected Option: {selectedOption.label}</h2>
          </form>
        ) : (
          <form>
            {options.map((option) => (
              <button
                key={option.id}
                type="button"
                className="optionButton"
                onClick={() => handleOptionSelection(option)}
              >
                <div>
                  <Image src={option.image} alt="noImage" width={30} height={30} />
                  <span>{option.label}</span>
                </div>
                <span>&gt;</span>
              </button>
            ))}
          </form>
        )}
        <span className="consultation">
          Not sure about the consultation type? Please call - <strong> 0203 7959063</strong>
        </span>
      </section>
      <footer>
        <span>Powered by Pabau</span>
      </footer>
    </main>
  );
}
