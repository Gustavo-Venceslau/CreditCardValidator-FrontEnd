interface FormFieldProps{
	name: string,
	id: string,
	placeholder: string,
	maxLength: number,
	haveDate?: boolean
}

export function FormField({name, id, placeholder, maxLength}: FormFieldProps){	

	return(
		<div className="flex flex-col gap-2">
			<label
				htmlFor={id}
				className="text-[#030102]"
			>
				{name}
			</label>
			<div className="flex flex-row items-center">
				<input 
					type="text" 
					name={name} 
					id={id}
					placeholder={placeholder}
					maxLength={maxLength}
					className="p-3 w-full h-10 rounded-lg bg-[#E2E6EE] text-[#9EA8BD] border-[1px] border-[#E2E6EE] focus:shadow-md focus:bg-white focus:outline-none transition-all"
				/>
			</div>
		</div>
	)
}