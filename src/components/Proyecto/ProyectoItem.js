import React, { Component } from 'react';


class ProyectoItem extends Component {

    handleEditar() {
        this.props.onClickItem(this.props.proyecto);
    }

    render() {
        return (
            <li className="ProyectoItem list-group-item">
                <p className="proyectoItem">  
                    Nombre Proyecto: {this.props.proyecto.name} <br></br> 
                     Responsable: {this.props.proyecto.responsable} <br></br> 
                     Descripción Proyecto: {this.props.proyecto.descripcion} <br></br> 
                     Estado: {this.props.proyecto.estado} <br></br> 
                     Fecha Inicio: {this.props.proyecto.fechaInicio} <br></br> 
                     Fecha Entrega: {this.props.proyecto.fechaEntrega} <br></br> 
                </p>
                <button className="btn btn-info" onClick={this.handleEditar.bind(this)}>Editar</button>
            </li>
        );
    }
}

export default ProyectoItem;