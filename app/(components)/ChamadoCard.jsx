import DeleteBlock from "./DeleteBlock";
import PrioridadeDisplay from "./PrioridadeDisplay";
import ProgressoDisplay from "./ProgressoDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const ChamadoCard = ({ chamado }) => {
	function conversorDatas(timestamp) {
		const options = {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		};

		const data = new Date(timestamp);
		const dataFormatada = data.toLocaleString("pt-br", options);

		return dataFormatada;
	}

	return (
		<div className="flex flex-col bg-card-accent hover:bg-card-accent-hover rounded-md shadow-lg p-3 m-2">
			<div className="flex mb-3">
				<PrioridadeDisplay prioridade={chamado.prioridade} />
				<div className="ml-auto">
					<DeleteBlock id={chamado._id} />
				</div>
			</div>

			<Link
				href={`/ChamadoPage/${chamado._id}`}
				style={{ display: "contents" }}
			>
				<h4 className="mb-1">{chamado.titulo}</h4>
				<p className="whitespace-pre-wrap">{chamado.descricao}</p>

				<div className="flex-grow"></div>
				<div className="flex mt-2">
					<div className="flex flex-col">
						<p className="text-xs  my-1">{conversorDatas(chamado.createdAt)}</p>
						<ProgressoDisplay progresso={chamado.progresso} />
					</div>
					<div className="ml-auto  flex items-end">
						<StatusDisplay status={chamado.status} />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ChamadoCard;
