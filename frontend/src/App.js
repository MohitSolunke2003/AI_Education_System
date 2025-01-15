import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Card, CardContent, Grid } from "@mui/material";

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            AI Education System
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Emotional Well-Being</Typography>
                <Typography variant="body2">
                  Assess your emotions and receive helpful recommendations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5">Career Path Finder</Typography>
                <Typography variant="body2">
                  Discover the best career options for you.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
