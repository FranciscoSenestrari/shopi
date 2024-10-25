import { object, string, number } from "yup";

const digimonCardSchema = object().shape({
  name: string().required("El nombre de la carta es obligatorio"),
  level: number()
    .integer("El nivel debe ser un número entero")
    .min(1, "El nivel debe ser al menos 1")
    .max(7, "El nivel no puede ser mayor que 7")
    .required("El nivel es obligatorio"),
  type: string().required("El tipo de Digimon es obligatorio"),
  attribute: string().required("El atributo es obligatorio"),
  playCost: number()
    .integer("El costo de juego debe ser un número entero")
    .min(0, "El costo de juego no puede ser negativo")
    .required("El costo de juego es obligatorio"),
  evolutionCost: number()
    .integer("El costo de evolución debe ser un número entero")
    .min(0, "El costo de evolución no puede ser negativo")
    .required("El costo de evolución es obligatorio"),
  dp: number()
    .integer("Los puntos de Digimon deben ser un número entero")
    .min(0, "Los puntos de Digimon no pueden ser negativos")
    .required("Los puntos de Digimon son obligatorios"),
  cardNumber: string().required("El número de la carta es obligatorio"),
  set: string().required("El set de la carta es obligatorio"),
  rarity: string()
    .oneOf(
      ["common", "uncommon", "rare", "super rare", "secret rare", "promo"],
      "La rareza debe ser una de las siguientes: common, uncommon, rare, super rare, secret rare, promo"
    )
    .required("La rareza es obligatoria"),
});

export default digimonCardSchema;
