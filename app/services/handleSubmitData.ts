import { IaddCreditCard } from "./IAddCreditCard";
import { addCreditCard } from "./addCreditCard";

export const handleSubmitData = async ({ ownerName, FAN, expiryDate, CVV}: IaddCreditCard) => {
	try{
		const month = expiryDate.substring(0 , 2);
		const year = expiryDate.substring(3, 5);

		const expiryDateFormated = `20${year}-${month}-01`;

		const dataToSend: IaddCreditCard = {
			CVV,
			FAN,
			ownerName,
			expiryDate: expiryDateFormated,
			type: FAN.startsWith("34") || FAN.startsWith("37") ? 
				"AMERICAN_EXPRESS_CARD" : "COMMON_CREDIT_CARD"
		}
	
		await addCreditCard(dataToSend);

		alert("credit card added!");
	}
	catch(err){
		alert("invalid credit card informations!");
	}
};