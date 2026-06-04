import {
  FileCheck,
  Ship,
  Plane,
  Truck,
  Boxes,
  Warehouse,
  Lightbulb,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ServiceCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "aduanas",
    title: "Aduanas",
    icon: FileCheck,
    items: [
      "Despacho aduanal de importación",
      "Despacho aduanal de exportación",
      "Clasificación arancelaria",
      "Elaboración y validación de pedimentos",
      "Gestión documental",
      "Regulaciones y restricciones no arancelarias",
      "Permisos y certificaciones",
      "Asesoría aduanal",
    ],
  },
  {
    id: "maritimo",
    title: "Transporte Marítimo",
    icon: Ship,
    items: [
      "FCL",
      "LCL",
      "Seguimiento de embarques",
      "Coordinación portuaria",
    ],
  },
  {
    id: "aereo",
    title: "Transporte Aéreo",
    icon: Plane,
    items: [
      "Importación aérea",
      "Exportación aérea",
      "Carga urgente",
      "Seguimiento operativo",
    ],
  },
  {
    id: "terrestre",
    title: "Transporte Terrestre",
    icon: Truck,
    items: [
      "Transporte nacional",
      "Transporte fronterizo",
      "Coordinación de entregas",
      "Distribución nacional",
    ],
  },
  {
    id: "logistica",
    title: "Logística",
    icon: Boxes,
    items: [
      "Coordinación de contenedores",
      "Seguimiento de embarques",
      "Control documental",
      "Planeación logística",
      "Gestión de proveedores",
      "Monitoreo de operaciones",
    ],
  },
  {
    id: "almacenaje",
    title: "Almacenaje",
    icon: Warehouse,
    items: [
      "Almacenamiento temporal",
      "Control de inventarios",
      "Maniobras de carga y descarga",
      "Consolidación y desconsolidación",
    ],
  },
  {
    id: "consultoria",
    title: "Consultoría",
    icon: Lightbulb,
    items: [
      "Estrategias de importación",
      "Estrategias de exportación",
      "Optimización logística",
      "Cumplimiento normativo",
      "Asesoría en tratados comerciales",
    ],
  },
];
