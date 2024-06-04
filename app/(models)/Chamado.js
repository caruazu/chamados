import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ChamadoSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    categoria: String,
    prioridade: Number,
    progresso: Number,
    status: String,
    ativo: Boolean,
  },
  {
    timestamps: true,
  }
);

const Chamado = mongoose.models.Chamado || mongoose.model("Chamado", ChamadoSchema);

export default Chamado;
