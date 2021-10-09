import StatisticalData from './statistical-data.json';
import './Statistics.css';

export default function Statistics(props) {
  //  const { id, label, percentage } = props;

  return (
    <div className="Statistics">
      {StatisticalData.title === true ? (
        <h2 className="title">{StatisticalData.title}</h2>
      ) : (
        ' '
      )}

      <ul className="stat-list">
        {StatisticalData.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// function randomColor()
// {
//    const  color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

//      return color;
// }
