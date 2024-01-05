import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MobileRechargeForm from "./MobileRechargeForm";
import BoxCard from "./BoxCard";

function MobileRecharge() {
  const [data, setData] = useState<
    | {
        product_id: string;
        voucher: string;
        nominal: string;
        price: number;
      }[]
    | null
  >(null);

  const [selectedData, setSelectedData] = useState<{
    product_id: string;
    voucher: string;
    nominal: string;
    price: number;
  } | null>(null);

  const handleSelectData =
    (item: {
      product_id: string;
      voucher: string;
      nominal: string;
      price: number;
    }) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setSelectedData(item);
    };

  useEffect(() => {
    setSelectedData(null);
  }, [data]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <MobileRechargeForm setData={setData} />
        {data && (
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: "repeat(4,1fr)",
              borderRadius: "5px",
              backgroundColor: "#EEF5FF",
              py: 4,
              px: 4,
            }}
          >
            {data.map((item, index: number) => (
              <BoxCard
                key={index}
                width="100%"
                height="100%"
                item={item}
                onClick={handleSelectData}
                active={selectedData?.product_id === item.product_id}
              />
            ))}
          </Box>
        )}
      </Box>
      {selectedData && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "#B4D4FF",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "lg",
              margin: "0 auto",

              py: 2,
              px: 4,
            }}
          >
            <Box
              sx={{
                width: "fit-content",
                ml: "auto",
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Price :
                </Typography>
                <Typography
                  sx={{ fontSize: 18 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Rp. {selectedData?.price}
                </Typography>
              </Box>
              <Button
                sx={{ backgroundColor: "#86B6F6", color: "white", px: 4 }}
              >
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default MobileRecharge;
