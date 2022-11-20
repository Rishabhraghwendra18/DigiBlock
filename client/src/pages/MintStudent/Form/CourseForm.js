import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  TextField,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";
// import IconButton from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../../../Constants";
import { CONTRACT_ABI } from "../../../Constants";
import React, { useState } from "react";
import { NFTStorage, File } from "nft.storage";

function Form({ title }) {
  const [solAddress, setSolAddress] = useState();
  const [soulFirstName, setSoulFirstName] = useState();
  const [soulLastName, setSoulLastName] = useState();
  const [courseName, setCourseName] = useState();
  const [remarks, setRemarks] = useState();
  const [coursesList, setCoursesList] = useState([
    { courseName: "", grade: null },
  ]);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    description:"Metadata is uploading to IPFS & Filecoin"
  });
  const { vertical, horizontal, open,description } = snackBarState;

  const handleChangeInput = (index, event) => {
    const values = [...coursesList];
    values[index][event.target.name] = event.target.value;
    setCoursesList(values);
  };
  const addCourses = () => {
    setCoursesList([...coursesList, { courseName: "", grade: null }]);
  };
  const removeCourse = (index) => {
    const values = [...coursesList];
    values.splice(index, 1);
    setCoursesList(values);
  };

  const handleSnackBarOpen = (description) => {
    setSnackBarState({ ...snackBarState, open: true,description });
  };
  const handleSnackBarClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  const mintSolToken = async (tokenURI) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", [])[0];
    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    console.log(contract)
    let tx = await contract.mintNFT(solAddress,tokenURI, {
      gasLimit: 1000000000, // BlockGasLimit / 10
    });

    console.log(tx);
    handleSnackBarOpen(`Minting SOL token. Tx hash ${tx?.hash}`);
  }

  async function storeAsset() {
    const fileLogo = await fetch("../../../assets/HarvadLogo.png");
    const blob = await fileLogo.blob();

    const API_KEY = process.env.REACT_APP_NFT_STORAGE_API;
    const client = new NFTStorage({ token: API_KEY });
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    handleSnackBarOpen('Uploading Metadata to IPFS & Filecoin. Please wait till its uploaded.');

    const metadata = await client.store({
      name: `${soulFirstName} ${soulLastName} ${courseName} record`,
      description: `${soulFirstName} ${soulLastName} ${courseName} record. Minted on ${currentDate}`,
      image: new File([blob], "HarvadLogo.png", { type: "image/png" }),
      properties: {
        coursesList,
        remarks,
      },
    });
    console.clear();
    console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url);
    let metadataURI = metadata.url.split("//");
    if(metadataURI.length ==2){
        metadataURI = 'https://ipfs.io/ipfs/'+metadataURI[1];
    }
    handleSnackBarOpen('Minting Soul Token...');
    await mintSolToken(metadataURI);
    handleSnackBarOpen('Minted successfully');
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    await storeAsset();
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
                  onChange={(e) => setSolAddress(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Soul First Name"
                  placeholder="Enter Firsts Name"
                  variant="outlined"
                  onChange={(e) => setSoulFirstName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={6} item>
                <TextField
                  label="Soul Last Name"
                  placeholder="Enter Last Name"
                  variant="outlined"
                  onChange={(e) => setSoulLastName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} item sx={{ marginBottom: "30px" }}>
                <TextField
                  type={"text"}
                  label="Course Name"
                  placeholder="Enter Course Name"
                  variant="outlined"
                  onChange={(e) => setCourseName(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>

              <Grid xs={12} sm={10} item>
                <FormLabel
                  gutterBottom
                  variant="h6"
                  sx={{ display: "block", width: "100%", textAlign: "initial" }}
                >
                  Add courses grade
                </FormLabel>
              </Grid>
              <Grid xs={12} sm={2} item>
                <AddIcon onClick={addCourses} />
              </Grid>
              {/* <IconButton>
              </IconButton> */}
              {coursesList.map((input, index) => (
                <>
                  <Grid xs={12} sm={4} item sx={{ width: "100%" }} key={index}>
                    <TextField
                      name="courseName"
                      type={"text"}
                      label="Course Name"
                      placeholder="Enter Course Name"
                      variant="outlined"
                      value={input.courseName}
                      onChange={(e) => handleChangeInput(index, e)}
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={12} sm={4} item key={index}>
                    <TextField
                      name="grade"
                      type={"number"}
                      label="Course Grade"
                      placeholder="Enter Course Grade"
                      variant="outlined"
                      value={input.grade}
                      onChange={(e) => handleChangeInput(index, e)}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={4} item key={index}>
                    <RemoveIcon onClick={(e) => removeCourse(index)} />
                  </Grid>
                </>
              ))}

              <Grid xs={12} item sx={{ marginBottom: 5 }}>
                <TextField
                  multiline
                  rows={4}
                  label="Remarks"
                  placeholder="Enter Remarks (Press enter to go to next line)"
                  variant="outlined"
                  onChange={(e) => setRemarks(e.target.value)}
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
      <Snackbar open={open} anchorOrigin={{ vertical, horizontal }} autoHideDuration={6000} onClose={handleSnackBarClose}>
        <Alert onClose={handleSnackBarClose} severity="info" sx={{ width: "100%" }}>
            {description}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Form;
