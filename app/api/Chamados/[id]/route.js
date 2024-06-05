import Chamado from "@/app/(models)/Chamado";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
    try {
        const { id } = params;
    
        const body = await req.json();
        const chamadoDados = body.formData;
    
        const updateChamadoDados = await Chamado.findByIdAndUpdate(id, {
            ...chamadoDados,
        });
    
        return NextResponse.json({ message: "Chamado atualizado" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Erro", error }, { status: 500 });
    }
}

export async function GET(req, { params }) {
    const { id } = params;

    const foundChamado = await Chamado.findOne({ _id: id });

    return NextResponse.json({ foundChamado }, { status: 200 });
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Chamado.findByIdAndDelete(id);
    return NextResponse.json({ message: "Chamado Deletado" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Erro:", error }, { status: 500 });
  }
}
