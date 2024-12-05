import React from 'react';

function TaskContainer() {
    return (
        <React.Fragment>
            <div className="task">
                <h3>Comer</h3>
                <p>Se alimentar</p>
            </div>
            <div className="task">
                <h3>Trabalhar</h3>
                <p>Fazer suas obrigações no trabalho</p>
            </div>
            <div className="task">
                <h3>Dormir</h3>
                <p>Chegar em casa e descansar para um novo dia</p>
            </div>
        </React.Fragment>
    );
}
export default TaskContainer;
