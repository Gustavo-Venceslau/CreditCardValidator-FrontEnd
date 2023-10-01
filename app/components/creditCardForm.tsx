import { FormField } from "./utils/formField";
import { FormTitle } from "./utils/formTitle";

export function CreditCardForm(){

	return(
		<div className="max-w-sm rounded-2xl bg-white px-7 pb-7 pt-4 flex flex-col gap-6 shadow-md">
			<FormTitle />
			<form className="flex flex-col gap-3">
				<FormField 
					name="Full Name"
					id="ownerName"
					placeholder="John Doe"
					maxLength={19}
				/>
				<FormField 
					name="Credit Card Number"
					id="cardNumber"
					placeholder="1234 1234 1234 1234"
					maxLength={19}
				/>
				<div className="flex flex-row gap-2">
					<FormField 
						name="Expiry Date"
						id="expDate"
						placeholder="MM/YY"
						maxLength={5}
					/>
					<FormField 
						name="CVV"
						id="cvv"
						placeholder="..."
						maxLength={4}
					/>
				</div>
			</form>
			<button
				className="w-full h-10 bg-purple rounded-lg text-white hover:bg-purple/90"
			>
				Confirm Credit Card
			</button>
		</div>
	);
}