import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { getStorageDeckInfos } from "../services/localStorage";

function CreateGameHeader () {
  const { providerValues: { deckConfig, setDeckConfig } } = useContext(MyContext);

  useEffect(() => {
    if (getStorageDeckInfos() !== null && deckConfig.deckName === '') {
      setDeckConfig(getStorageDeckInfos())
    }
  }, [])

  return(
    <header>
      <p>{`Nome do baralho: ${deckConfig.deckName}`}</p>
      <p>{ `Nome do criador do baralho: ${deckConfig.creatorName}` }</p>
    </header>
  )
}

export default CreateGameHeader;