import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import AppRouter from "./components/routes/AppRouter";
import { useAction } from "./hooks/useAction";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.user);
  const { limit } = useTypedSelector((state) => state.devices);
  const { selectedType } = useTypedSelector((state) => state.types);
  const { selectedBrand } = useTypedSelector((state) => state.brands);
  const {
    checkAndFetchCart,
    setCurrentPage,
    fetchDevices,
    fetchTypes,
    fetchBrands,
  } = useAction();

  useEffect(() => {
    fetchTypes();
    fetchBrands();
    fetchDevices(null, null, 1, limit);
    checkAndFetchCart();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, selectedBrand]);

  if (loading) {
    return (
      <CircularProgress
        color="primary"
        size={70}
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    );
  }

  return (
    <div>
      <NavBar />
      <AppRouter />
    </div>
  );
};

export default App;
