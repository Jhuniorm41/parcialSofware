import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import app from '../base';
class Diagram extends Component {
  constructor(props){
    super(props)
    this.state = {
         open: false,
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div  id="umldiagram">
           <Button id="downXML" variant="outlined" color="secondary">
                Exportar XML
            </Button>
            <Button id="downImage" variant="outlined" color="secondary">
                Generar Imagen
            </Button>
            <Button onClick={this.handleClickOpen} variant="outlined" color="secondary">
                Importar XML
            </Button>

            <Dialog
          open={this.state.open}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Agregue el XML en el siguiente cuadro.."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText >
              <textarea id="xmlimport" rows="10" cols="65"></textarea>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} id="btnimportxml" color="primary">
              Importar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Diagram;
