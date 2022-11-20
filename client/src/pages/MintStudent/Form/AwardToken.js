import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
// import IconButton from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ethers } from "ethers";
import { HARVAD_TOKEN_ADDRESS } from "../../../Constants";
import { HARVAD_TOKEN_ABI } from "../../../Constants";
import React, { useState } from "react";

function AwardToken({ title }) {
  const [tokenAmount, setTokenAmount] = useState();
  const [solAddress, setSolAddress] = useState();
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    description: "Transfering SOL token",
  });
  const { vertical, horizontal, open, description } = snackBarState;

  const handleSnackBarOpen = (description) => {
    setSnackBarState({ ...snackBarState, open: true, description });
  };
  const handleSnackBarClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  const transferToken = async ()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    console.log("")
    const contract = new ethers.Contract(HARVAD_TOKEN_ADDRESS, HARVAD_TOKEN_ABI, signer);
    const amount = ethers.utils.parseEther(tokenAmount);
    
    let tx = await contract.transfer(solAddress,amount, {
      gasLimit: 1000000000, // BlockGasLimit / 10
    });

    console.log(tx);
    handleSnackBarOpen(`Transfering SOL token. Tx hash ${tx?.hash}`);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("here!")
    await transferToken();
  };
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        {title}
      </Typography>
      <Card sx={{ padding: "20px 5px" }}>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  label="Soul Address"
                  placeholder="Enter Soul Address"
                  variant="outlined"
                  onChange={(e)=>setSolAddress(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Token Amount"
                  placeholder="Enter Token Amount"
                  variant="outlined"
                  onChange={(e) => setTokenAmount(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#abfe2c", color: "#00501e" }}
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          {description}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AwardToken;
