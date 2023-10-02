import { IaddCreditCard } from "./IAddCreditCard";
import { addCreditCard } from "./addCreditCard";

export const handleSubmitData = async ({ ownerName, FAN, expiryDate, CVV}: IaddCreditCard) => {
	try{
		const dataToSend: IaddCreditCard = {
			CVV,
			FAN,
			ownerName,
			expiryDate,
			type: FAN.startsWith("34") || FAN.startsWith("37") ? 
				"AMERICAN_EXPRESS_CARD" : "COMMON_CREDIT_CARD"
		}
	
		await addCreditCard(dataToSend);

		alert("credit card add!");
	}
	catch(err){
		alert("invalid credit card informations!");
	}
};