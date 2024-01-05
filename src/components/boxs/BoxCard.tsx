import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

function BoxCard({
  width,
  height,
  imgSrc,
  imgWidth,
  imgHeight,
  name,
  onClick,
}: {
  width: number;
  height: number;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  name: string;
  onClick: (name: string) => React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Card sx={{ width: width, height: height }}>
      <CardActionArea onClick={onClick(name)}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
          }}
        >
          <img src={imgSrc} style={{ width: imgWidth, height: imgHeight }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BoxCard;
