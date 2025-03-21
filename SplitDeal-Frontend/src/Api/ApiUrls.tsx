const baseUrl = "https://splitdeal.onrender.com/api/"

const ApiUrls = {

    login: `${baseUrl}auth/login`,
    register: `${baseUrl}auth/register`,
    locationSet:`${baseUrl}user/update-location`,
    getCategory:`${baseUrl}category/get-categories`,
    getDeal:`${baseUrl}deal/get-deals-by-category`,
    getSubCategory:`${baseUrl}sub-category/get-sub-categories`,
    createGroup:`${baseUrl}group/create-group`

}

export default ApiUrls