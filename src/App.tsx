import { useState } from 'react'
import { PlusCircle } from 'phosphor-react';
import { Header } from './Components/Header';
import { Input } from './Components/Input';
import { Button } from './Components/Button';
import styles from './App.module.css';
import { ListHeader } from './Components/List/ListHeader';
import { Empty } from './Components/List/Empty';
import { Item } from './Components/List/Item';

export interface ITask {
  id: number,
  text: string,
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if(!inputValue) {
      return
    }

    const newTask : ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }
  
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if(!confirm('Deseja realmente apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({id,value}: {id:number; value: boolean})
  {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isChecked: value};
      }

      return {...task}
    })

    setTasks(updatedTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader taskCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
          />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}

export default App
