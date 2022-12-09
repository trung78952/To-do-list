import React from "react";
class ListComponent extends React.Component {
    handleUpdate = (event) => {

    }
    handleDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        let job = this.props.jobs;
        return (
            <div>
                <div>
                    {
                        job.map((item, index) => {
                            return (
                                <div className="list" key={index}>
                                    <div className="text">
                                        {index} - {item.time} - {item.note}
                                    </div>
                                    <button onClick={() => this.handleDelete(item)}
                                        className="btn-dele">Delete</button>
                                    <button onClick={(event) => this.handleUpdate(event)}
                                        className="btn-update">Update</button>
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