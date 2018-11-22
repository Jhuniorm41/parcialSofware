import React from 'react'

class MenuItem extends React.Component {
    render(){
        return (
            <div id="ud_tools_div" className="border border-primary" style={{fontFamily:'Times New Roman', fontStyle:'oblique', fontSize:20}}>
                <h1 id="actionh1"><img src="img/app/vertical_flow.png"/>Acciones</h1>
                <ul id="ud_tools_ul1"  className="list-group" style={{textAlign:'left'}}></ul>
                <ul id="ud_tools_ul2" style={{textAlign:'left'}}></ul>
            </div>
            )
    }
}

export default MenuItem
