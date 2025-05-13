import GeneralData from "./../../../Constants/GeneralData.json";

export const GetConvites = async () => {
   
    try {
        const {url_api} = GeneralData.links;
        const response = await fetch(`${url_api}/produtos`);
        const data = await response.json();
        if (data.length === 0) {
            return null;
        }
        return data;    

    } catch (error) {
        return null;
    }
    
}
export const GetConvitesById = async (id) => {
    try {
        const {url_api} = GeneralData.links;
        const response = await fetch(`${url_api}/produtos/${id}`);
        const data = await response.json();
       return data;
    } catch (error) {
        console.log("error :",error);
    }
    return null;
}
