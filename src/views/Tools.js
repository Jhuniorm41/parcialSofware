import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Tools(props) {
  const { classes } = props;
  return (
    <div className="row">  
    <div className="col-lg-4 col-md-4 col-sm-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://avatars3.githubusercontent.com/u/31909654?s=460&v=4"
          title="Desarrollador"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Aguilar Gonzalo
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br/>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://avatars1.githubusercontent.com/u/24436545?s=460&v=4"
          title="Desarrollador"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Figueroa Fernando
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br/>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://avatars1.githubusercontent.com/u/26234355?s=460&v=4"
          title="Desarrollador"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Morochi Isaias
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br/>
    </div>    
    <div className="col-lg-4 col-md-4 col-sm-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br/>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      <br/>
    </div>    
    
    </div>
  );
}

Tools.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tools);
