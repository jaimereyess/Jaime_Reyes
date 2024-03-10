import { ReactNode } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export default function RenderPage({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="absolute visible dark:invisible">
        <WavyBackground speed="fast" blur={8} backgroundFill="white">
          {children}
        </WavyBackground>
      </div>
      <div className="absolute invisible dark:visible">
        <WavyBackground speed="fast" blur={8} backgroundFill="black">
          {children}
        </WavyBackground>
      </div>
    </>
  );
}
