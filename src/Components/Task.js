import React from 'react';
import PropTypes from 'prop-types';

    function Task({ tarefas, Descricao }) {
        return (
            <div className="task">
                <h3>{tarefas}</h3>
                <p>{Descricao}</p>
            </div>
    );
}

Task.propTypes = {
    tarefas: PropTypes.string.isRequired,
    Descricao: PropTypes.string.isRequired,
};

export default Task;
