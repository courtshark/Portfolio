import type { DiagramBlock } from "@/lib/types";
import { CertificatePipeline } from "./CertificatePipeline";
import { EquityCalculatorFlow } from "./EquityCalculatorFlow";
import { PsloPipeline } from "./PsloPipeline";

export const diagramRegistry: Record<DiagramBlock["diagram"], React.ComponentType> = {
  "equity-calculator-flow": EquityCalculatorFlow,
  "pslo-pipeline": PsloPipeline,
  "certificate-pipeline": CertificatePipeline,
};
