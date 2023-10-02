"use client";

import { IaddCreditCard } from "@/app/services/IAddCreditCard";
import { addCreditCard } from "@/app/services/addCreditCard";
import { useForm } from "react-hook-form";

export function FormField(){	

	const { register, handleSubmit } = useForm<IaddCreditCard>();

	const handleSubmitData = async ({ ownerName, FAN, expiryDate, CVV}: IaddCreditCard) => {
		const dataToSend: IaddCreditCard = {
			CVV,
			FAN,
			ownerName,
			expiryDate,
			type: FAN.startsWith("34") || FAN.startsWith("37") ? 
				"AMERICAN_EXPRESS_CARD" : "COMMON_CREDIT_CARD"
		}

		console.log(dataToSend)

		await addCreditCard(dataToSend);
	};

	return(
		<form
			onSubmit={handleSubmit(handleSubmitData)}
			className="flex flex-col gap-3"
		>
			<div className="flex flex-col gap-2">
				<label
					className="text-[#030102]"
				>
					Full Name
				</label>
				<div className="flex flex-row items-center">
					<input { ...register("ownerName") }
						type="text"
						name="ownerName"
						placeholder="John Doe"
						maxLength={19}
						className="p-3 w-full h-10 rounded-lg bg-[#E2E6EE] text-[#9EA8BD] border-[1px] border-[#E2E6EE] focus:shadow-md focus:bg-white focus:outline-none transition-all"
					/>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<label
					className="text-[#030102]"
				>
					Credit Card Number
				</label>
				<div className="flex flex-row items-center">
					<input 
						type="text"
						{ ...register("FAN") }
						name="FAN"
						placeholder="1234 1234 1234 1234"
						maxLength={19}
						className="p-3 w-full h-10 rounded-lg bg-[#E2E6EE] text-[#9EA8BD] border-[1px] border-[#E2E6EE] focus:shadow-md focus:bg-white focus:outline-none transition-all"
					/>
				</div>
			</div>
			<div className="flex flex-row gap-2">
				<div className="flex flex-col gap-2">
					<label
						className="text-[#030102]"
					>
						Expiry Date
					</label>
					<div className="flex flex-row items-center">
						<input { ...register("expiryDate") }
							type="text"
							name="expiryDate"
							placeholder="MM/YY"
							maxLength={5}
							className="p-3 w-full h-10 rounded-lg bg-[#E2E6EE] text-[#9EA8BD] border-[1px] border-[#E2E6EE] focus:shadow-md focus:bg-white focus:outline-none transition-all"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<label
						className="text-[#030102]"
					>
						CVV
					</label>
					<div className="flex flex-row items-center">
						<input 	{ ...register("CVV") }
							type="password"
							name="CVV"
							placeholder="..."
							maxLength={4}
							className="p-3 w-full h-10 rounded-lg bg-[#E2E6EE] text-[#9EA8BD] border-[1px] border-[#E2E6EE] focus:shadow-md focus:bg-white focus:outline-none transition-all"
						/>
					</div>
				</div>
			</div>
			<button
				className="w-full h-10 bg-purple rounded-lg text-white hover:bg-purple/90"
				type="submit"
			>
				Confirm Credit Card
			</button>
		</form>
	)
}