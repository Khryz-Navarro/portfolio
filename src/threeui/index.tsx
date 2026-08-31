import { EmeraldHorizonBackground } from "../shaders/emerald-horizon/EmeraldHorizonBackground";
import type { EmeraldHorizonBackgroundProps } from "../shaders/emerald-horizon/EmeraldHorizonBackground";

const structureFlowVariants = {
  "emerald-horizon": EmeraldHorizonBackground,
} as const;

export type StructureFlowCollectionVariant = keyof typeof structureFlowVariants;

export type StructureFlowCollectionProps = EmeraldHorizonBackgroundProps & {
  variant?: StructureFlowCollectionVariant;
};

export function StructureFlowCollection({
  variant = "emerald-horizon",
  ...props
}: StructureFlowCollectionProps) {
  const StructureFlow = structureFlowVariants[variant];
  return <StructureFlow {...props} />;
}

export {
  EmeraldHorizonBackground,
  EMERALD_HORIZON_DEFAULTS,
} from "../shaders/emerald-horizon/EmeraldHorizonBackground";
export type { EmeraldHorizonBackgroundProps } from "../shaders/emerald-horizon/EmeraldHorizonBackground";
