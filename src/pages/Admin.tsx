import { Container } from "@mui/material";
import React from "react";
import AddButton from "../components/adminButtons/AddButton";
import EditButton from "../components/adminButtons/EditButton";

const Admin: React.FC = () => {
  return (
    <Container maxWidth="xs" sx={{ mt: "15px" }}>
      <AddButton />
      <EditButton />
    </Container>
  );
};

export default Admin;
