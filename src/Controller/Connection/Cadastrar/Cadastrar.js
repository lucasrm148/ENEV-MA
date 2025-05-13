
import GeneralData from "./../../../Constants/GeneralData.json";
export const Cadastrar = async (user) => {
    try {
        const {url_api} = GeneralData.links;
        console.log("url_api :",url_api);
        const response = await fetch(`${url_api}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        console.log("data :",data);
        if (data.length === 0) {
            return null;
        }
        return data;    

    } catch (error) {
        console.log("error :",error);
        return null;
    }
}
