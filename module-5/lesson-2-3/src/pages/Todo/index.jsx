import React, { useState, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const index = () => {

  const [task, setTask] = useState([
    { id: 1, title: 'lesson', deadline: '2022-12-12' }
  ])

  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')
  const [them, setThem] = useState('dark')

  const addTask = e => {
    e.preventDefault()

    const newTask = {
      id: Date.now(),
      title: title,
      deadline: deadline
    }

    if (newTask.title.length === 0 || newTask.deadline.length === 0) {
      toast.error('Please fill in the title and deadline !', {
        autoClose: 1000,
        position: 'top-right',
        theme: them
      })
    } else {
      setTask([...task, newTask])
      toast.success('Task added successfully')
    }

    setDeadline('')
    setTitle('')
  }

  const removeTask = id => {
    let filtertask = task.filter(item => item.id !== id)

    setTask(filtertask)
    toast.load('Task removed successfully', { autoClose: 1000 })
  }

 

  return (
    <>
      <ToastContainer />
      <div className='p-5 w-75 shadow m-5 rounded mx-auto'>
        <h1 className='text-success fs-4 text-center'>TASK MANAGER APP</h1>
        <hr />

        <form className='form' onSubmit={e => addTask(e)}>
          <label htmlFor='task_title' className='w-50 d-block mx-auto'>
            <p className='text-primary fw-bold text-uppercase'>
              Enter task title
            </p>
            <input
              type='text'
              id='task_title'
              className='form-control p-3 w-100'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor='task_title' className='w-50 d-block mx-auto my-5'>
            <p className='text-primary fw-bold text-uppercase'>
              Enter task title
            </p>
            <input
              type='date'
              id='task_title'
              className='form-control p-3 w-100'
              value={deadline}
              onChange={e => setDeadline(e.target.value)}
            />
          </label>

          <button
            type='submit'
            className='btn btn-success w-50 mx-auto d-block p-3'
          >
            ADD NEW TASK
          </button>
        </form>
      </div>
      <div className='shadow p-5 w-75 mx-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>DEADLINE</th>
              <th>REMOVE</th>
            </tr>
          </thead>

          <tbody>
            {task?.map((item, index) => {
              return (
                <tr>
                  <td>{index}</td> <td>{item.title}</td>{' '}
                  <td>{item.deadline}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => removeTask(item.id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default index;
