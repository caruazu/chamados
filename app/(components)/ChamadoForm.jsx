"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ChamadoForm = () => {
    const router = useRouter();

    const inicioChamadoDados = {
        titulo: "",
        descricao: "",
        prioridade: 1,
        progresso: 0,
        status: "aberto",
        categoria: "Problema de Hardware",
    };

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
        const res = await fetch("/api/Chamados", {
            method: "POST",
            body: JSON.stringify({ formData }),
            "Content-Type": "application/json",
        });

        if (!res.ok) {
            throw new Error("Failed to create ticket");
        }
        
        router.refresh();
        router.push("/");
    };   

    return (
        <div className=" flex justify-center">
            <form
                onSubmit={handleSubmit}
                method="post"
                className="flex flex-col gap-3 w-1/2"
            >
                <h3>Crie seu chamado</h3>
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
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="aberto">Aberto</option>
                    <option value="atendendo">Atendendo</option>
                    <option value="concluido">Concluido</option>
                </select>

                <input
                    type="submit"
                    className="btn max-w-xs"
                    value={"Criar chamado"}
                />
            </form>
        </div>
    );
}

export default ChamadoForm
