import { readFileSync } from "fs";
import path from "path";
import { act } from "@testing-library/react";

const breeds = [
  { name: "Bichon Frise" },
  { name: "Bolognese" },
  { name: "Coton de Tulear" },
  { name: "Havanese" },
  { name: "Maltese" }
];
