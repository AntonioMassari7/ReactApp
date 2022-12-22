import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
export default function Fetch() {
  const InitialState = {
    userId: "1",
    id: "3",
    title: "no",
    completed: "okk",
  };

  const [json, setJson] = useState(InitialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())

      .then((responseJson) =>
        setJson((prevState) => ({
          ...prevState,

          title: responseJson.title,

          completed: responseJson.completed,
        }))
      );
  }, []);

  return (
    <Grid align="center" marginTop={30}>
      <Card sx={{ width: 375, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            Fetch da JSonPlaceholder
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="h6" component="div">
            {json.userId}
          </Typography>
          <Typography variant="h6" component="div">
            {json.id}
          </Typography>
          <Typography variant="h6" component="div">
            {json.title}
          </Typography>
          <Typography variant="h6" component="div">
            {json.completed.toString}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
