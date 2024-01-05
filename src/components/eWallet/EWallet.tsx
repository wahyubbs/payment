import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import BoxCard from "../boxs/BoxCard";
import EWalletForm from "./EWalletForm";

const productList = [
  { name: "DANA", imageSrc: "/vite.svg" },
  { name: "GRAB", imageSrc: "/vite.svg" },
  { name: "GOJEK", imageSrc: "/vite.svg" },
  { name: "ETOLL", imageSrc: "/vite.svg" },
  { name: "SHOPEE", imageSrc: "/vite.svg" },
];
function EWallet() {
  const [productSelected, setProductSelected] = useState("");

  const handleClickProduct =
    (name: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault;
      setProductSelected(name);
    };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: 2,
          justifyContent: "center",
        }}
      >
        {productSelected === "" &&
          productList.map((item, index: number) => (
            <BoxCard
              onClick={handleClickProduct}
              key={index}
              name={item.name}
              imgWidth={50}
              imgHeight={50}
              imgSrc={item.imageSrc}
              height={100}
              width={100}
            />
          ))}
        {productSelected !== "" && (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <IconButton
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                setProductSelected("");
              }}
              sx={{ mr: "auto" }}
              aria-label="back"
            >
              <ArrowBackIcon />
            </IconButton>

            <EWalletForm type={productSelected} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default EWallet;
