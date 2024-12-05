import React from 'react';
import Task from './Task';
    
function TaskContainer() {
        const tasks = [
            { id: 1, tarefas: 'Comer', Descricao: 'Se alimentar' },
            { id: 2, tarefas: 'Trabahar', Descricao: 'Fazer suas obrigações no trabalho' },
            { id: 3, tarefas: 'Dormir', Descricao: 'Chegar em casa e descansar para um novo dia' }
        ];         
    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} title={task.title} description={task.description} />
        ))}
        </div>
    );
}

export default TaskContainer;