const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PenjualSchema = new Schema({
  _idQrcode: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QrCode",
  },
  nama_bengkel: { type: String, default: "" },
  alamat_bengkel: { type: String, default: "" },
  pemilik_bengkel: { type: String, default: "" },
});

const Penjual = mongoose.model("Penjual", PenjualSchema);
module.exports = Penjual;
