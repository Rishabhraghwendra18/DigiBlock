import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { alpha, styled } from "@mui/material/styles";
import Navbar from "../Navbar";
import Form from "./Form";

function MintStudent() {
  const [value, setValue] = React.useState("Mint Student Academic Record");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CustomTab = styled(Tab)(({ theme }) => ({
    width: 300,
    "&.Mui-selected": {
      fontWeight: 800,
      color: "#00501E",
    },
  }));
  return (
    <div
      style={{
        gap: " 1rem",
        paddingleft: " 0.8rem",
        paddingright: "0.8rem",
      }}
    >
      <Navbar></Navbar>
      <Box sx={{ width: "100%", typography: "body1", paddingLeft: "5rem" }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              TabIndicatorProps={{
                style: { backgroundColor: "#abfe2c ", color: "#abfe2c " },
              }}
              aria-label="lab API tabs example"
            >
              <CustomTab
                label="Mint Student Academic Record"
                value="Mint Student Academic Record"
              />
              <CustomTab
                label="Mint Course Record"
                value="Mint Course Record"
              />
            </TabList>
          </Box>
          <TabPanel value="Mint Student Academic Record">
            <Form title="Mint Student Academic Record"/>
          </TabPanel>
          <TabPanel value="Mint Course Record">Item Two</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default MintStudent;
