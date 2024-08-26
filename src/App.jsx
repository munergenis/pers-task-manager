import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import taskListsData from 'src/data/taskListsData'
import { useState } from 'react'

const App = () => {
  const [allData, setAllData] = useState(taskListsData)
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    allData.length
      ? allData[0].id
      : null
  )
  const selectedCategory = getSelectedCategory()

  function getSelectedCategory () {
    return allData.find(category => category.id === selectedCategoryID)
  }

  function getTaskListElements (selectedCategory) {
    return selectedCategory.taskList.map(
      taskItem => (
        <TaskList.Item
          key={taskItem.id}
          completed={taskItem.completed}
          deleteTask={() => deleteTask(taskItem.id, selectedCategory.id)}
          toggleTaskCompleted={() => toggleTaskCompleted(taskItem.id, selectedCategory.id)}
        >
          {taskItem.task}
        </TaskList.Item>
      )
    )
  }

  function deleteTask (taskID, categoryID) {
    setAllData(prevData =>
      prevData.map(category =>
        category.id !== categoryID
          ? category
          : {
              ...category,
              taskList: category.taskList.filter(task => task.id !== taskID)
            }
      )
    )
  }

  function toggleTaskCompleted (taskID, categoryID) {
    setAllData(prevData => prevData.map(category => (
      category.id !== categoryID
        ? category
        : {
            ...category,
            taskList: category.taskList.map(task => (
              task.id !== taskID
                ? task
                : {
                    ...task,
                    completed: !task.completed
                  }
            ))
          }
    )))
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
            <div>No category available</div>
            )}
      </div>

      <Layout.Footer />
    </div>
  )
}

export default App
