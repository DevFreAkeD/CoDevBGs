import {
  BinaryRainBackground,
  SoftGradientWavesBackground,
  MinimalDotsGridBackground,
  GradientWithBlobBackground,
  HexagonGridBackground,
  GridFinanceBackground,
} from "@/components/backgrounds/backgrounds";

export type BackgroundType = {
  id: string;
  name: string;
  component: React.ReactElement;
  code: string;
};

export const backgrounds: BackgroundType[] = [
  {
    id: "binary-rain",
    name: "Binary Rain",
    component: <BinaryRainBackground />,
    code: `// Binary Rain Background\n${BinaryRainBackground.toString()}`,
  },
  {
    id: "soft-gradient-waves",
    name: "Soft Gradient Waves",
    component: <SoftGradientWavesBackground />,
    code: `// Soft Gradient Waves\n${SoftGradientWavesBackground.toString()}`,
  },
  {
    id: "minimal-dots-grid",
    name: "Minimal Dots Grid",
    component: <MinimalDotsGridBackground />,
    code: `// Minimal Dots Grid\n${MinimalDotsGridBackground.toString()}`,
  },
  {
    id: "grid-finance",
    name: "Grid Finance",
    component: <GridFinanceBackground />,
    code: `// Grid Finance Background\n${GridFinanceBackground.toString()}`,
  },
  {
    id: "gradient-with-blob",
    name: "Gradient with Blob",
    component: <GradientWithBlobBackground />,
    code: `// Gradient with Blob\n${GradientWithBlobBackground.toString()}`,
  },
  {
    id: "hexagon-grid",
    name: "Hexagon Grid",
    component: <HexagonGridBackground />,
    code: `// Hexagon Grid Background\n${HexagonGridBackground.toString()}`,
  },
];
