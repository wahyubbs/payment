import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

function EWalletForm({ type }: { type: string }) {
  const [number, setNumber] = useState(0);
  const [product, setProduct] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(event.target.value.replace(/\s/g, "")) === true)
      setNumber(Number(event.target.value));
  };
  const handleChangeProduct = (event: SelectChangeEvent<any>) => {
    setProduct(event.target.value);
  };

  const textFieldGenerator = () => {
    if (type === "ETOLL")
      return (
        <TextField
          onChange={handleChange}
          size="small"
          sx={{ minWidth: "20ch" }}
          id="idCustomer"
          label="ID Customer"
          variant="outlined"
          value={number}
          inputProps={{ maxLength: 15 }}
        />
      );
    else
      return (
        <TextField
          onChange={handleChange}
          size="small"
          sx={{ minWidth: "20ch" }}
          id="phoneNumber"
          label="Phone Number"
          variant="outlined"
          value={number}
          inputProps={{ maxLength: 15 }}
        />
      );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "fit-content",
        alignItems: "center",
      }}
    >
      <h4>{type}</h4>
      <Box
        sx={{
          width: "fit-content",
          borderRadius: "5px",
          backgroundColor: "#EEF5FF",
          py: 2,
          px: 4,
          display: "flex",
          gap: 5,
        }}
      >
        {textFieldGenerator()}

        <Button variant="contained">Proceed</Button>
      </Box>
    </Box>
  );
}

export default EWalletForm;
