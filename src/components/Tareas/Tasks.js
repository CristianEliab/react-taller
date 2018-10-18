import React, { Component } from 'react';
import TaskItem from './TaskItem'
import TaskForm from './TaskForm';
import firebase from '../Firebase'


class Tasks extends Component {

    constructor() {
        super();
        this.state = {
            tasks: [],
            db: firebase.firestore(),
            taskEditar: {
                id:"",
                idProyecto:"",
                name:"",
                descripcion:"",
                prioridad:""
            }
        }

        const settings = { timestampsInSnapshots: true };
        this.state.db.settings(settings);
    }

    componentWillMount() {
        this.refresh();
    }


    refresh() {
        this.state.db.collection("tasks").get().then((querySnapshot) => {
            var tasks = [];
            querySnapshot.forEach(doc => {
                tasks.push(doc.data());
                // console.log(doc.id, "=>", doc.data())
            })

            this.setState({
                tasks: tasks
            })
        });
    }

    handleGuardar(task) {
        this.state.db.collection("tasks").doc(task.id).set(task);
        this.refresh();
    }


    handleEditar(task) {
        this.setState({
            taskEditar: task
        });
    }

    render() {

        var tasksList = this.state.tasks.map(
            task => {
                return <TaskItem onClickItem={this.handleEditar.bind(this)} key={task.id} task={task} />
            }
        );

        return (
            <div className="Tasks">
                <h1>Las Tareas del Proyecto {this.props.owner}</h1>
                <ul className="list-group">
                    {tasksList}
                </ul>
                <br></br>
                <TaskForm task={this.state.taskEditar} guardar={this.handleGuardar.bind(this)} />
            </div>
        );
    }
}

export default Tasks;
