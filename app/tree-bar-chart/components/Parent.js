import {Component} from 'react';

import {isDefined} from '../utils/utils';

export default class Parent extends Component {
  onClick() {
    const {parent, setData, setParent, onItemCollapse} = this.props;
    if (isDefined(parent.data)) {
      setData(parent.data, void 0);
    }
    const newParent = onItemCollapse(parent);
    if (isDefined(newParent)) {
      setParent(parent);
    }
  }
  render() {
    const {parent} = this.props;
    return (<div className="tbc-parent">
        {isDefined(parent) ? (
                  <span onClick={() => this.onClick()}>
                      <div className="tbc-p-collapse-button"/>
                      <span className="tbc-p-label">{parent.label}</span>
                  </span>) : null}
    </div>);
  }
}