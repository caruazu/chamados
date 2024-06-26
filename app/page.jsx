import React from "react";
import ChamadoCard from "./(components)/ChamadoCard";

export const dynamic = 'force-dynamic'
export const fetchCache = "force-no-store";

const getChamados = async () => {
	try {
		
		const res = await fetch(`${process.env.APP_URL}/api/Chamados`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error("Falha ao carregar os chamados");
		}

		return res.json();
	} catch (error) {
		console.log("Erro carregando chamados: ", error);
	}
};

const Dashboard = async () => {
	const data = await getChamados();

  if (!data?.chamadosBanco) {
    return <p>Sem chamados.</p>;
  }

  const tickets = data.tickets;

	const chamados = data.chamadosBanco;

	const categoriaTipos = [
		...new Set(chamados?.map(({ categoria }) => categoria)),
	];

	return (
		<div className="p-5">
			<div>
				{chamados &&
					categoriaTipos?.map((categoriaTipos, categoriaIndex) => (
						
						<div key={categoriaIndex} className="mb-4">

							<h2>{categoriaTipos}</h2>

							<div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
								
								{chamados
									.filter((chamados) => chamados.categoria === categoriaTipos)
									.map((chamadoFiltrado, _index) => (
										
										<ChamadoCard
											id={_index}
											key={_index}
											chamado={chamadoFiltrado}
										/>
										
									))}

							</div>
						</div>

					))}
			</div>
		</div>
	);
};

export default Dashboard;
