import React, { Component } from 'react';
import ProyectoItem from './ProyectoItem'
import ProyectoForm from './ProyectoForm';
import firebase from '../Firebase'


class Proyecto extends Component {

    constructor() {
        super();
        this.state = {
            proyectos: [],
            db: firebase.firestore(),
            proyectoEditar: {
                id:"",
                name:"",
                descripcion:"",
                responsable:"", 
                fechaInicio: null,
                fechaEntrega: null,
                estado:""
            },
            term : ''
        }
        const settings = { timestampsInSnapshots: true };
        this.state.db.settings(settings);
    }


    searchHandler(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentWillMount() {
        this.refresh();
    }


    refresh() {
        this.state.db.collection("proyectos").get().then((querySnapshot) => {
            var proyectos = [];
            querySnapshot.forEach(doc => {
                proyectos.push(doc.data());
                // console.log(doc.id, "=>", doc.data())
            })

            this.setState({
                proyectos: proyectos
            })
        });
    }

    handleGuardar(proyecto) {
        this.state.db.collection("proyectos").doc(proyecto.id).set(proyecto);
        this.refresh();
    }


    handleEditar(proyecto) {
        this.setState({
            proyectoEditar: proyecto
        });
    }

    searchingFor(term){
        return function(x){
            return x.name.includes(term) || !term;
        }
    }

    render() {

        var proyectoList = this.state.proyectos.filter(this.searchingFor(this.state.term)).map(
            proyecto => {
                return <ProyectoItem onClickItem={this.handleEditar.bind(this)} key={proyecto.id} proyecto={proyecto} />
            }
        );

        return (
            <div className="Proyecto">
                 <div className="SearchBar p-4">
                    <label >Filtro ...</label>
                    <input className="form-control" type="text" name="term" value={this.state.term} onChange={this.searchHandler.bind(this)} />
                </div>

                <h1>Proyectos {this.props.owner}</h1>
                <ul className="list-group">
                    {proyectoList}
                </ul>
                <br></br>
                <ProyectoForm proyecto={this.state.proyectoEditar} guardar={this.handleGuardar.bind(this)} />
            </div>
        );
    }
}

export default Proyecto;
