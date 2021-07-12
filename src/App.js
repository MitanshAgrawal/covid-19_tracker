import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/image.png';
import doctorwoman from "./components/doctorwoman/doctorwoman.svg";
import doctorman from "./components/doctorman/doctorman.svg"; 
import Footer from './components/Footer';

//import { Markunread } from '@material-ui/icons';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <img className={styles.doctorwoman} src={doctorwoman} alt="doctor"/>
        <img className={styles.doctorman} src={doctorman} alt="doctor"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <Footer/>
      </div>
    );
  }
}

export default App;