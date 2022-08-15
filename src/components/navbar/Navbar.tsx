import React, { useCallback, useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { WeatherContext } from '../../contexts/WeatherProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const { changeLang, language, system, changeSystem } = useContext(WeatherContext);

  const handleLanguage = useCallback((props: any) => {
    changeLang(props)
  }, [changeLang]);

  const handleSystem = useCallback((props: any) => {
    changeSystem(props)
  }, [changeSystem]);

  return (
    <nav className='navbar-component'>
      <div className="icon">
        <FontAwesomeIcon icon={faCloudRain} />
      </div>

      <Link to='' >Today</Link>
      <Link to='' >Forecast</Link>

      <div className="options">
        <select defaultValue={system}>
          <option value="metric" onClick={() => handleSystem('metric')}>Metric</option>
          <option value="imperial" onClick={() => handleSystem('imperial')}>Imperial</option>
        </select>
        <select defaultValue={language}>
          <option value="" onClick={() => handleLanguage('')}> eng</option>
          <option value="nl" onClick={() => handleLanguage('nl')}> nl</option>
        </select>
      </div>
    </nav>
  )
}
