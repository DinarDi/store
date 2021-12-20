import { List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IBrand } from "../../types/storeTypes/brandTypes";

const BrandBar: React.FC = () => {
  const { brands, selectedBrand } = useTypedSelector((state) => state.brands);
  const { setSelectedBrand } = useAction();

  const clickHandler = (brand: IBrand) => {
    setSelectedBrand(brand);
  };

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
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
      }}
    >
      {brands.map((brand) => (
        <ListItemButton
          key={brand.id}
          selected={brand.id === selectedBrand.id}
          onClick={() => clickHandler(brand)}
          sx={{ maxWidth: "100px", textAlign: "center" }}
        >
          <ListItemText primary={brand.name} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default BrandBar;
