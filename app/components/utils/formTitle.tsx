import Image from "next/image";

export function FormTitle(){
	return(
		<div className="w-full text-center font-bold text-xl">
			<Image 
				src="/form-image.png" 
				alt="" width={76} 
				height={76}
				className="mx-auto"
			/>
			<h2>Credit Card Info</h2>
		</div>
	)
}