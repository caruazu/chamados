"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ChamadoForm = ({ chamado }) => {
	const router = useRouter();

	const MODO_EDICAO = chamado._id === "new" ? false : true;

	const inicioChamadoDados = {
		titulo: "",
		descricao: "",
		prioridade: 1,
		progresso: 0,
		status: "aberto",
		categoria: "Problema de Hardware",
	};

	if (MODO_EDICAO) {
		inicioChamadoDados["titulo"] = chamado.titulo;
		inicioChamadoDados["descricao"] = chamado.descricao;
		inicioChamadoDados["prioridade"] = chamado.prioridade;
		inicioChamadoDados["progresso"] = chamado.progresso;
		inicioChamadoDados["status"] = chamado.status;
		inicioChamadoDados["categoria"] = chamado.categoria;
	}

	const [formData, setFormData] = useState(inicioChamadoDados);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		setFormData((preState) => ({
			...preState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (MODO_EDICAO) {
			const res = await fetch(`/api/Chamados/${chamado._id}`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ formData }),
			});

			if (!res.ok) {
				throw new Error("Falha ao atualizar o chamado");
			}
		} else {
			const res = await fetch("/api/Chamados", {
				method: "POST",
				body: JSON.stringify({ formData }),
				"Content-Type": "application/json",
			});

			if (!res.ok) {
				throw new Error("Falha ao criar o chamado");
			}
		}
		router.refresh();
		router.push("/");
	};

	return (
		<div className=" flex justify-center">
			<form
				onSubmit={handleSubmit}
				method="post"
				className="flex flex-col gap-3 w-2/3 bg-white p-5 mt-5"
			>
				<h3>{MODO_EDICAO ? "Edite o chamado" : "Crie seu chamado"}</h3>
				<label>Título</label>
				<input
					id="titulo"
					name="titulo"
					type="text"
					onChange={handleChange}
					required={true}
					value={formData.titulo}
				/>

				<label>Descrição</label>
				<textarea
					id="descricao"
					name="descricao"
					onChange={handleChange}
					required={true}
					value={formData.descricao}
					rows="5"
				/>

				<label>Categoria</label>
				<select
					name="categoria"
					value={formData.categoria}
					onChange={handleChange}
				>
					<option value={"Problema de Hardware"}>Problema de Hardware</option>
					<option value={"Problema de Sofware"}>Problema de Sofware</option>
				</select>

				<label>Prioridade</label>
				<div>
					<input
						id="prioridade-1"
						name="prioridade"
						type="radio"
						onChange={handleChange}
						value={1}
						checked={formData.prioridade == 1}
					/>
					<label>1</label>
					<input
						id="prioridade-2"
						name="prioridade"
						type="radio"
						onChange={handleChange}
						value={2}
						checked={formData.prioridade == 2}
					/>
					<label>2</label>
					<input
						id="prioridade-3"
						name="prioridade"
						type="radio"
						onChange={handleChange}
						value={3}
						checked={formData.prioridade == 3}
					/>
					<label>3</label>
					<input
						id="prioridade-4"
						name="prioridade"
						type="radio"
						onChange={handleChange}
						value={4}
						checked={formData.prioridade == 4}
					/>
					<label>4</label>
					<input
						id="prioridade-5"
						name="prioridade"
						type="radio"
						onChange={handleChange}
						value={5}
						checked={formData.prioridade == 5}
					/>
					<label>5</label>
				</div>

				<label>Progresso</label>
				<input
					type="range"
					id="progresso"
					name="progresso"
					value={formData.progresso}
					min="0"
					max="100"
					onChange={handleChange}
				/>

				<label>Status</label>
				<select name="status" value={formData.status} onChange={handleChange}>
					<option value="aberto">Aberto</option>
					<option value="atendendo">Atendendo</option>
					<option value="concluido">Concluido</option>
				</select>

				<input type="submit" className="btn" value="Salvar" />
			</form>
		</div>
	);
};

export default ChamadoForm;