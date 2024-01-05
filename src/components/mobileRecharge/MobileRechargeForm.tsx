import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";

const data = [
  {
    product_id: "P956530",
    voucher: "TELKOMSEL",
    nominal: "10 Telkomsel SMS Sesama/1 Hr",
    price: 660,
  },
  {
    product_id: "P769913",
    voucher: "TELKOMSEL",
    nominal: "20 Telkomsel SMS Sesama/1 Hr",
    price: 1260,
  },
  {
    product_id: "P678436",
    voucher: "TELKOMSEL",
    nominal: "600 Telkomsel SMS AllOpr/30 Hr",
    price: 21975,
  },
  {
    product_id: "P857931",
    voucher: "TELKOMSEL",
    nominal: "5.000",
    price: 5635,
  },
  {
    product_id: "P236402",
    voucher: "TELKOMSEL",
    nominal: "10.000",
    price: 10585,
  },
  {
    product_id: "P223094",
    voucher: "TELKOMSEL",
    nominal: "15.000",
    price: 15405,
  },
  {
    product_id: "P138860",
    voucher: "TELKOMSEL",
    nominal: "20.000",
    price: 20125,
  },
  {
    product_id: "P679970",
    voucher: "TELKOMSEL",
    nominal: "25.000",
    price: 25010,
  },
  {
    product_id: "P279585",
    voucher: "TELKOMSEL",
    nominal: "30.000",
    price: 29950,
  },
  {
    product_id: "P419315",
    voucher: "TELKOMSEL",
    nominal: "40.000",
    price: 39880,
  },
  {
    product_id: "P891077",
    voucher: "TELKOMSEL",
    nominal: "50.000",
    price: 50050,
  },
  {
    product_id: "P173912",
    voucher: "TELKOMSEL",
    nominal: "60.000",
    price: 59900,
  },
  {
    product_id: "P554779",
    voucher: "TELKOMSEL",
    nominal: "70.000",
    price: 70471,
  },
  {
    product_id: "P483002",
    voucher: "TELKOMSEL",
    nominal: "75.000",
    price: 74425,
  },
  {
    product_id: "P335066",
    voucher: "TELKOMSEL",
    nominal: "80.000",
    price: 79775,
  },
  {
    product_id: "P353272",
    voucher: "TELKOMSEL",
    nominal: "100.000",
    price: 99500,
  },
  {
    product_id: "P907168",
    voucher: "TELKOMSEL",
    nominal: "150.000",
    price: 149225,
  },
  {
    product_id: "P581069",
    voucher: "TELKOMSEL",
    nominal: "200.000",
    price: 198780,
  },
  {
    product_id: "P410516",
    voucher: "TELKOMSEL",
    nominal: "300.000",
    price: 298080,
  },
  {
    product_id: "P525510",
    voucher: "TELKOMSEL",
    nominal: "500.000",
    price: 496630,
  },
  {
    product_id: "P697698",
    voucher: "TELKOMSEL",
    nominal: "1.000.000",
    price: 997880,
  },
  {
    product_id: "P454372",
    voucher: "TELKOMSEL DATA",
    nominal: "1 GB,3Hr Tsel DataMini",
    price: 16200,
  },
  {
    product_id: "P440244",
    voucher: "TELKOMSEL DATA",
    nominal: "1 GB Telkomsel Data Flash, 30Hr",
    price: 16575,
  },
  {
    product_id: "P581139",
    voucher: "TELKOMSEL DATA",
    nominal: "2 GB allNet30Hr",
    price: 33200,
  },
  {
    product_id: "P917015",
    voucher: "TELKOMSEL DATA",
    nominal: "2 GB,3Hr Tsel DataMini",
    price: 26125,
  },
  {
    product_id: "P872072",
    voucher: "TELKOMSEL DATA",
    nominal: "2 GB Telkomsel Data Flash, 30Hr",
    price: 33100,
  },
  {
    product_id: "P554953",
    voucher: "TELKOMSEL DATA",
    nominal: "3 GB Tsel Data All Netw+1GB OMG / 30Hr (Zona 1-8)",
    price: 47600,
  },
  {
    product_id: "P431789",
    voucher: "TELKOMSEL DATA",
    nominal: "3 GB Telkomsel Data Flash, 30Hr",
    price: 48175,
  },
  {
    product_id: "P523323",
    voucher: "TELKOMSEL DATA",
    nominal: "3 GB allNet30Hr",
    price: 48275,
  },
  {
    product_id: "P290051",
    voucher: "TELKOMSEL DATA",
    nominal: "4 GB allNet30Hr",
    price: 63625,
  },
  {
    product_id: "P441259",
    voucher: "TELKOMSEL DATA",
    nominal: "4 GB Telkomsel Data Flash, 30Hr",
    price: 63525,
  },
  {
    product_id: "P784885",
    voucher: "TELKOMSEL DATA",
    nominal: "4 .5 GB Tsel Data All Netw+2GB OMG /30 Hr (Zona 1-8)",
    price: 70125,
  },
  {
    product_id: "P416325",
    voucher: "TELKOMSEL DATA",
    nominal: "5 GB Telkomsel Data 7Hr",
    price: 54675,
  },
  {
    product_id: "P169588",
    voucher: "TELKOMSEL DATA",
    nominal: "5 GB Telkomsel Data 1 Hr",
    price: 20875,
  },
  {
    product_id: "P942447",
    voucher: "TELKOMSEL DATA",
    nominal: "5 GB Telkomsel Data Flash, 30Hr",
    price: 70125,
  },
  {
    product_id: "P862891",
    voucher: "TELKOMSEL DATA",
    nominal: "5 GB allNet30Hr",
    price: 70225,
  },
  {
    product_id: "P890750",
    voucher: "TELKOMSEL DATA",
    nominal: "7 GB Telkomsel Data Flash, 30Hr",
    price: 71675,
  },
  {
    product_id: "P569296",
    voucher: "TELKOMSEL DATA",
    nominal: "8 GB allNet30Hr",
    price: 95250,
  },
  {
    product_id: "P978843",
    voucher: "TELKOMSEL DATA",
    nominal: "8 GB Telkomsel Data Flash, 30Hr",
    price: 95150,
  },
  {
    product_id: "P143247",
    voucher: "TELKOMSEL DATA",
    nominal: "8 GB Tsel Data All Netw+2GB OMG /30 Hr (Zona 1-8)",
    price: 93950,
  },
  {
    product_id: "P556622",
    voucher: "TELKOMSEL DATA",
    nominal: "10 GB,7Hr Tsel DataMinI",
    price: 81950,
  },
  {
    product_id: "P126038",
    voucher: "TELKOMSEL DATA",
    nominal: "10 GB Telkomsel Data 7 Hr",
    price: 66125,
  },
  {
    product_id: "P604182",
    voucher: "TELKOMSEL DATA",
    nominal: "12 GB Tsel Data All Netw+2GB OMG /30 Hr (Zona 1-8)",
    price: 106250,
  },
  {
    product_id: "P452483",
    voucher: "TELKOMSEL DATA",
    nominal: "20 GB Telkomsel Data Mini 3Hr",
    price: 65125,
  },
  {
    product_id: "P180108",
    voucher: "TELKOMSEL DATA",
    nominal: "25 GB Tsel Data All Netw+2GB OMG /30 Hr (Zona 1-8)",
    price: 170150,
  },
  {
    product_id: "P782516",
    voucher: "TELKOMSEL DATA",
    nominal: "30 hr, Disney+Hotstar Telkomsel | Maxstream 3GB",
    price: 20675,
  },
  {
    product_id: "P322164",
    voucher: "TELKOMSEL DATA",
    nominal: "30 GB Telkomsel Data 7 Hr",
    price: 85150,
  },
  {
    product_id: "P609611",
    voucher: "TELKOMSEL DATA",
    nominal: "50 GB Tsel Data All Netw+2GB OMG /30 Hr (Zona 1-8)",
    price: 206150,
  },
  {
    product_id: "P900265",
    voucher: "TELKOMSEL DATA",
    nominal: "90 90hr, Disney+Hotstar Telkomsel | Maxstream 3GB/bln",
    price: 50175,
  },
  {
    product_id: "P628339",
    voucher: "TELKOMSEL DATA",
    nominal: "180 180hr, Disney+Hotstar Telkomsel | Maxstream 3GB/bln",
    price: 80250,
  },
  {
    product_id: "P808679",
    voucher: "TELKOMSEL DATA",
    nominal: "360 360hr, Disney+Hotstar Telkomsel | Maxstream 3GB/bln",
    price: 139850,
  },
  {
    product_id: "P805492",
    voucher: "TELKOMSEL DATA",
    nominal: "500 MB Telkomsel Data 1Hr",
    price: 5560,
  },
  {
    product_id: "P300484",
    voucher: "TELKOMSEL DATA",
    nominal: "500 MB Telkomsel Data 3Hr",
    price: 14875,
  },
  {
    product_id: "P287858",
    voucher: "TELKOMSEL DATA",
    nominal: "500 MB Telkomsel Data Flash 7Hr",
    price: 25100,
  },
  {
    product_id: "P306929",
    voucher: "TELKOMSEL TELEPON",
    nominal: "20 Mnt AllOpr & Tsel 80Mnt/1Hr",
    price: 5130,
  },
  {
    product_id: "P433416",
    voucher: "TELKOMSEL TELEPON",
    nominal: "30 Mnt AllOpr & 170MntTsel/3Hr",
    price: 10810,
  },
  {
    product_id: "P936431",
    voucher: "TELKOMSEL TELEPON",
    nominal: "50 Mnt AllOpr & 350MntTsel/7Hr",
    price: 21375,
  },
  {
    product_id: "P407356",
    voucher: "TELKOMSEL TELEPON",
    nominal: "50 Mnt AllOpr & 350MntTsel & 200 SMS",
    price: 24075,
  },
  {
    product_id: "P678639",
    voucher: "TELKOMSEL TELEPON",
    nominal: "80 Mnt Sesama & 20 MntAllOpr-Zona 1-8/1Hr",
    price: 6035,
  },
  {
    product_id: "P526406",
    voucher: "TELKOMSEL TELEPON",
    nominal: "185 Mnt Sesama & 15 MntAllOpr-Zona 1-8/1Hr",
    price: 10950,
  },
  {
    product_id: "P616976",
    voucher: "TELKOMSEL TELEPON",
    nominal: "250 Mnt AllOpr & Tsel 2250Mnt/30Hr",
    price: 99875,
  },
  {
    product_id: "P162923",
    voucher: "TELKOMSEL TELEPON",
    nominal: "550 Mnt Sesama & 50 MntAllOpr-Zona 1-8/7Hr",
    price: 26125,
  },
  {
    product_id: "P962754",
    voucher: "TELKOMSEL TELEPON",
    nominal: "1.000 Mnt Sesama & 50-100 MntAllOpr-Zona 1-8/30Hr",
    price: 57625,
  },
  {
    product_id: "P901973",
    voucher: "TELKOMSEL TELEPON",
    nominal: "1.200 Mnt Sesama & 100 MntAllOpr-Zona 1-8/15Hr",
    price: 45900,
  },
  {
    product_id: "P829859",
    voucher: "TELKOMSEL TELEPON",
    nominal: "2.000 Mnt Sesama & 100 MntAllOpr-Zona 1-8/30Hr",
    price: 79150,
  },
  {
    product_id: "P240260",
    voucher: "TELKOMSEL TELEPON",
    nominal: "2.250 Mnt Sesama & 250 MntAllOpr-Zona 1-8/30Hr",
    price: 104350,
  },
  {
    product_id: "P388609",
    voucher: "TELKOMSEL TELEPON",
    nominal: "6.250 Mnt Sesama & 250 MntAllOpr-Zona 1-8/30Hr",
    price: 121650,
  },
];

const productList = [
  { label: "Paket", value: "paket" },
  { label: "Pulsa", value: "pulsa" },
];
function MobileRechargeForm({
  setData,
}: {
  setData: React.Dispatch<
    React.SetStateAction<
      | {
          product_id: string;
          voucher: string;
          nominal: string;
          price: number;
        }[]
      | null
    >
  >;
}) {
  const [number, setNumber] = useState(0);
  const [product, setProduct] = useState("pulsa");

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
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const regex = /\D/;
    if (product === "pulsa")
      setData(
        data.filter(
          (item) => regex.test(item.nominal.replaceAll(".", "")) == false
        )
      );
    else
      setData(
        data.filter(
          (item) => regex.test(item.nominal.replaceAll(".", "")) == true
        )
      );
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
        id="phoneNumber"
        label="Phone Number"
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
      <Button onClick={handleSubmit} variant="contained">
        Proceed
      </Button>
    </Box>
  );
}

export default MobileRechargeForm;
