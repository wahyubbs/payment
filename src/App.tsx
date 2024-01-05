import { Container, Tab, Tabs } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import WifiIcon from "@mui/icons-material/Wifi";
import WalletIcon from "@mui/icons-material/Wallet";
import "./App.css";
import { useState } from "react";
import BroadbandForm from "./components/broadband/BroadbandfForm";
import EWallet from "./components/eWallet/EWallet";
import MobileRecharge from "./components/mobileRecharge/MobileRecharge";

function App() {
  const [tab, setTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <h1>Pay Bills</h1>
      <Tabs value={tab} onChange={handleChange} aria-label="tabs">
        <Tab icon={<PhoneIphoneIcon />} label="Mobile Recharge" />
        <Tab icon={<FlashOnIcon />} label="Electricity" />
        <Tab icon={<WalletIcon />} label="E-Wallet" />
        <Tab icon={<WifiIcon />} label="Broadband" />
      </Tabs>
      {tab === 0 && <MobileRecharge />}
      {tab === 2 && <EWallet />}
      {tab === 3 && <BroadbandForm />}
    </Container>
  );
}

export default App;
