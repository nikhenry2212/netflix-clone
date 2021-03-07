import React from 'react';
import './MovieRow.css';
import NavigateIconBefore from '@material-ui/icons/NavigateBefore';
import NavigateIconNext from '@material-ui/icons/NavigateNext';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
        <div className="movieRow--left">
        <NavigateIconBefore style={{fontSize: 50}}/>
        </div>
        <div className="movieRow--right">
        <NavigateIconNext style={{fontSize: 50}}/>
        </div>


      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 && items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.origina_title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}