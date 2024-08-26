import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import taskListsData from 'src/data/taskListsData'
import { useState } from 'react'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(taskListsData.length ? taskListsData[0] : null)

  function getTaskListElements (selectedCategory) {
    return selectedCategory.taskList.map(taskItem => (
      <TaskList.Item
        key={taskItem.id}
        completed={taskItem.completed}
      >
        {taskItem.task}
      </TaskList.Item>
    ))
  }

  return (
    <div className='flex min-h-screen flex-col font-inter'>
      <Layout.Header />

      <div className='flex flex-1'>
        <Layout.Sidebar />

        {selectedCategory
          ? (
            <TaskList>
              {getTaskListElements(selectedCategory)}
            </TaskList>
            )

          : (
            <div>No data</div>
            )}
      </div>

      <Layout.Footer />
    </div>
  )
}

export default App
