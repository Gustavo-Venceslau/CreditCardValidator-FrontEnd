import { FormField } from "./utils/formField";
import { FormTitle } from "./utils/formTitle";

export function CreditCardForm(){

	return(
		<div className="max-w-sm rounded-2xl bg-white px-7 pb-7 pt-4 flex flex-col gap-6 shadow-md">
			<FormTitle />
			<FormField />
		</div>
	);
}