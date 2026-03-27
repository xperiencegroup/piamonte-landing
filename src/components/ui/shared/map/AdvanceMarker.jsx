import { AdvancedMarker } from "@vis.gl/react-google-maps";

export default function AdvanceMarker({ children, position }) {
  return <AdvancedMarker position={position}>{children}</AdvancedMarker>;
}
