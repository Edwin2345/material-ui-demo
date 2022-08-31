import React from 'react';
import {Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from "@mui/material"
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';


function App() {
    return(
      <>
         {/*puts default styling*/}
         <CssBaseline />
          {/*navbar === AppBar --> toolbar which sets inline display*/}
         <AppBar position="relative" style={{marginBottom: '100px'}}>
           {}
            <Toolbar>
                <PhotoCameraIcon />
                <Typography variant="h6">
                     Photo Album
                </Typography>
            </Toolbar>
         </AppBar>

         {/*photo content */}
         <main>
            <div>
                <Container maxWidth="sm">
                   {/*Typography*/}
                   <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                         Photo Album
                   </Typography>
                   <Typography variant="h5" align="center" color="textSecondary" gutterBottom>
                          Made by Edwin Joseph
                   </Typography>
                   {/*Grid */}
                   <div>
                       <Grid container spacing={4} justifyContent="center">
                           <Grid item>
                              <Button variant="contained" color="primary">
                                  See my photos
                              </Button>
                           </Grid>
                           <Grid item>
                              <Button variant="outlined" color="primary">
                                  Post my photos
                              </Button>
                           </Grid>
                       </Grid>
                       
                   </div>
                </Container>
            </div>
         </main>

      </>
    );
}

export default App;