import axios from "axios";
import { BaseURL } from "../Constant/Baseurl";
 const httpServes= axios.create({
    BaseURL
})
export default httpServes