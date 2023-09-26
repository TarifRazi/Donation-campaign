const getStoredDonations =() =>{
    const donationCollect = localStorage.getItem('donationsAmount');
    if(donationCollect){
        return JSON.parse(donationCollect);
    }
    return [];
}

const saveDonationData = id =>{
    const donationCollect = getStoredDonations();
    const exist = donationCollect.find(donationId => donationId === id);
    if(!exist){
        donationCollect.push(id);
        localStorage.setItem('donationsAmount', JSON.stringify(donationCollect))
    }
}

export {getStoredDonations, saveDonationData}