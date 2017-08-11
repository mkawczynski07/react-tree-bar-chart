import {Component} from 'react';

import Bar from './Bar';
import {calcXAxisMaxValue} from '../utils/utils';

export default class DataContainer extends Component {

  render() {
    const {data, max, unitsCount} = this.props;
    const maxValue = calcXAxisMaxValue(unitsCount, max);
    return (
            <div className="tbc-data-container">
                {data.map((item, index) => (<Bar key={index} {...this.props} max={maxValue} {...item} />))}
            </div>
            );
  }
}