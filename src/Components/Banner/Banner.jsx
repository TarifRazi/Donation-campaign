import React, { useState } from 'react';
import data from "../../../public/donationData.json"
import DonationDetails from './../DonationDetails/DonationDetails';
import Donations from './../Donations/Donations';

const InputComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredComponents, setFilteredComponents] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const filteredData = data.filter(item => item.category === inputValue);
        const components = filteredData.map(item => (
            <DonationDetails key={item.id} donation={item} />
        ));
        setFilteredComponents(components);
        setInputValue(''); // Optionally clear the input value after submitting
        console.log('Input Value:', inputValue);
    };
    let filteredComponentsLength = filteredComponents.length;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="input input-bordered rounded-r-none w-full max-w-xs"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type something..."
                />
                <button type="submit" className="input-bordered bg-[#FF444A] px-6 py-3 rounded-r-xl">Search</button>
            </form>
            <div className='flex justify-evenly mt-10'> 

                {filteredComponentsLength > 0 ? (
                    <>
                        {filteredComponents}
                    </>
                ) : (
                    <Donations clear={false} />
                )}


            </div>
        </div>
    );
};

export default InputComponent;
