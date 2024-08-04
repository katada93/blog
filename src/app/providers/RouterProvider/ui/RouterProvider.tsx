import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        {children}
      </Suspense>
    </BrowserRouter>
  )
};

