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
import blueGrey from '@material-ui/core/colors/blueGrey';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
import BubbleChart from '@material-ui/icons/BubbleChart';
import Edit from '@material-ui/icons/Edit';
import CheckCircle from "@material-ui/icons/CheckCircle";

import ModalUsers from './ModalUsers'
import app from '../base'
class Inactives extends React.Component {
    constructor(props){
     super(props)
     this.state = {
      openModal: false
     }
    }



    _activeDiagram(diagramid){
      const currentuser = app.auth().currentUser
      app.database().ref(currentuser.uid+"/diagrams/"+diagramid).once("value").then((diagram)=>{
        const datauser = diagram.val()
        console.log("AQUI")
        console.log(datauser)
        const params = {
          date: datauser.date,
          description: datauser.description,
          diagramtype: datauser.diagramtype,
          name: datauser.name,
          xml: datauser.xml,
          inactive: false
        }
        app.database().ref(currentuser.uid+"/diagrams/"+diagramid).set(params)
        this.props.history.push('/')
      })
    }
    
    
    
    render(){
    const { classes, name, date, image, description } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-6">
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <BubbleChart/>
              </Avatar>
            }
            action={
              <IconButton>
                <CheckCircle onClick={()=>this._activeDiagram(this.props.diagramid)}/>
              </IconButton>
            }
            title={name}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

Inactives.propTypes = {
  classes: PropTypes.object.isRequired,
};
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
    backgroundColor: blueGrey[700],
  },
});
export default withStyles(styles)(Inactives);
