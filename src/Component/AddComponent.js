import React from "react";
import {  toast } from 'react-toastify';
class AddComponent extends React.Component {
    state = {
        time: '',
        jobs: '',
    }
    handleJobs = (event) => {
        this.setState({
            jobs: event.target.value
        })
    }
    handletime = (event) => {
        this.setState({
            time: event.target.value
        })
    }
    handleAdd = () => {
        let add = this.props.addTodo
        if (!this.state.time || !this.state.jobs) {
            alert('Fill the text !')
        } else {
            add({
                time: this.state.time,
                note: this.state.jobs
            })
            toast.success('Add success')
            
        }

        this.setState({
            time: '',
            jobs: '',
        })
    }
    render() {
        return (
            <><div className="form">
                <div className="add-form">
                    <p>Must do: </p>&nbsp;
                    <input type={'text'} value={this.state.jobs}
                        onChange={(event) => this.handleJobs(event)}
                    />&nbsp;
                </div>
                <div className="add-form">
                    <p>Time to do: </p>&nbsp;
                    <input type={'text'} value={this.state.time}
                        onChange={(event) => this.handletime(event)}
                    />&nbsp;
                </div>
                <button className="btn-add" onClick={() => this.handleAdd()}>Add</button>
            </div>
            </>
        )
    }
}
export default AddComponent