import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  cardRoot: {
    marginRight: '10px',
    marginBottom: '10px',
    flexBasis: 'calc(33.333% - 10px)',
    margin: '0 0px',
    minWidth: 'calc(100% * (1/4) - 1px)',
  },
}));

const VideoCard = ({ video }) => {
  const classes = useStyles();
  const { url, name, description } = video;
  return (
    <Card className={classes.cardRoot}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          <ReactPlayer
            height="150px"
            width="245px"
            url={url}
            playing={false}
            light
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default VideoCard;
