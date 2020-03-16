import CircularProgress from "@material-ui/core/CircularProgress";
import React, { Suspense } from "react";

const LazyLoadingComponent = Component => {
  return props => (
    <Suspense fallback={<CircularProgress color="secondary" size={64} />}>
      <Component {...props} />
    </Suspense>
  );
};

export default LazyLoadingComponent;
