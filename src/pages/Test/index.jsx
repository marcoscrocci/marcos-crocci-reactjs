import React, { useContext, useEffect } from 'react';
import GlobalContext from '../../context/GlobalContext'
import { listRows } from '../../context/TestActions'
import { useHistory } from "react-router-dom";

export default function Test(props) {
    const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();

    useEffect(() => {
        document.title = 'Teste';
        listRows(dispatch);
    }, [dispatch]);

    return (
        <div>
            <p>Teste</p>
            <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
                <button onClick={() => history.push('/')}>Principal</button>
            </div>
            <textarea 
                type="text" 
                value={JSON.stringify(state, null, 4)}
                readOnly={true}
                style={{ marginLeft: '10px', width: '70%', height: '400px' }}
            ></textarea>
        </div>
    )
}