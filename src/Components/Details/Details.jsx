import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    const { id, category } = useParams();

    const idInt = parseInt(id)
    const donate = details.find(donate => donate.id === idInt)
    console.log(donate)


    // const idInt = parseInt(id);
    // const selectedDonation = details ? details.find(donation => donation.id === idInt) : null;

    // if (!details || !selectedDonation) {
    //     return <div>Loading...</div>; // You can replace this with your loading component
    // }

    return (
        <div className="max-w-full ">
            <h1>job details</h1>
            <div className="relative">
                <img className="w-full " src={donate.image} alt="" />
                <div className="absolute bottom-0 w-full text-left bg-[#0B0B0B80]">
                    <button className="py-4 px-7 ml-9 my-9 bg-[#FF444A] text-white  text-xl font-semibold rounded-lg">Donate ${donate.price}</button>
                </div>
            </div>
            <h1 className="text-4xl font-bold text-left mt-14">{donate.title}</h1>
            <p className="mt-6 text-left">{donate.details}</p>

        </div>
    );
};

export default Details;
