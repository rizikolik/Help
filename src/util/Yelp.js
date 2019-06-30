const apiKey="bEVZB646Qz011PtlsFgzXwn5i0TSsobvgOLxyy99MTM03pRx8w1pz_HRs4ctPlR2TumPV_PFk0Lmemy-3tU9qf15Nk_sPL-Rf9UJzRiSolSFY3UAd-9wV2F40_oXXXYx";

let Yelp={


search(term,location,sortBy){
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{ 
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
          }).then(response=>{ return response.json()}).then(jsonResponse=>{
          if(jsonResponse.businesses){
             return  jsonResponse.businesses.map(business=>{
                 return {
                     id:business.id,
                    imageSrc:business.image_url,
                    name:business.name,
                    address:business.adress,
                    city:business.city,
                    state:business.state,
                    zipCode:business.zipCode,
                    category:business.category,
                    rating:business.rating,
                    reviewCount:business.reviewCount
                }
             });
          }
      })
}
}
export default Yelp;