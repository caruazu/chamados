import ChamadoForm from "@/app/(components)/ChamadoForm";

const getChamadoById = async (id) => {
	try {
		const res = await fetch(`${process.env.APP_URL}/api/Chamados/${id}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Falha ao buscar o chamado");
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
};

let atualizarChamadosDados = {};

const ChamadoPage = async ({ params }) => {
	const MODO_EDICAO = params.id === "new" ? false : true;

	if (MODO_EDICAO) {
		atualizarChamadosDados = await getChamadoById(params.id);
		atualizarChamadosDados = atualizarChamadosDados.foundChamado;
	} else {
		atualizarChamadosDados = { _id: "new" };
	}

	return <ChamadoForm chamado={atualizarChamadosDados} />;
};

export default ChamadoPage;
