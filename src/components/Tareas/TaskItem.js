import React, { Component } from 'react';

class TaskItem extends Component {

  handleEditar() {
    this.props.onClickItem(this.props.task);
  }

  render() {
    return (
      <li className="TaskItem list-group-item">
        <p className="taskItem"> 
            ID Proyecto: {this.props.task.idProyecto} <br></br> 
            Prioridad: {this.props.task.prioridad} <br></br> 
            Nombre:{this.props.task.name} <br></br> 
            Descripción:{this.props.task.descripcion}  <br></br> 
        </p>
        <button className="btn btn-info" onClick={this.handleEditar.bind(this)}>Editar</button>
      </li>
    );
  }
}

export default TaskItem;