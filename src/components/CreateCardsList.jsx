import React, { useEffect, useContext, useState } from 'react';
import { getStorageCards } from '../services/localStorage';
import Card from "./card";
import MyContext from '../context/MyContext';
import BtnRemoveCard from './BtnRemoveCard';
import FilterInputs from './FilterInputs';


function CreateCardsList() {
    const { providerValues: { cards, setCards } } = useContext(MyContext);
    const [filter, setFilter] = useState({
      filterByName: '',
      filterByRarity: 'Todas',
      filterByTrunfo: false,
    })

    useEffect(() => {
      if (getStorageCards() !== null) {
        setCards(getStorageCards())
      }
    }, [])

    function handleChange({ target }) {
      const { name } = target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      setFilter({
        ...filter,
        [name]: value
      })
    }

    function filterCards() {
      const { filterByName, filterByRarity, filterByTrunfo } = filter;
      if (filterByName !== '' && filterByRarity === 'Todas') {
        return cards.filter(({ name }) => name.includes(filterByName));
      }

      if (filterByName !== '' && filterByRarity !== 'Todas') {
        return cards.filter(({ name, rarity }) => (
          name.includes(filterByName) && rarity === filterByRarity
        ))
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
          <div>
            <FilterInputs 
              name="filterByName"
              type="text"
              value={ filter.filterByName }
              onChange={ handleChange }
              disabled={ filter.filterByTrunfo }
            />
            <select
              name="filterByRarity"
              value={ filter.filterByRarity }
              onChange={ handleChange }
              disabled={ filter.filterByTrunfo }
            >
              <option value="Todas">Todas</option>
              <option value="Normal">Normal</option>
              <option value="Raro">Raro</option>
              <option value="Muito Raro">Muito Raro</option>
            </select>
            <FilterInputs 
              name="filterByTrunfo"
              type="checkbox"
              checked={ filter.filterByTrunfo }
              onChange={ handleChange }
            />
            {
              filterCards().map((card, index) => (
                <div key={ index }>
                  <Card
                    name={ card.name }
                    description={ card.description }
                    firstAttr={ card.firstAttr }
                    secondAttr={ card.secondAttr }
                    thirdAttr={ card.thirdAttr }
                    img={ card.img }
                    rarity={ card.rarity }
                    cardTrunfo={ card.cardTrunfo }
                  />
                  <BtnRemoveCard
                    name={ card.name }
                  />
                </div>
              ))
            }
          </div>
    )
}

export default CreateCardsList;