import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { IInfo } from "../../../types/componentsTypes/componentsTypes";

interface IAddInfo {
  info: IInfo;
  removeFunction: (id: number) => void;
  changeValueFunction: (key: string, value: string, id: number) => void;
}

const AddInfo: React.FC<IAddInfo> = ({
  info,
  removeFunction,
  changeValueFunction,
}) => {
  const { id, title, description } = info;
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      sx={{ mb: "10px" }}
    >
      <Grid item xs={2} sm={4} md={4}>
        <TextField
          label="Введите название характеристики"
          fullWidth
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeValueFunction("title", e.target.value, id)
          }
        />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <TextField
          label="Введите описание характеристики"
          fullWidth
          value={description}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            changeValueFunction("description", e.target.value, id)
          }
        />
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => removeFunction(id)}
        >
          Удалить характеристику
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddInfo;
