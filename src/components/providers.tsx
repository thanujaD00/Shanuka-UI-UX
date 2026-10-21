"use client";

import { MotionConfig } from "motion/react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type InspectContextValue = { inspecting: boolean; toggle: () => void };

const InspectContext = createContext<InspectContextValue>({ inspecting: false, toggle: () => {} });

export function useInspect() {
  return useContext(InspectContext);
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [inspecting, setInspecting] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.inspect = inspecting ? "on" : "off";
  }, [inspecting]);

  const toggle = useCallback(() => setInspecting((v) => !v), []);
  const value = useMemo(() => ({ inspecting, toggle }), [inspecting, toggle]);

  return (
    <MotionConfig reducedMotion="user">
      <InspectContext.Provider value={value}>{children}</InspectContext.Provider>
    </MotionConfig>
  );
}
