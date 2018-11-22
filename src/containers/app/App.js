import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
/*Iconos (Inicio)*/
import { ExitToApp } from "@material-ui/icons/";
import Notificacion from "@material-ui/icons/NotificationsActive";
/*Iconos (Fin)*/

/*Imagenes(Inicio)*/
import icono from "../../icono.png";
import app from "../../base";
import { Switch, Route, NavLink } from "react-router-dom";
import appRoutes from "../../routes/app";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: "#2E4053" // color de la cabecera
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },
  "appBarShift-right": {
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    //       backgroundColor: theme.palette.background.default,
    backgroundColor: "#85C1E9", // color del fondo
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },
  "content-right": {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  },
  "contentShift-right": {
    marginRight: 0
  }
});

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} />;
    })}
  </Switch>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      anchor: "left",
      option: true,
      userAuth: false
    };

    setInterval(() => {
      this.componentWillMount();
    }, 1000);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleSignOut = () => {
    this.setState({ userAuth: false });
    localStorage.removeItem("login");
    this.props.history.push("/login");
    window.clearInterval();
    app
      .auth()
      .signOut()
      .then(() => {
        console.log("Te has desconectado correctamente");
      });
  };

  //llamado antes de que el componente carge
  componentWillMount() {
    var user = JSON.parse(localStorage.getItem("login"));
    if (user) {
      this.setState({ userAuth: true });
    } else {
      this.setState({ userAuth: false });
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;
    const { userAuth } = this.state;

    const drawer = (
      <Drawer 
        style={{ backgroundColor: "#1A5276" }} // color de menu
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div
          className={classes.drawerHeader}
          style={{ backgroundColor: "#21618C" }}
        >
          <img src={icono} style={{ width: 30 }} align="middle" alt="icono" />
          <label style={{ color: "#F4F6F7", fontSize: 20 }}></label>
          <label style={{ color: "#FFCA28", fontSize: 20 }}>SOFTWARE I</label>
          <label style={{ color: "#F4F6F7", fontSize: 20 }}></label>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>

        <div className={classes.root} style={{ backgroundColor: "#21618C" }}>  
          <List component="nav">
            {appRoutes.map((prop, key) => {
              if (prop.ignore) return null;
              return (
                <NavLink to={prop.path} activeClassName="active" key={key}>
                  <ListItem button>
                    <ListItemIcon>
                      <prop.icon style={{ color: "#b7b9bc" }} /> 
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography style={{ color: "#b7b9bc" }}>
                          {prop.sidebarName}
                        </Typography>
                      }
                    />
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
        </div>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open
            })}
          >
            {userAuth ? (
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  noWrap
                  style={{ color: "#fff", fontSize: 16, flex: 1 }}
                >
                  DIAGRAMADOR COLABORATIVO DE CLASES
                </Typography>

                <div>
                <label style={{ color: "#FFCA28", fontSize: 16 }}>Cerrar session</label>
                  <IconButton
                    aria-owns={open ? "menu-appbar" : null}
                    aria-haspopup="true"
                    onClick={this.handleSignOut}
                    color="inherit"
                  >
                    <ExitToApp />
                  </IconButton>
                </div>
              </Toolbar>
            ) : (
              ""
            )}
          </AppBar>
          {before}
          <main
            className={classNames(
              classes.content,
              classes[`content-${anchor}`],
              {
                [classes.contentShift]: open,
                [classes[`contentShift-${anchor}`]]: open
              }
            )}
          >
            <div className={classes.drawerHeader} />
            {switchRoutes}
          </main>

          {after}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
