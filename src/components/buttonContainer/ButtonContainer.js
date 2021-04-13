import React from 'react';
import Button from '../button/Button';

import css from './buttonContainer.module.css';

export default function ButtonContainer(props) {

  const handleSelectYear = (year) => {
    props.onSelectYear(year);
  }

  const handleSelectMonth = (month) => {
    props.onSelectMonth(month);
  }

  const years = ['2019', '2020', '2021'];

  const months = [
    'JAN',
    'FEV',
    'MAR',
    'ABR',
    'MAI',
    'JUN',
    'JUL',
    'AGO',
    'SET',
    'OUT',
    'NOV',
    'DEZ',
  ];

  const { selectedYear, selectedMonth } = props;

  return (
    <div className={css.buttonContainer}>
      <h1 style={{ padding: '0', marginTop: '10px', fontSize: '3rem' }} className="center">React - Controle de Tarefas</h1>
      <div className={css.buttonRow}>
        {years.map(year =>
          <Button key={year}
            type='year'
            id={year}
            active={year === selectedYear}
            text={year}
            onSelectYear={handleSelectYear}
          />
        )}
      </div>
      <div className={css.buttonRow}>
        {months.map((month, index) =>
          <Button key={month}
            type='month'
            text={month}
            id={(index + 1)}
            active={(index + 1).toString() === selectedMonth}
            onSelectMonth={handleSelectMonth}
          />
        )}
      </div>
    </div>
  )
}
