import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

import * as C from './styled';
import { useState } from 'react';

import { useContext } from 'react';
import { Context } from '../../contexts/Context';

export const Login = () => {

  const navigate = useNavigate();

  const { name, setName, isLogged, setIsLogged } = useContext(Context);
  
  // const [inputName, setInputName] = useState<string>('');
  const [alertMsg, setAlertMsg] = useState<string>('');
  
  const handleSubmit = (event: any) => {
    if (isLogged === false && name !== '') {
      setIsLogged(true);
      navigate('/tasks');
    }
    setAlertMsg('Voce precisa inserir um nome');
  }

  return (
    <C.Container>
      <C.Label>
        { isLogged && 
         <>
          <p>Voce ja esta logado como { name }</p>
          <Button onClick={ () => navigate('/tasks') }>Continuar...</Button>
        </>
        }
        { !isLogged &&
          <>
            <C.Input
              onChange={ (e) => setName(e.target.value) }
              placeholder="Digite seu nome para entrar"
              value={name}
            />
            <C.AlertMsg>{ alertMsg }</C.AlertMsg>
            <Button onClick={ handleSubmit }>Fazer Login</Button>
          </>
        }
       
      </C.Label>
    </C.Container>

  );
}