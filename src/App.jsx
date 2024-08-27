import taskListsData from 'src/data/taskListsData'
import Layout from 'layout/index'
import TaskList from 'components/TaskList/index'
import CategoryList from 'components/CategoryList/index'
import Dialog from 'components/Dialog/index'
import Input from 'components/Input/Input'
import InputValidation from 'components/InputValidation/InputValidation'
import Label from 'components/Label/Label'
import Button from 'components/Button/Button'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import arrowImg from 'assets/arrow-img.png'

const App = () => {
  const [allData, setAllData] = useState(taskListsData)
  const [selectedCategoryID, setSelectedCategoryID] = useState(
    allData.length
      ? allData[0].id
      : null
  )
  const [addingNewTask, setAddingNewTask] = useState(false)
  const [addingNewCategory, setAddingNewCategory] = useState(false)
  const [newTask, setNewTask] = useState('')
  const [newCategory, setNewCategory] = useState('')
  const [inputValidation, setInputValidation] = useState(false)

  const selectedCategory = getSelectedCategory()

  function getSelectedCategory () {
    if (allData.length) {
      if (!selectedCategoryID) {
        setSelectedCategoryID(allData[0].id)
      } else {
        return allData.find(category => category.id === selectedCategoryID)
      }
    } else {
      return ''
    }
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

  function deleteCategory (categoryID) {
    setAllData(prevData => prevData.filter(category => category.id !== categoryID))
    if (categoryID === selectedCategoryID) {
      setSelectedCategoryID('')
    }
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
    if (inputValidation) setInputValidation(false)
    setAddingNewTask(false)
    setNewTask('')
  }

  function closeNewCategoryModal () {
    if (inputValidation) setInputValidation(false)
    setAddingNewCategory(false)
    setNewCategory('')
  }

  function addNewTask () {
    if (!newTask) {
      setInputValidation(true)
      return
    }

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

    closeNewTaskModal()
  }

  function addNewCategory () {
    if (!newCategory) {
      setInputValidation(true)
      return
    }

    const newCategoryID = nanoid()
    const getNewCategory = () => {
      return {
        id: newCategoryID,
        category: newCategory,
        taskList: []
      }
    }

    setAllData(prevData => [getNewCategory(), ...prevData])
    setSelectedCategoryID(newCategoryID)
    closeNewCategoryModal()
  }

  return (
    <div className='flex min-h-screen flex-col font-inter'>
      <Layout.Header openAddTaskModal={() => setAddingNewTask(true)} />

      <div className='flex flex-1'>
        <Layout.Sidebar openAddCategoryModal={() => setAddingNewCategory(true)}>
          <CategoryList>
            {allData.map(({ id, category }) => (
              <CategoryList.Item
                key={id}
                isSelected={id === selectedCategoryID}
                selectCategory={() => selectCategory(id)}
                deleteCategory={() => deleteCategory(id)}
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
            <div className='flex w-full flex-col items-center justify-center gap-16 p-8 font-shadows text-4xl text-neutral-400'>
              <h3>
                Your task manager is empty
              </h3>
              <div className='flex gap-2'>
                <p>...</p>
              </div>
              <button
                className='relative rounded-lg border border-neutral-300 bg-black p-4 font-inter text-base text-white'
                onClick={() => setAddingNewCategory(true)}
              >
                Add category
                <img src={arrowImg} className='absolute -left-24 -top-3 w-16 rotate-12 opacity-55' />
                <img src={arrowImg} className='absolute -right-24 top-0 w-16 rotate-[190deg] opacity-55' />
              </button>
            </div>
            )}
      </div>

      {addingNewTask &&
        <Dialog open={addingNewTask} close={closeNewTaskModal}>
          <Dialog.Header>
            <Dialog.Title>
              {selectedCategory.category}
            </Dialog.Title>
          </Dialog.Header>

          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label>New task</Label>
              <Input
                className='col-span-3'
                placeholder='Buy lots of ice-cream'
                onChange={(text) => {
                  if (inputValidation) {
                    setInputValidation(false)
                  }
                  setNewTask(text)
                }}
                value={newTask || ''}
                onEnter={addNewTask}
              />
            </div>
            {inputValidation &&
              <InputValidation>Task can not be empty</InputValidation>}
          </div>

          <Dialog.Footer>
            <Button
              className='border text-sm hover:bg-neutral-100'
              onClick={closeNewTaskModal}
            >
              Dismiss
            </Button>
            <Button
              className='bg-black text-sm text-white hover:bg-black/80'
              onClick={addNewTask}
            >
              Add
            </Button>
          </Dialog.Footer>
        </Dialog>}

      {addingNewCategory &&
        <Dialog open={addingNewCategory} close={closeNewCategoryModal}>
          <Dialog.Header>
            <Dialog.Title>Add {newCategory || 'new'} category</Dialog.Title>
          </Dialog.Header>

          <div className='flex flex-col gap-2'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label>New category</Label>
              <Input
                className='col-span-3'
                placeholder='Travel Stuff'
                onChange={(text) => {
                  if (inputValidation) {
                    setInputValidation(false)
                  }
                  setNewCategory(text)
                }}
                value={newCategory || ''}
                onEnter={addNewCategory}
              />
            </div>
            {inputValidation &&
              <InputValidation>Category can not be empty</InputValidation>}
          </div>

          <Dialog.Footer>
            <Button
              className='border text-sm hover:bg-neutral-100'
              onClick={closeNewCategoryModal}
            >
              Dismiss
            </Button>
            <Button
              className='bg-black text-sm text-white hover:bg-black/80'
              onClick={addNewCategory}
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
