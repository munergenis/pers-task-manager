import taskListsData from 'src/data/taskListsData'
import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import CategoryList from 'components/CategoryList/index'
import { useState } from 'react'

const App = () => {
  const [allData, setAllData] = useState(taskListsData)
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    allData.length
      ? allData[0].id
      : null
  )
  const selectedCategory = getSelectedCategory()
  console.log(selectedCategory)

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
    const getTaskListUpdated = (taskID, categoryTaskList) => {
      const taskListUpdated = categoryTaskList.map(task =>
        task.id === taskID
          ? { ...task, completed: !task.completed }
          : task
      )
      return taskListUpdated
    }

    setAllData(prevData => prevData.map(category => (
      category.id === categoryID
        ? {
            ...category,
            taskList: getTaskListUpdated(taskID, category.taskList)
          }
        : category
    )))
  }

  function selectCategory (categoryID) {
    setSelectedCategoryID(categoryID)
  }

  return (
    <div className='flex min-h-screen flex-col font-inter'>
      <Layout.Header />

      <div className='flex flex-1'>
        <Layout.Sidebar>
          <CategoryList>
            {allData.map(({ id, category }) => (
              <CategoryList.Item
                key={id}
                isSelected={id === selectedCategoryID}
                selectCategory={() => selectCategory(id)}
              >
                {category}
              </CategoryList.Item>
            ))}
          </CategoryList>
        </Layout.Sidebar>

        {selectedCategory
          ? (
            <TaskList selectedCategoryName={selectedCategory.category}>
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
