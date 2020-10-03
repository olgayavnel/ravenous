const apiKey = "AyQf3A_bMef35q_tO1oNxpE3rbVf97k5i06k5WFZjxcocVPuFYIVexlb_IPXiF7a_fjiqjV8Lt0t6KQhIdaBD9ni-5X4cNcKc6eCnG58cQ-Y4iOxhwTR0ZvYEvHcXnYx";
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: {
              Authorization: `Bearer ${apiKey}` 
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return {
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      categoty: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.review_count
                    }
                });
            }
        });
    }
};

export default Yelp; 