// Hexagon Grid Background
export const HexagonGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <svg
        className="absolute inset-0 h-full w-full opacity-10 dark:opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="hexagon-pattern"
          x="0"
          y="0"
          width="16"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M8 2L14 8L14 20L8 26L2 20L2 8L8 2Z"
            className="stroke-gray-400 dark:stroke-gray-600"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#hexagon-pattern)"
        />
      </svg>
    </div>
  );
};

// Soft Gradient Waves
export const SoftGradientWavesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20" />
      <svg
        className="absolute bottom-0 left-0 right-0 w-full opacity-30"
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C300,20 600,180 1200,100 L1200,200 L0,200 Z"
          className="fill-blue-200 dark:fill-blue-800/30"
        />
        <path
          d="M0,120 C500,60 700,180 1200,120 L1200,200 L0,200 Z"
          className="fill-blue-300 dark:fill-blue-700/30"
        />
        <path
          d="M0,150 C400,100 800,180 1200,150 L1200,200 L0,200 Z"
          className="fill-blue-400 dark:fill-blue-600/30"
        />
      </svg>
    </div>
  );
};

// Minimal Dots Grid
export const MinimalDotsGridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          radial-gradient(circle, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          radial-gradient(circle, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px, 20px 20px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      />
    </div>
  );
};

// Gradient with Blob
export const GradientWithBlobBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
      <div className="absolute -right-1/4 top-0 aspect-square w-1/2 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-300/40 blur-3xl dark:from-emerald-800/20 dark:to-teal-700/20" />
      <div className="absolute -bottom-1/4 -left-1/4 aspect-square w-1/2 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-300/40 blur-3xl dark:from-blue-800/20 dark:to-indigo-700/20" />
    </div>
  );
};

// Binary Rain Background (CSS Animation version)
export const BinaryRainBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {/* Static binary elements with CSS animations */}
        <div className="animate-binary-fade absolute left-[10%] top-[15%] font-mono text-xs text-gray-900 dark:text-gray-200">
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[20%] top-[25%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.5s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[30%] top-[45%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.2s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[40%] top-[65%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.7s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[50%] top-[85%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "3.1s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[60%] top-[35%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.8s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[70%] top-[55%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.5s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[80%] top-[75%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.9s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[90%] top-[5%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.2s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[15%] top-[30%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.8s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[25%] top-[50%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.1s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[35%] top-[70%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "3.4s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[45%] top-[90%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.5s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[55%] top-[10%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.1s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[65%] top-[40%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.7s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[75%] top-[60%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "2.9s" }}
        >
          1
        </div>
        <div
          className="animate-binary-fade absolute left-[85%] top-[80%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "0.3s" }}
        >
          0
        </div>
        <div
          className="animate-binary-fade absolute left-[95%] top-[20%] font-mono text-xs text-gray-900 dark:text-gray-200"
          style={{ animationDelay: "1.4s" }}
        >
          1
        </div>
      </div>

      {/* Tech-themed radial gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.1),transparent_30%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.15),transparent_30%)]" />
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-20">
        <svg width="100%" height="100%" className="absolute">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50h40c5.5 0 10 4.5 10 10s4.5 10 10 10h40M50 0v40c0 5.5 4.5 10 10 10s10 4.5 10 10v40"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              className="text-gray-400 dark:text-gray-600"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
    </div>
  );
};

// Product Dots Background (CSS Animation version)
export const ProductDotsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0">
        {/* Static dots with CSS animations */}
        <div
          className="animate-pulse-slow absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/40"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[20%] top-[45%] h-2 w-2 rounded-full bg-orange-400/30 dark:bg-orange-400/40"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[30%] top-[75%] h-2 w-2 rounded-full bg-amber-400/30 dark:bg-amber-400/40"
          style={{ animationDelay: "2.1s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[40%] top-[25%] h-2 w-2 rounded-full bg-yellow-500/30 dark:bg-yellow-500/40"
          style={{ animationDelay: "0.7s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[50%] top-[55%] h-2 w-2 rounded-full bg-orange-500/30 dark:bg-orange-500/40"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[60%] top-[85%] h-2 w-2 rounded-full bg-amber-500/30 dark:bg-amber-500/40"
          style={{ animationDelay: "2.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[70%] top-[35%] h-2 w-2 rounded-full bg-yellow-600/30 dark:bg-yellow-600/40"
          style={{ animationDelay: "0.9s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[80%] top-[65%] h-2 w-2 rounded-full bg-orange-600/30 dark:bg-orange-600/40"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[90%] top-[5%] h-2 w-2 rounded-full bg-amber-600/30 dark:bg-amber-600/40"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[15%] top-[30%] h-2 w-2 rounded-full bg-yellow-400/30 dark:bg-yellow-400/40"
          style={{ animationDelay: "1.1s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[25%] top-[60%] h-2 w-2 rounded-full bg-orange-400/30 dark:bg-orange-400/40"
          style={{ animationDelay: "2.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[35%] top-[90%] h-2 w-2 rounded-full bg-amber-400/30 dark:bg-amber-400/40"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[45%] top-[10%] h-2 w-2 rounded-full bg-yellow-500/30 dark:bg-yellow-500/40"
          style={{ animationDelay: "1.7s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[55%] top-[40%] h-2 w-2 rounded-full bg-orange-500/30 dark:bg-orange-500/40"
          style={{ animationDelay: "2.4s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[65%] top-[70%] h-2 w-2 rounded-full bg-amber-500/30 dark:bg-amber-500/40"
          style={{ animationDelay: "0.8s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[75%] top-[20%] h-2 w-2 rounded-full bg-yellow-600/30 dark:bg-yellow-600/40"
          style={{ animationDelay: "1.4s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[85%] top-[50%] h-2 w-2 rounded-full bg-orange-600/30 dark:bg-orange-600/40"
          style={{ animationDelay: "2.9s" }}
        ></div>
        <div
          className="animate-pulse-slow absolute left-[95%] top-[80%] h-2 w-2 rounded-full bg-amber-600/30 dark:bg-amber-600/40"
          style={{ animationDelay: "0.6s" }}
        ></div>
      </div>
    </div>
  );
};

// Notebook Paper Background
export const NotebookPaperBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="notebook-lines"
            x="0"
            y="0"
            width="100%"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="23"
              x2="100%"
              y2="23"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-500 dark:text-blue-400"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#notebook-lines)" />
        </svg>
      </div>
    </div>
  );
};

// Grid Finance Background
export const GridFinanceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white dark:bg-gray-950">
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="grid-finance"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-500 dark:text-gray-400"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-finance)" />
        </svg>
      </div>
    </div>
  );
};