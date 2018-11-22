import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

import Diagram from '../components/Diagram'
import MenuItem from '../components/MenuItem'

class NewDiagram extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12" style={{alignItems:'center',textAlign:'center'}}>
                    <h3>Crear un nuevo diagrama</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <TextField id="diagram_name" label="Nombre..." margin="normal" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <TextField id="diagram_description" label="Descripcion..." margin="normal" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <TextField id="diagram_type" label="Tipo de Diagrama..." margin="normal" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <Button id="btnsavediagram" variant="raised" color="primary" aria-label="add" style={{backgroundColor: "#3abdfc", width:"100%"}}>
                                Guardar
                                <AddIcon />
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{paddingTop:'2em'}}>
                    <Diagram />
                </div>
            </div>
        )
    }
}

export default NewDiagram