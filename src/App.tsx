import { StructureFlowCollection } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import "./App.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <StructureFlowCollection
        variant="emerald-horizon"
        speed={1.0}
        waveScale={1.0}
        variation={1.0}
        hue={0}
        glow={1.0}
        vignette={1.0}
      />
    </div>
  );
}

export default function App() {
  return <Scene />;
}
