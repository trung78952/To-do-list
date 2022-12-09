import React from "react";
import './Todo.scss'
import './AddComponent'
import AddComponent from "./AddComponent";
import ListComponent from "./ListComponent";
import { toast } from 'react-toastify';
class Todo extends React.Component {
    state = {
        Jobtodo: [
            { time: 'monday', note: 'fix bugs' },
            { time: 'monday', note: 'code' },
            { time: 'sunday', note: 'fix bugs,dev' }

        ]
    }
    deleteJob = (job) => {

        let currentJob = this.state.Jobtodo.filter(item => item !== job)
        console.log('check delete: ', currentJob);
        this.setState({
            Jobtodo: currentJob
        })
        toast.success('Deleted')

    }
    addTodo = (job) => {
        console.log('check job', job)
        this.setState({
            Jobtodo: [job, ...this.state.Jobtodo],
        })
    }
    render() {
        return (
            <div className="full-list">
                <AddComponent
                    addTodo={this.addTodo}
                />
                <ListComponent
                    jobs={this.state.Jobtodo}
                    deleteJob={this.deleteJob}
                />
            </div>
        )
    }
}
export default Todo;