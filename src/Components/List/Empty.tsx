import styles from './Empty.module.css';

export function Empty()
{
    return(
        <div className={styles.container}>
            <img src="src/assets/clipboard.png" alt="ícone de prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    );
}