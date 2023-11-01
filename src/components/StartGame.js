import React from 'react';
import Button from './ButtonModule/Button';
import Text from './Text';
import { startGameFn } from '../utils/functions';
import { useAppContext } from '../context/actions/useAppContext';
import { useNavigate } from 'react-router-dom';

const StartGame = () => {

  const { getData } = useAppContext()
  const navigate = useNavigate()

  return (
    <div className="start-game">
      <Text tag='h1' color='white'>Bienvenido al Juego de Preguntas (Quizz)</Text>
      <Text tag='p' color='white'>¿Estás listo para comenzar?</Text>
      <Button
        onClick={() => startGameFn(getData, navigate)}
        type='button'
        theme='primary'
      >
        Iniciar Juego
      </Button>
    </div>
  );
};

export default StartGame;
