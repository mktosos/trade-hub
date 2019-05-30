import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/k3drq6Y.png"
          title="The Cart & Disc"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Cart & Disc
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Trade all things video games. A trade pool for physical media - cartridge and disc based games.

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          TRADE
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
