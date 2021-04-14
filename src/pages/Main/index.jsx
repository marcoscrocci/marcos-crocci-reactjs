import React from 'react';
import { useHistory } from "react-router-dom";
import ChangeLanguage from '../../components/ChangeLanguage'
//import GlobalContext from '../../context/GlobalContext'


export default function Main (props) {
    //const { state, dispatch } = useContext(GlobalContext);
    const history = useHistory();
    

    return (
        <div>
            <p>Principal</p>
            <button onClick={() => history.push('/testfirebase')}>Teste Firebase</button>
            <br />
            <button onClick={() => history.push('/test')}>Teste</button>
            <br />
            <ChangeLanguage />
        </div>
    )
}