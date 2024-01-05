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

const productList = [
  { label: "Matrix", value: "MATRIX" },
  { label: "Three Postpaid", value: "THREEPOSTP" },
  { label: "XL XPlor", value: "XPLOR" },
  { label: "Smartfren Postpaid", value: "SMFPOSTP" },
];
function BroadbandForm() {
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

  return (
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

      <FormControl size="small" sx={{ minWidth: "20ch" }}>
        <InputLabel id="Product">Product</InputLabel>
        <Select
          labelId="Product"
          id="Product"
          value={product}
          label="Product"
          onChange={handleChangeProduct}
        >
          {productList.map((item, index: number) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained">Proceed</Button>
    </Box>
  );
}

export default BroadbandForm;
