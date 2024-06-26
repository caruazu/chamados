import Chamado from "@/app/(models)/Chamado";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const chamadosBanco = await Chamado.find();

		return NextResponse.json({ chamadosBanco }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: "Error", err }, { status: 500 });
	}
}

export async function POST(req) {
	try {
		const body = await req.json();
		const chamadoDados = body.formData;

		await Chamado.create(chamadoDados);

		return NextResponse.json({ message: "Chamado Criado" }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
