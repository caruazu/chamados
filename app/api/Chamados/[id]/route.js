import Chamado from "@/app/(models)/Chamado";
import { NextResponse } from "next/server";

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
