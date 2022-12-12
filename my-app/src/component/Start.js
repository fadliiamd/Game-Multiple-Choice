import React from 'react';

const Start = ({onQuizStart}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                <h1>Mulai Quiz</h1>
                <p>Semoga Sukses</p>
                    <button className="button is-success is-medium" onClick={onQuizStart}>MULAI</button>
                </div>
            </div>
        </div>
    )
}
export default Start;