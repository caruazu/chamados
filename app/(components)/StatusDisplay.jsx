import React from "react";

const StatusDisplay = ({ status }) => {
	const getCor = (status) => {
		let cor;

		switch (status.toLowerCase()) {
			case "concluido":
				return "bg-green-200";

			case "atendendo":
				return "bg-yellow-200";

			case "aberto":
				return "bg-red-200";

			default:
				cor = "bg-slate-700";
		}
		return cor;
	};

	return (
		<span
			className={`
						inline-block  
						rounded-full 
						px-2 
						py-1 
						text-xs 
						font-semibold 
						text-gray-700
						${getCor(status)}
				`}
		>
			{status}
		</span>
	);
};

export default StatusDisplay;
