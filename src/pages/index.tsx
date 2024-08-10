import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "./routes";
import { PageLoader } from "widgets/PageLoader";

export const Routing = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
      </Routes>
    </Suspense>
  );
};