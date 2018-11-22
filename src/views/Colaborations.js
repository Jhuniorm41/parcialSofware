import React from 'react'
import DiagramCard from '../components/DiagramCard'
import MenuItem from '../components/MenuItem'
import app from '../base'

class Colaborations extends React.Component { 
  
    constructor(props) {
        super(props);        
        this.state = {
          collaborations: [],
          
        };
      }
      componentWillMount() {
        const currentuser = app.auth().currentUser
        console.log(currentuser.uid)
        app.database().ref('/collaborator_diagram').once('value').then((elements)=>{
            elements.forEach(element=>{
                if(element.val().collaborator==currentuser.uid){
                    this.setState({
                        collaborations:[...this.state.collaborations, element.val()]
                    })
                }
            })
        })
    }
      
    render(){
        return (          
        <div className="row">
            {this.state.collaborations.map((coll, index)=>{
                return <DiagramCard key={index} collaboration={coll} image="https://www.apollo-formation.com/wp-content/uploads/Unified_Modeling_Language-250x250.png" />
            })}
        </div>
        )
    }
}

export default Colaborations