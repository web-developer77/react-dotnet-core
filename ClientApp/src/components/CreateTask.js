import React from 'react'


const CreateTask = ({onChangeForm, createTask, getAllTasks }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2>Create Task</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Task Name</label>
                            <input type="text" onChange={(e) => onChangeForm(e)}  className="form-control" name="taskname" id="taskname" aria-describedby="emailHelp" placeholder="First Name" />
                        </div>
                        <br/>
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputPassword1">Task Description</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="taskdesc" id="taskdesc" placeholder="Please input Task Description" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-2">
                            <label htmlFor="exampleInputEmail1">Completed</label>
                            <input type="checkbox" onChange={(e) => onChangeForm(e)} className="form-control" name="iscompleted" id="iscompleted"/>
                        </div>
                    </div>
                    <button type="button" onClick= {(e) => {createTask(); getAllTasks()}} className="btn btn-danger">Create</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask