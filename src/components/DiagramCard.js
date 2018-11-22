import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';

import app from '../base'
class DiagramCard extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      diagram:null
    };
  }



  componentWillMount() {
    const currentuser = app.auth().currentUser
    const {collaboration} = this.props
    app.database().ref(collaboration.owner+'/diagrams/'+collaboration.diagram).once('value').then(element=>{
      this.setState({diagram:element.val()})
    })
    
  }

  _toDiagram(){
    localStorage.setItem("diagramcollaborative",JSON.stringify(this.props.collaboration))
    window.location.href = '/realtime'
  }

  render(){
    const { classes, image } = this.props
    const {diagram} = this.state   
    return (
      <div className="col-lg-4 col-md-4 col-sm-6">
        {(this.state.diagram!=null)?
        <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={diagram.name}
            subheader={diagram.date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {diagram.description}
            </Typography> 
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Button onClick={()=>this._toDiagram()} variant="outlined" color="secondary" >
                  Editar
                <ShareIcon/>
              </Button>
            </div>
          </div>
          </CardActions>
        </Card>
          
        </div>:null}
      </div>
    );
  }
}
  const styles = theme => ({
    card: {
      maxWidth: 400,
      marginBottom: '2em'
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });

DiagramCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DiagramCard);
