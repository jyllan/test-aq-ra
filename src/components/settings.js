import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

class Settings extends React.Component {
    render() {
        return (
          <div>
            <h2>Settings</h2>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>
        )

    }
}

export { Settings };
