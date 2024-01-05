import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

function BoxCard({
  width,
  height,
  item,
  onClick,
  active,
}: {
  width: number | string;
  height: number | string;
  item: {
    product_id: string;
    voucher: string;
    nominal: string;
    price: number;
  };
  active: boolean;
  onClick: (name: {
    product_id: string;
    voucher: string;
    nominal: string;
    price: number;
  }) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Card
      variant="outlined"
      sx={{ width: width, height: height, borderColor: active ? "orange" : "" }}
    >
      <CardActionArea
        sx={{
          width: width,
          height: height,
        }}
        onClick={onClick(item)}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography
            align="center"
            sx={{ fontSize: 18 }}
            color="text.secondary"
            gutterBottom
          >
            {item.nominal}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Bayar : Rp.{item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BoxCard;
