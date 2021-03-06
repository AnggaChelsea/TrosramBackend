const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pembeliSchema = new Schema(
  {
    _idQrcode: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "qrcode",
    },
    _idPenjual: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Penjual",
    },
    nama_pembeli: { type: String, default: "" },
    nomor_polisi: { type: String, default: "" },
    merk_mobil: { type: String, default: "" },
    no_invoice: { type: String, default: "" },
    deskripsi: { type: String, default: "" },
    image: { type: String, default: "" },
    video: { type: String, default: "" },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Pembeli = mongoose.model("Pembeli", pembeliSchema);
module.exports = Pembeli;
