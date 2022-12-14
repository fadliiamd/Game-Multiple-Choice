import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../utils/index';
import React from 'react';

const Question = ({ data, onAnswerUpdate, activeQuestion, numberOfQuestion, onSetActiveQuestion, onesetStep, time }) => {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const finCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(finCheckedInput) {
            finCheckedInput.checked = false;
        }
    }, [data])
    
    const changeHandler = (e) => {
        setSelected(e.target.value);
        if(error) {
            setError('')
        }
    }

    const nextClickHandler = () => {
        if (selected === '') {
            return setError('Silahkan Pilih Jawaban Terlebih Dahulu');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('')
        if (activeQuestion < numberOfQuestion - 1) {
            onSetActiveQuestion(activeQuestion+1)
        } else {
            onesetStep(3);
        }

    }


    return (
        <>
            <div style={{ display: 'table-row' }}>
                <div>
                    <h5 style={{ textAlign: 'center', marginBottom: 20, fontSize: 20 }}>{formatTime(time)}</h5>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h2 className="mb-5">{data.question}</h2>
                            <div className="control" ref={radiosWrapper}>
                                {data.choices.map((choice, key) => (
                                        
                                            <label className="radio has-background" key={key}>
                                                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                                {choice}
                                            </label>
                                ))}
                            </div>
                            <button className="button is-success is-fullwidth mt-4" onClick={nextClickHandler}>Selanjutnya</button>
                        </div>
                    </div>
                </div>        
        </div>
        </>
    )
}
export default Question;