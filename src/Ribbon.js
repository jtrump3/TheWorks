import React, { Component} from 'react';
import "./App.scss";
class Ribbon extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            toolsMenu: false,
            tutorialsMenu: false,
            projectsMenu: false,
        };
        this.toggleTools = this.toggleTools.bind(this);
        this.toggleTutorials = this.toggleTutorials.bind(this);
        this.toggleProjects = this.toggleProjects.bind(this);
    }
    render(){
        return(
            <div className="row mx-0">
                <div className="col px-0 " onMouseEnter={this.toggleTools} onMouseLeave={this.toggleTools}> 
                    <div className="btn btn-lg btn-outline-light w-100" >Tools </div>
                    <div class="list-group position-absolute w-100" hidden={!this.state.toolsMenu}>
                        <div class="list-group-item bg-dark text-info font-weight-bold h5">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-info font-weight-bold h5">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-info font-weight-bold h5">This is a primary list group item</div>

                    </div>
                </div>
                <div className="col px-0 " onMouseEnter={this.toggleTutorials} onMouseLeave={this.toggleTutorials}> 
                    <div className="btn btn-lg btn-outline-light w-100" >Tutorials </div>
                    <div class="list-group position-absolute w-100" hidden={!this.state.tutorialsMenu}>
                        <div class="list-group-item bg-dark text-danger font-weight-bold h5">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-danger font-weight-bold h5">This is a primary list group item</div>
                    </div>
                </div>
                <div className="col px-0 " onMouseEnter={this.toggleProjects} onMouseLeave={this.toggleProjects}> 
                    <div className="btn btn-lg btn-outline-light w-100" >Documentation </div>
                    <div class="list-group position-absolute w-100" hidden={!this.state.projectsMenu}>
                        <div class="list-group-item bg-dark text-success font-weight-bold h5">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-success font-weight-bold h5r">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-success font-weight-bold h5">This is a primary list group item</div>
                        <div class="list-group-item bg-dark text-success font-weight-bold h5">This is a primary list group item</div>
                    </div>
                </div>
            </div>
        );
    }
    toggleTools() {this.setState({toolsMenu: !this.state.toolsMenu});}
    toggleTutorials() {this.setState({tutorialsMenu: !this.state.tutorialsMenu});}
    toggleProjects() {this.setState({projectsMenu: !this.state.projectsMenu});}

}
export default Ribbon;
