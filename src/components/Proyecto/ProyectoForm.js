import React, { Component } from 'react';

class ProyectoForm extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        }
    }
    
    onLimpiar(e){
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        });
    }
    onGuardar(e) {
        if( this.state.id ==="" || this.state.name ==="" || this.state.descripcion ==="" || this.state.responsable ==="" || this.state.fechaInicio===""  ==="" || this.state.fechaEntrega  ==="" || this.state.estado){
            
        }else{
        var proyectos = {
            id: this.state.id,
            name: this.state.name,
            descripcion: this.state.descripcion,
            responsable: this.state.responsable,
            fechaInicio: this.state.fechaInicio,
            fechaEntrega: this.state.fechaEntrega,
            estado: this.state.estado
        }
        e.preventDefault();
        this.props.guardar(proyectos);
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        });
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            id: props.proyecto.id,
            name: props.proyecto.name,
            descripcion: props.proyecto.descripcion,
            responsable: props.proyecto.responsable,
            fechaInicio: props.proyecto.fechaInicio,
            fechaEntrega: props.proyecto.fechaEntrega,
            estado: props.proyecto.estado
        });
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="ProyectoForm col-sm-9 col-md-9 col-lg-9">
                <form onSubmit={this.onGuardar.bind(this)}>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" className="form-control" name="id" value={this.state.id} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Descripción</label>
                            <input type="text" className="form-control" name="descripcion" value={this.state.descripcion} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Responsable</label>
                            <input type="text" className="form-control" name="responsable" value={this.state.responsable} onChange={this.updateInput.bind(this)} />
                        </div>
                    </div>
                    <div className="col-sm-6">  
                        <div className="form-group">
                            <label>Estado</label>
                            <select className="form-control" name="estado" value={this.state.estado} onChange={this.updateInput.bind(this)} >
                                <option value="seleccionar">Seleccionar</option>
                                <option value="En Progreso">En progreso</option>
                                <option value="Terminado">Terminado</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Fecha inicio</label>
                            <input type="text" className="form-control" name="fechaInicio" value={this.state.fechaInicio} onChange={this.updateInput.bind(this)} />
                        </div>
                        <div className="form-group">
                            <label>Fecha entrega</label>
                            <input type="text" className="form-control" name="fechaEntrega" value={this.state.fechaEntrega} onChange={this.updateInput.bind(this)} />
                        </div>
                       
                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                    </div>
                </form>
                <form onSubmit={this.onLimpiar.bind(this)}>
                    <button className="btn btn-secundary">Limpiar</button>
                </form>
            </div>
        );
    }
}

export default ProyectoForm;