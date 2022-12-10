import React from "react";
import {  toast } from 'react-toastify';
class ListComponent extends React.Component {
    state = {
        updateclick: {},
    }
    handleUpdate = (event) => {
        let updatecopy = { ...this.state.updateclick }
        updatecopy.note = event.target.value;
        this.setState({
            updateclick: updatecopy
        })
    }
    handleUpdateclick = (todo) => {
        console.log('check job: ', todo)
        let updateclick = this.state.updateclick;
        let jobs = this.props.jobs;
        let checkEmpty = Object.keys(updateclick).length === 0;
        //save
        if (checkEmpty === false && updateclick.time === todo.time) {
            let jobsCopy = [...jobs];
            let objIndex = jobsCopy.findIndex((item => item.time === todo.time))
            jobsCopy[objIndex].note = updateclick.note;
            jobs = jobsCopy
            this.setState({
                updateclick: {}
            })
            toast.success('Update success !')
            return;
        }//edit
         else {
            this.setState({
                updateclick: todo
            })
        }
    }
    handleDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        let jobs = this.props.jobs;
        let updateclick = this.state.updateclick;
        let checkEmpty = Object.keys(updateclick).length === 0;
        console.log("check update: ", updateclick)
        return (
            <div>
                <div>
                    {
                        jobs.map((item, index) => {
                            return (
                                <div className="list" key={index}>
                                    <div className="text">
                                        {checkEmpty === true ?
                                            <span> {index} - {item.time} - {item.note} </span> :
                                            <>
                                                {updateclick.time === item.time ?
                                                    <span>{index} - {item.time} - &nbsp;
                                                        <input value={updateclick.note} className="update"
                                                            onChange={(event) => this.handleUpdate(event)}
                                                        />
                                                    </span> :
                                                    <span> {index} - {item.time} - {item.note} </span>
                                                }
                                            </>
                                        }
                                    </div>
                                    <button
                                        onClick={() => this.handleDelete(item)}
                                        className="btn-dele">Delete</button>
                                    <button
                                        onClick={() => this.handleUpdateclick(item)}
                                        className="btn-update">
                                        {checkEmpty === false && updateclick.time === item.time ?
                                            "Save" : "Update"}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default ListComponent