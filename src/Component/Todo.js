import React from "react";
import './Todo.scss'
import './AddComponent'
import AddComponent from "./AddComponent";
import ListComponent from "./ListComponent";
import { toast } from 'react-toastify';
class Todo extends React.Component {
    state = {
        Jobtodo: [
            { time: '7:00', note: 'fix bugs' },
            { time: '8:00', note: 'code' },
            { time: '12:00', note: 'fix bugs,dev' }

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