import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import UserProfile from '../components/UserProfile'
import app from '../base'

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            profile: [],
            name:null,
            profesion:null,
            ci:null,
            phone:null
        }
    }
    _updateProfile(){
        const currentuser = app.auth().currentUser
        const params = {
            name: this.state.name?this.state.name:this.state.profile.name,
            profesion: this.state.profesion?this.state.profesion:this.state.profile.profesion,
            ci: this.state.ci?this.state.ci:this.state.profile.ci,
            phone: this.state.phone?this.state.phone:this.state.profile.phone,
            email: currentuser.email
        }
        app.database().ref(currentuser.uid+'/userinfo').set(params)
    }

    componentWillMount() {
        const currentuser = app.auth().currentUser
        app.database().ref('/').once('value').then(users=>{
            users.forEach(user => {
                if(currentuser.uid==user.key){
                    this.setState({profile: user.val().userinfo})
                }
            });
        })
    }
    
    render(){
        return (
            <div>
                <UserProfile
                    nombre={this.state.profile.name}
                    email={this.state.profile.email}
                    profesion={this.state.profile.profesion}
                    ci={this.state.profile.ci}
                    telefono={this.state.profile.phone}
                    imagen="https://cdn4.iconfinder.com/data/icons/eldorado-user/40/user-512.png"
                />
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Editar</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div className="row" style={{ alignItems:'center',justifyContent:'center'}}>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <TextField helperText="Nombre" fullWidth margin="normal" value={this.state.name} onChange={(event)=>{this.setState({name:event.target.value})}}/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <TextField helperText="Profesion" fullWidth margin="normal" value={this.state.profesion} onChange={(event)=>{this.setState({profesion:event.target.value})}}/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">                            
                                <TextField helperText="Identificacion" fullWidth margin="normal" value={this.state.ci} onChange={(event)=>{this.setState({ci:event.target.value})}}/>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">                            
                                <TextField helperText="Telefono" fullWidth margin="normal" value={this.state.phone} onChange={(event)=>{this.setState({phone:event.target.value})}}/>
                            </div>
                        </div>
                    </ExpansionPanelDetails>
                    <ExpansionPanelActions>
                        <Button onClick={()=>{this._updateProfile()}} size="small" color="secondary">
                            Save
                        </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            </div>
        )
    }
}

export default Profile