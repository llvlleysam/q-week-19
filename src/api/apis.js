import { BaseURL } from "../Constant/Baseurl";
import httpServes from "../Servies/ServiesUser";

export async function getDataUser(){
    const response= await httpServes.get(`${BaseURL}/users`)
    return response.data
}

export async function postDataUser(newUser){
    const response= await httpServes.post(`${BaseURL}/users`,newUser)
}
