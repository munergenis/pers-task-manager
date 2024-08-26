import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import taskListsData from 'src/data/taskListsData'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const [allData, setAllData] = useState(taskListsData)
  const [selectedCategory, setSelectedCategory] = useState(
    allData.length
      ? allData[0]
      : null
  )

  useEffect(() => {
    setSelectedCategory(prevSelectedCategory => {
      return allData.filter(category => {
        console.log(category.id)
        console.log(prevSelectedCategory.id)
        console.log(prevSelectedCategory.id === category.id)
        return category.id === prevSelectedCategory.id
      })[0]
    })
  }, [allData])

  function getTaskListElements (selectedCategory) {
    return selectedCategory.taskList.map(
      taskItem => (
        <TaskList.Item
          key={taskItem.id}
          completed={taskItem.completed}
          deleteTask={() => deleteTask(taskItem.id, selectedCategory.id)}
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
