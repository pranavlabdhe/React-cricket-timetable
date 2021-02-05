const API_KEY = "uEP5a82j4LVrEDg0Yg3RmekjEkl1"

// get all the matches [upcoming matches]

export const getMatches=()=>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`
    return  fetch(url).then((response)=>response.json())
    .catch((error)=>console.log(error));
};
//Load match details
export const getMatchDetail=(id)=>{
    const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`
    return  fetch(url).then((response)=>response.json())
    .catch((error)=>console.log(error));
};
