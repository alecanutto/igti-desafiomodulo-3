import React from 'react';

import css from './button.module.css';

export default function Button(props) {

  const handleClickYear = (ev) => {
    props.onSelectYear(ev.target.id);
  }

  const handleClickMonth = (ev) => {
    props.onSelectMonth(ev.target.id);
  }

  const { id, text, type, active } = props;

  const classButton = 'waves-effect waves-light btn' + (active ? ' blue ' : '');

  return (
    <div>
      <a id={id} className={`${classButton} ${css.button}`}
        onClick={type === 'year' ? handleClickYear : handleClickMonth}>{text}</a>
    </div>
  )
}
