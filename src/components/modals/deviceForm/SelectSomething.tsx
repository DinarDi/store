import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { ISelectSomething } from "../../../types/componentsTypes/componentsTypes";

const SelectSomething: React.FC<ISelectSomething> = ({
  items,
  name,
  selectValue,
  changeSelectFunction,
}) => {
  return (
    <FormControl fullWidth sx={{ mb: "10px" }}>
      <InputLabel id="demo-simple-select-label">{name} устройства</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={`${name} устройства`}
        value={selectValue}
        onChange={(e: SelectChangeEvent) => {
          changeSelectFunction(e.target.value);
        }}
      >
        {items.map((item) => (
          <MenuItem value={item.id} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectSomething;
