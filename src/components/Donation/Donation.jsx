import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../../Utilities/localStorage";
import DonationDetails from "../DonationDetails/DonationDetails";

const Donation = () => {
    const data = useLoaderData();
    const [donatedCarts, setDonatedCarts] = useState([]);
    const [dataLength, setDataLength] = useState(4);
 
    // get stored IDs from local Storage
    useEffect(() => {
        if (data.length > 0) {
            const storedIDs = getStoredCard();
            
            // way: 01
            const donatedCategories = data.filter(cat => storedIDs.includes(cat.id));
            
            setDonatedCarts(donatedCategories);
        }
    }, [data]);

    return (
        <div className="container mx-auto my-12 px-3">
            <h2>Total Donated categories: {donatedCarts.length} </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    donatedCarts.slice(0, dataLength).map( category => <DonationDetails
                    key={category.id}
                    catObj = {category}
                    ></DonationDetails>)
                }
            </div>
            <div className={`flex justify-center mt-8 ${dataLength === donatedCarts.length && "hidden"}`}>
                <button 
                 onClick={() => setDataLength(donatedCarts.length)}
                 className="btn btn-success px-4 text-white">Show More</button>
            </div>
        </div>
    );
};

export default Donation;