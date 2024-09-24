import styles from './ListHeader.module.css'

interface Props {
    taskCounter: number;
    checkedTasksCounter: number;
}

export function ListHeader({taskCounter, checkedTasksCounter}: Props){
    return (
        <header className={styles.container}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{taskCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>
                    {taskCounter === 0
                    ? taskCounter
                    : `${checkedTasksCounter} de ${taskCounter}`}
                </span>
            </aside>
        </header>
    );
}