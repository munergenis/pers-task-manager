import taskListsData from 'src/data/taskListsData'
import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import CategoryList from 'components/CategoryList/index'
import Dialog from 'components/Dialog/index'
import Input from 'components/Input/Input'
import Label from 'components/Label/Label'
import Button from 'components/Button/Button'
import { useState } from 'react'
import { nanoid } from 'nanoid'

const App = () => {
  const [allData, setAllData] = useState(taskListsData)
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    allData.length
      ? allData[0].id
      : null
  )
  const [addingNewTask, setAddingNewTask] = useState(false)
  const [newTask, setNewTask] = useState(null)

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

  function deleteCompletedTasks () {
    setAllData(prevData => prevData.map(category => ({
      ...category,
      taskList: category.taskList.filter(task => !task.completed)
    })))
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

  function closeNewTaskModal () {
    setAddingNewTask(false)
    setNewTask(null)
  }

  function addNewTask () {
    const getNewTask = () => {
      return {
        id: nanoid(),
        task: newTask,
        completed: false
      }
    }
    setAllData(prevData => prevData.map(category => (
      category.id === selectedCategoryID
        ? { ...category, taskList: [getNewTask(), ...category.taskList] }
        : category
    )))
  }

  return (
    <div className='flex min-h-screen flex-col font-inter'>
      <Layout.Header openAddTaskModal={() => setAddingNewTask(true)} />

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

      {addingNewTask &&
        <Dialog open={addingNewTask} close={closeNewTaskModal}>
          <Dialog.Header>
            <Dialog.Title>
              {selectedCategory.category}
            </Dialog.Title>
          </Dialog.Header>
          <div className='grid grid-cols-4 items-center gap-4 py-4'>
            <Label>New task</Label>
            <Input
              className='col-span-3'
              placeholder='Buy lots of ice-cream'
              onChange={setNewTask}
              value={newTask || ''}
              onEnter={() => {
                addNewTask()
                closeNewTaskModal()
              }}
            />
          </div>
          <Dialog.Footer>
            <Button
              className='border text-sm hover:bg-neutral-100'
              onClick={closeNewTaskModal}
              tabIndex={0}
            >
              Dismiss
            </Button>
            <Button
              className='bg-black text-sm text-white hover:bg-black/80'
              onClick={() => {
                addNewTask()
                closeNewTaskModal()
              }}
              tabIndex={0}
            >
              Add
            </Button>
          </Dialog.Footer>
        </Dialog>}

      <Layout.Footer deleteCompletedTasks={deleteCompletedTasks} />
    </div>
  )
}

export default App
