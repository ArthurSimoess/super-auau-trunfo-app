/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { saveStorageDeckInfos } from '../services/localStorage';

function Instructions() {
  const [show, setShow] = useState(false);
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  function checkDeck() {
    const { deckName, creatorName } = deckConfig;
    if (deckName.length > 1 && creatorName.length > 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleChange({ target: { name, value } }) {
    setDeckConfig({
      ...deckConfig,
      [name]: value,
    });
    checkDeck();
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleClick() {
    saveStorageDeckInfos(deckConfig);
    history.push('/createGame');
    handleClose();
  }

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="bg-black px-4 py-2 rounded-lg text-white text-center font-medium disabled:bg-opacity-60 disabled:cursor-not-allowed border-2 border-headline"
      >
        Criar
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Monte seu baralho</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col items-center">
          <div>
            <label htmlFor="deckName" className="text-black font-bold">
              Digite o nome do seu baralho:
              <input
                type="text"
                name="deckName"
                className="block border rounded w-full py-1 px-2 text-neutral-900"
                value={deckConfig.deckName}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
          </div>
          <div>
            <label htmlFor="creatorName" className="text-black font-bold">
              Digite o seu nome:
              <input
                type="text"
                name="creatorName"
                className="block border rounded w-full py-1 px-2 text-neutral-900"
                value={deckConfig.creatorName}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Fechar
          </Button>
          <Button
            variant="primary"
            onClick={handleClick}
            disabled={disabled}
          >
            Criar baralho
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Instructions;
