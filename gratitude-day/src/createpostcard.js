import React, { Component, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import topLeftImage from "./Images/border-top 1.png";
import topRightImage from "./Images/thank you.png";
import bottomRightImage from "./Images/border-bottom 1.png";
import swcLogo from "./Images/swc.png";
import ImageUploading from "react-images-uploading";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreatePostCard = () => {
  //------------------------------------------------------------------------variables-----------------------------------------------------------//
  const [images, setImages] = useState([]);
  const maxNumber = 10;
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [emailOpen,setEmailOpen] = useState(false);

  //------------------------------------------------------------------------handle variables-----------------------------------------------------------//
  const handleImageChange = (imageList, _) => {
    setImages(imageList);
    console.log(images);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };
  const handleSubmit = () => {
    if (body.length == 0 && images.length == 0) {
      setOpen(true);
      return;
    }
    if(!email.includes("@")){
      setEmailOpen(true);
      return;
    }
    const url = images.map((image,_)=>{return(image.data_url)})
    console.log(url);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        body: body,
        image_url: url,
      })
    };
    fetch('to/url',requestOptions)
    .then(navigate("/"))
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleEmailClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setEmailOpen(false);
  };
  //------------------------------------------------------------------------components-----------------------------------------------------------//

  const ImageUpload = () => {
    return (
      <ImageUploading
        multiple
        value={images}
        onChange={handleImageChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p:2,
            }}
          >
            <div>
              <Button
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Add multiple images
              </Button>
              &nbsp;
              <Button onClick={onImageRemoveAll}>Remove All</Button>
              {imageList.map((image, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={6}><img src={image.data_url} alt="" width="150" /></Grid>
                
                <Grid item xs={4}>
                  <Button onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </Grid>
              </Grid>
            ))}
            </div>
          </Box>
        )}
      </ImageUploading>
    );
  };
  console.log("hello \n my name");

  return (
    <div
      style={{
        backgroundColor: "#c2c2c2",
        backgroundSize: "100%",
      }}
    >
      <div style={{ padding: "50px" }}></div>
      <Grid container justifyContent="space-around" alignItems="flex-start">
        <Grid item md={6} xs={12}>
          <Container component="main" maxWidth="sm">
            <Paper elevation={2}>
              <Box
                sx={{
                  p: 2,
                  m: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <Typography variant="h5">Welcome Text</Typography>
                  </Grid>
                  <Grid item>
                    <img src={swcLogo} style={{ maxHeight: "80px" }}></img>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-around"
                  alignItems="stretch"
                  spacing={2}
                >
                  <Grid item>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      fullWidth
                      label="Body"
                      multiline
                      rows={10}
                      value={body}
                      onChange={handleBodyChange}
                    />
                  </Grid>
                  <Grid item>
                    <ImageUpload />
                  </Grid>
                  <Grid item>
                    <Button fullWidth onClick={handleSubmit}>
                      Submit
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                    >
                      <Alert
                        severity="error"
                        sx={{ width: "100%" }}
                        onClose={handleClose}
                      >
                        Enter either the message or a photo
                      </Alert>
                    </Snackbar>
                    <Snackbar
                      open={emailOpen}
                      autoHideDuration={6000}
                      onClose={handleEmailClose}
                    >
                      <Alert
                        severity="error"
                        sx={{ width: "100%" }}
                        onClose={handleEmailClose}
                      >
                      Enter Valid Email
                      </Alert>
                    </Snackbar>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={12} md ={6}>
          <Box
            sx={{
              p: 2,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundImage: "radial-gradient(white,#edd16d)",
                padding: "10px",
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={1}
              >
                <Grid item>
                  <img src={topLeftImage} style={{ maxHeight: "300px" }}></img>
                </Grid>
                <Grid item>
                  <img
                    src={topRightImage}
                    alt="alt_text"
                    style={{ maxHeight: "200px" }}
                  ></img>
                </Grid>
              </Grid>
              <Box sx={{ pt: 10, px: 4, pb: 2 }}>
                <Typography
                  style={{
                    fontFamily: "Gabriola",
                    fontSize: "x-large",
                  }}
                >
                  {body}
                </Typography>
              </Box>

              <Box sx={{ px: 4, pb: 10, alignItems: "center" }}>
                {images.map((image, _) => {
                  return (
                    <img
                      src={image.data_url}
                      style={{ maxWidth: "400px",padding:"5px" }}
                    ></img>
                  );
                })}
              </Box>

              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
                spacing={1}
              >
                <Grid item>
                  <img
                    src={bottomRightImage}
                    style={{ maxHeight: "300px" }}
                  ></img>
                </Grid>
              </Grid>
            </div>
          </Box>
        </Grid>
      </Grid>
      <div style={{ padding: "50px" }}></div>
    </div>
  );
};

export default CreatePostCard;
