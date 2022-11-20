import {
  Button,
  Card,
  CardContent,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
// import IconButton from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useState } from "react";

function Form({ title }) {
  const [coursesList, setCoursesList] = useState([
    { courseName: "", grade: null },
  ]);

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
  return (
    <div>
      <Typography gutterBottom variant="h5" align="center">
        {title}
      </Typography>
      <Card sx={{padding:'20px 5px'}}>
        <CardContent>
            <form>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                label="Soul Address"
                placeholder="Enter Soul Address"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                label="Soul First Name"
                placeholder="Enter Firsts Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} sm={6} item>
              <TextField
                label="Soul Last Name"
                placeholder="Enter Last Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} item>
              <TextField
                type={"text"}
                label="Course Name"
                placeholder="Enter Course Name"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>

            <Grid xs={12} item sx={{marginBottom:'30px'}}>
              <TextField
                type={"number"}
                label="Semester"
                placeholder="Enter Semester No"
                variant="outlined"
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

            <Grid xs={12} item sx={{marginBottom:5}}>
              <TextField
                multiline
                rows={4}
                label="Remarks"
                placeholder="Enter Remarks (Press enter to go to next line)"
                variant="outlined"
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
    </div>
  );
}

export default Form;
