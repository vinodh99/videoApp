import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BackupIcon from '@material-ui/icons/Backup';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import Typography from '@material-ui/core/Typography';

import VideoCard from './Components/VideoCard';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  cardRoot: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [videosList, setVideoUrls] = useState([]);

  useEffect(() => {
    setVideoUrls([
      {
        url: 'https://www.youtube.com/watch?v=dxPAkn93NOE',
        name: 'Apex legends',
        description: 'High IQ battle royale game',
      },
      {
        url: 'https://www.youtube.com/watch?v=dxPAkn93NOE',
        name: 'Apex legends',
        description: 'High IQ battle royale game',
      },
      {
        url: 'https://www.youtube.com/watch?v=dxPAkn93NOE',
        name: 'Apex legends',
        description: 'High IQ battle royale game',
      },
      {
        url: 'https://www.youtube.com/watch?v=dxPAkn93NOE',
        name: 'Apex legends',
        description: 'High IQ battle royale game',
      },
    ]);
  });
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Upload', 'Videos'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <BackupIcon /> : <VideoLibraryIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>
      <main>
        <Toolbar />
        <Typography variant="h2">Videos</Typography>
        <div style={{ flex: 1, display: 'flex', flexWrap: 'wrap' }}>
          {videosList.map(video => (
            <VideoCard video={video} />
          ))}
        </div>
      </main>
    </div>
  );
}
