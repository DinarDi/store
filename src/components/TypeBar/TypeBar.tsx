import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const TypeBar: React.FC = () => {
  const { types, selectedType } = useTypedSelector((state) => state.types);
  const { setSelectedType } = useAction();

  return (
    <List
      component="nav"
      sx={{
        "&& .Mui-selected, && .Mui-selected:hover": {
          bgcolor: "rgba(25, 118, 210, 0.5)",
        },
        "& .MuiListItemButton-root:hover": {
          bgcolor: "rgba(25, 118, 210, 0.32)",
        },
      }}
    >
      {types.map((type) => (
        <ListItemButton
          key={type.id}
          selected={type.id === selectedType.id}
          onClick={() => setSelectedType(type)}
        >
          <ListItemText primary={type.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default TypeBar;
