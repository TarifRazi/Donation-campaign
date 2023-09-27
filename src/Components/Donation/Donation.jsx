import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../Store/localStore";
import { Link, useNavigate } from "react-router-dom";

const Donation = () => {
    const donations = useLoaderData();

    const [showAll, setShowAll] = useState(false);
    const [donationGot, setDonationGot] = useState([]);

    useEffect(() => {
        const storedDonationId = getStoredDonations();
        if (donations.length > 0) {
            const gotDonation = [];
            for (const id of storedDonationId) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    gotDonation.push(donation)
                }
            }
            setDonationGot(gotDonation);
        }
    }, [donations]);

    const handleToggleShowAll = () => {
        setShowAll(true);
    };

    return (
        <div>
            <h3>this is donation file {donationGot.length}</h3>

            <div className="grid grid-cols-2 gap-6 ">
                {showAll ? (
                    donationGot.map(donation => (
                        <div className="flex gap-6 text-center items-center " key={donation.id}>
                            <div>
                                <img src={donation.image} alt="" />
                            </div>
                            <div className="text-start">
                                <p>{donation.category}</p>
                                <h2>{donation.title}</h2>
                                <h3>${donation.price}</h3>
                                <Link to={`/details/${donation.id}`}>
                                    <button className="">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    donationGot.slice(0, 4).map(donation => (
                        <div className="flex gap-6 text-center items-center" key={donation.id}>
                            <div>
                                <img src={donation.image} alt="" />
                            </div>
                            <div className="text-start">
                                <p>{donation.category}</p>
                                <h2>{donation.title}</h2>
                                <h3>${donation.price}</h3>
                                <Link to={`/details/${donation.id}`}>
                                    <button className=" text-white px-4 py-2 rounded-md bg-[#F87147]">View Details</button>
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {!showAll && (
                <button onClick={handleToggleShowAll} className="mt-14 bg-[#009444] py-4 px-7 text-white rounded-md">
                    See All
                </button>
            )}
        </div>
    );
};

export default Donation;
