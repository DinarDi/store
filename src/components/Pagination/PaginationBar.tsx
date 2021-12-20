import { Pagination } from "@mui/material";
import React from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const PaginationBar: React.FC = () => {
  const { count, currentPage, limit } = useTypedSelector(
    (state) => state.devices
  );
  const { setCurrentPage } = useAction();

  const pagesCount = Math.ceil(count / limit);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Pagination
      color="primary"
      count={pagesCount}
      page={currentPage}
      onChange={handleChange}
      sx={{ mb: "15px" }}
    />
  );
};

export default PaginationBar;
