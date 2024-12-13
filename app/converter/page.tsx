"use client"

import React, { useState } from 'react';



export default function main() {
    const [inputValue, setInputValue] = useState('');
    const [outputValue, setOutputValue] = useState<number | string>('');
    console.log("Beans")
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleButtonClick = () => {
        const numberValue = parseInt(inputValue);
        // Setting the value to Int
        if (!isNaN(numberValue)) {
            // Check for Int values and create conversion
            const convertedValue = ("$" + numberValue * 1.268);
            setOutputValue(convertedValue.toString());
        } else {
            // Error Check for non int values
            setOutputValue('Invalid input');
          }
    };
    return (
    <div className="font-[family-name:var(--font-geist-mono)]">
        <main>
            <div className="bg-gray-600 p-12">
                <div>
                    <h1 className="transition delay-100 duration-300 ease-in-out hover:translate-x-3 hover:text-indigo-300 font-bold p-1"><a href="http://localhost:3000">Home Page</a></h1>
                </div>
                <div> 
                    <h1 className="transition delay-100 duration-300 ease-in-out hover:translate-x-3 hover:text-indigo-300 p-1"><a target="_blank" href="https://github.com/Imtiyaz-Rahman/Formative-Project-Currency-Slinger">Git Hub Page</a></h1>
                </div>
                <div>
                    <h1 className="transition delay-100 duration-300 ease-in-out hover:translate-x-3 hover:text-indigo-300 p-1"><a target="_blank" href="https://youtu.be/JjjNa8khhww?si=bK93IANIrxU5aO29?&autoplay=1&mute=1">Something Funny</a></h1>
                </div>
                    </div>
                        <div className="flex items-center justify-center w-full h-96">
                            <div className="bg-indigo-500 p-6 rounded-lg w-full max-w-md">
                                <div className="bg-gray-600">
                                    <div className="flex justify-center bg-gray-600 p-3 text-black">
                                        <input className="text-center" type="text" placeholder="£ Enter Pounds"
                                        value={inputValue}
                                        onChange={handleInputChange} />
                                    </div>
                                    <div>
                                        <p className="flex justify-center text-white bg-gray-600 p-3">{outputValue}</p>
                                    </div>
                                    <div>
                                    <button
                                        className="flex justify-center bg-gray-500 hover:bg-blue-700 text-white font-bold br-10 p-5 py-2 px-4 rounded bottom-4 right-4"
                                        onClick={handleButtonClick}
                                    >Process</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div>
            </div>
        </main>
        <footer>
            <div>

            </div>
        </footer>
    </div>)
}