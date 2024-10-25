import { object, string, number, date, mixed } from "yup";
import digimonCardSchema from "./cardShema";
const transactionSchema = object().shape({
  card: digimonCardSchema,
  transactionType: string()
    .oneOf(
      ["compra", "venta", "subasta"],
      "El tipo de transacción debe ser una de las siguientes: compra, venta, subasta"
    )
    .required("El tipo de transacción es obligatorio"),
  price: number()
    .positive("El precio debe ser un número positivo")
    .required("El precio es obligatorio"),
  seller: string().required("El nombre del vendedor es obligatorio"),
  buyer: string().required("El nombre del comprador es obligatorio"),
  transactionDate: date().required("La fecha de la transacción es obligatoria"),
  auctionEndDate: date().when("transactionType", {
    is: "subasta",
    then: (schema) =>
      schema.required(
        "La fecha de finalización de la subasta es obligatoria para las subastas"
      ),
    otherwise: (schema) => schema.nullable(),
  }),
  status: string()
    .oneOf(
      ["pendiente", "completado", "cancelado"],
      "El estado debe ser una de las siguientes: pendiente, completado, cancelado"
    )
    .required("El estado de la transacción es obligatorio"),
});

export default transactionSchema;
