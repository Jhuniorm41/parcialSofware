import React from 'react'
import app from '../base'
import Inactives from '../components/Inactives'
import Typography from '@material-ui/core/Typography';

class Trash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            inactives: []
        }
    }
    componentWillMount() {
        const currentuser = app.auth().currentUser
        app.database().ref(currentuser.uid+"/diagrams/").once('value').then((diagrams)=>{
            diagrams.forEach(diagram=>{
                if(diagram.val().inactive){
                    console.log(diagram.val().inactive)
                    this.setState({
                        inactives: [...this.state.inactives, diagram]
                    })
                }
            })
        })
    }
    render(){
        console.log(this.state.inactives)
        return (
            <div>
                {this.state.inactives.map((inactive, index)=>{
                    return <Inactives key={index} history={this.props.history} diagramid={inactive.key} name={inactive.val().name} date={inactive.val().date} description={inactive.val().description} image="http://backgroundcheckall.com/wp-content/uploads/2017/12/background-material-design-10.jpg" />
                })}
            </div>
        )
    }
}

export default Trash