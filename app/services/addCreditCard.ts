import axios from "axios"
import { IaddCreditCard } from "./IAddCreditCard"


export const addCreditCard = async (data: IaddCreditCard) => {
	const response = await axios.post("http://localhost:8080/payment/creditCard", data);

	return response;
}