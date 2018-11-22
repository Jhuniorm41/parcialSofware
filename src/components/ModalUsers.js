import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import app from '../base';
import { CardHeader, Switch } from '@material-ui/core';
class ModalUsers extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [],
            collaborative:[]
        }
    }
    
    componentWillMount() {
        const currentuser = app.auth().currentUser
        app.database().ref('/').once('value',(users)=>{
            users.forEach((user=>{
                if(user.key!="collaborator_diagram" && user.key!="chat"){
                    if(currentuser.email!=user.val().userinfo.email){
                        this.setState({
                            users: [...this.state.users, user]
                        })
                    }
                }
            }))
        })
    }
    _addUser(userkey){
        this.state.collaborative.push(userkey)
       // console.log(this.state.collaborative)
    }
    _saveCollaborators(){
        const currentuser = app.auth().currentUser //usuario actualmente logueado
        const owner = currentuser.uid
        const diagram = this.props.diagramid
        this.state.collaborative.forEach(collaborator=>{
            app.database().ref("/collaborator_diagram").push({collaborator, diagram, owner})
        })
        this.props._handleCloseModal()
    }

    render() {
        return (
        <div>
            <Dialog
            open={this.props.openModal}
            onClose={this.props.handleClose}
            style={{width:'100%'}}
            >
            <DialogTitle id="alert-dialog-title">{"Seleccione con quien compartir.."}</DialogTitle>
            <DialogContent>
                {this.state.users.map((user, index)=>{
                   return <CardHeader key={index} title={user.val().userinfo.name} subheader={user.val().userinfo.email} action={
                       <Switch color="secondary" onChange={()=>this._addUser(user.key)}/>
                   } />
                })}
            </DialogContent>
            <DialogActions>
                <Button onClick={this.props._handleCloseModal} color="primary">
                Disagree
                </Button>
                <Button onClick={()=>this._saveCollaborators()} color="primary" autoFocus>
                Agree
                </Button>
            </DialogActions>
                
            </Dialog>
        </div>
        );
    }
}

export default ModalUsers;