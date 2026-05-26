import type { Metadata } from "next";
import ColorVisualizer from "@/components/ColorVisualizer";

export const metadata: Metadata = {
  title: "Χρωματολόγιο | Μαστορέλης - Δοκιμάστε Χρώματα Vitex",
  description:
    "Δοκιμάστε χρώματα Vitex στον χώρο σας online. Επιλέξτε δωμάτιο, χρώμα και δείτε το αποτέλεσμα αμέσως. Δωρεάν εκτίμηση βαψίματος.",
};

export default function XromatologioPage() {
  return <ColorVisualizer />;
}
