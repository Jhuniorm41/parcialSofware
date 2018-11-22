import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CardDiagram from "../components/CardDiagram";
import app from "../base";
class MyDiagrams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diagrams: [],
      users: []
    };
  }

  componentWillMount() {
    var user = app.auth().currentUser;
    app.database().ref(user.uid + "/diagrams").once("value").then(diagrams => {
        diagrams.forEach(diagram => {
            if(!diagram.val().inactive){
            this.setState({
                diagrams: [...this.state.diagrams, diagram]
            });
            }
        });
    });
  }

    _userParams(diagramid){
        var user = app.auth().currentUser
        return {
            collaborator: user.uid,
            diagram: diagramid,
            owner: user.uid
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                <Button onClick={()=>{window.location.href = '/newdiagram'}} variant="raised" color="primary" aria-label="add" style={{ backgroundColor: "#3abdfc", width: "100%" }} >
                    <AddIcon />
                </Button>
                
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row" style={{paddingTop:'3em'}}>
                        {this.state.diagrams.map((diagram, index)=>{
                            return <CardDiagram key={index} history={this.props.history} collaboration={this._userParams(diagram.key)} diagramid={diagram.key} name={diagram.val().name} date={diagram.val().date} description={diagram.val().description} image="https://www.apollo-formation.com/wp-content/uploads/Unified_Modeling_Language-250x250.png" />
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MyDiagrams;
