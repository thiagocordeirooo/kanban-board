import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const PageNotFound = () => (
  <div style={{ display: "flex", flexDirection: "column", padding: "10%", alignItems: "center" }}>
    <Typography variant="h2" gutterBottom>
      Página não encontrada. ;(
    </Typography>
    <Button href="/" variant="outlined" color="primary">
      Home
    </Button>
  </div>
);

export default PageNotFound;
