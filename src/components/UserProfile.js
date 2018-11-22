import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography';

const profileCardStyle = {
  card: {
    paddingTop:50,
    marginTop: "30px",
    textAlign: "center",
    paddingBottom: 20,
    backgroundColor: '#F5F5F5'
  },
  cardHeader: {
    display: "inline-block",
    width: "100%",
    padding: "0px"
  },
  cardAvatar: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "-50px auto 0",
    borderRadius: "50%",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "auto",
    verticalAlign: "middle",
    border: "0"
  },
  textAlign: {
    textAlign: "center"
  },
  cardSubtitle: {
    color: "#21222",
    fontSize: "1em",
    textTransform: "uppercase",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardTitle: {
    fontSize: "1.3em",
    marginTop: "10px",
    marginBottom: "10px"
  },
  cardDescription: {
    padding: "15px 20px",
    margin: "0 0 10px"
  },
  cardActions: {
    height: "auto",
    display: "inline",
  }
};

function UserProfile({ ...props }) {
  const { classes, email, nombre, ci, telefono, profesion, especialidad, imagen, footer } = props;
  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{
          root: classes.cardHeader,
          avatar: classes.cardAvatar
        }}
        avatar={<img src={imagen} alt="..." className={classes.img} />}
      />
      <CardContent className={classes.textAlign}>
          <Typography component="h6" className={classes.cardSubtitle}>
            {nombre}
          </Typography>
          <Typography component="h4" className={classes.cardTitle}>
            {profesion}
          </Typography>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-6">
              <Typography component="p" className={classes.cardDescription}>
                Email: {email}
              </Typography>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6">
              <Typography component="p" className={classes.cardDescription}>
                Identificacion: {ci}
              </Typography>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6">
              <Typography component="p" className={classes.cardDescription}>
                Telefono: {telefono}
              </Typography>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-6">
              <Typography component="p" className={classes.cardDescription}>
                Alguna Cosa: alguna cosa 
              </Typography>
            </div>
          </div>
      </CardContent>
    </Card>
  );
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  description: PropTypes.node,
  footer: PropTypes.node,
  avatar: PropTypes.string
};

export default withStyles(profileCardStyle)(UserProfile);