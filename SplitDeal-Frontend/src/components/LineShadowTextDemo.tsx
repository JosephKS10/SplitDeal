import { LineShadowText } from "./magicui/line-shadow-text";
import { useTheme } from "next-themes";

export function LineShadowTextDemo() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <h1 className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      Got a fire deal? 
      <LineShadowText className="italic pr-2" shadowColor={shadowColor}>
        Drop 
      </LineShadowText>
      it here
    </h1>

  );
}
