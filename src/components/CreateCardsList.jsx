/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useContext, useState } from 'react';
import { getStorageCards } from '../services/localStorage';
import Card from './card';
import MyContext from '../context/MyContext';
import BtnRemoveCard from './BtnRemoveCard';
import FilterInputs from './FilterInputs';

function CreateCardsList() {
  const { providerValues: { cards, setCards } } = useContext(MyContext);
  const [filter, setFilter] = useState({
    filterByName: '',
    filterByRarity: 'Todas',
    filterByTrunfo: false,
  });

  useEffect(() => {
    if (getStorageCards() !== null) {
      setCards(getStorageCards());
    }
  }, []);

  function handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFilter({
      ...filter,
      [name]: value,
    });
  }

  function filterCards() {
    const { filterByName, filterByRarity, filterByTrunfo } = filter;
    if (filterByName !== '' && filterByRarity === 'Todas') {
      return cards.filter(({ name }) => name.includes(filterByName));
    }

    if (filterByName !== '' && filterByRarity !== 'Todas') {
      return cards.filter(({ name, rarity }) => (
        name.includes(filterByName) && rarity === filterByRarity
      ));
    }

    if (filterByRarity !== 'Todas') {
      return cards.filter(({ rarity }) => rarity === filterByRarity);
    }

    if (filterByTrunfo) {
      return cards.filter(({ cardTrunfo }) => cardTrunfo === true);
    }

    return cards;
  }

  return (
    <div className="pt-10 pb-10 w-screen  bg-gradient-to-r from-stone-600 to-stone-900">
      <div className="flex flex-col items-center gap-5 bg-Search-Back bg-cover bg-center w-96 mx-auto p-10 rounded-lg shadow-white shadow-sm">
        <FilterInputs
          name="filterByName"
          type="text"
          value={filter.filterByName}
          onChange={handleChange}
          className="border rounded bg-white w-60 py-1 px-2"
          disabled={filter.filterByTrunfo}
          placeholder="Procure pelo nome da carta"
        />
        <select
          name="filterByRarity"
          value={filter.filterByRarity}
          onChange={handleChange}
          className="border rounded w-32 py-1 bg-white px-2"
          disabled={filter.filterByTrunfo}
        >
          <option value="Todas">Todas</option>
          <option value="Normal">Normal</option>
          <option value="Raro">Raro</option>
          <option value="Muito Raro">Muito Raro</option>
        </select>
        <FilterInputs
          name="filterByTrunfo"
          type="checkbox"
          label="Super-Trunfo"
          className="ml-2"
          checked={filter.filterByTrunfo}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-20 flex-wrap md:flex-row">
        {
                filterCards().map((card) => (
                  <div key={card.name} className="pt-10 flex flex-col items-center">
                    <Card
                      name={card.name}
                      description={card.description}
                      firstAttr={card.attack}
                      secondAttr={card.defense}
                      thirdAttr={card.velocity}
                      img={card.img}
                      rarity={card.rarity}
                      cardTrunfo={card.cardTrunfo}
                    />
                    <BtnRemoveCard
                      nome={card.name}
                    />
                  </div>
                ))
              }
      </div>
    </div>
  );
}

export default CreateCardsList;
