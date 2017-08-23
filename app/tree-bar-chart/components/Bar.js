import {Component} from 'react';

import {percent, shadeBlend, isDefined, classes, isFunction} from '../utils/utils';

export default class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      hover: false
    };
  }
  componentDidMount() {
    this.setValueDelayed(this.props.value);
  }
  componentWillUnmount() {
    this.element.style.width = 0;
    this.setState({value: 0});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setValueDelayed(nextProps.value);
    }
  }
  setValueDelayed(value) {
    setTimeout(() => this.setState({value}), 300);
  }
  onMouseEnter(){
    this.setState({hover: true});
  }
  onMouseLeave(){
     this.setState({hover: false});
  }
  onExpandClick(){
    const {setData, data, value, label, items, onItemClick, onItemExpand, setParent} = this.props;
    const parent = {value, label, data};
    
    if(isDefined(items)){
      setData(items, parent);
      onItemExpand(items, parent);
    } else {
      let parent = onItemClick(this.props);
      if(isDefined(parent)){
        setParent(parent);
      }
    }
  }
  render() {
    const {label, max, barHeight, barColor, barMargin, items, hasChildren = false} = this.props;
    const {value, hover} = this.state;
    const barStyle = {
      marginTop: barMargin,
      marginBottom: barMargin
    };
    const valueStyle = {
      width: `${percent(max, value)}%`,
      opacity: value === 0 ? 0 : 1,
      height: barHeight,
      background: hover ? shadeBlend(-0.2, barColor) : barColor
    };
    const labelStyle = {
      height: barHeight
    };
    const hasItems = isDefined(items) || hasChildren;
    const className = {
      'tbc-is-hover': hover,
      'tbc-has-items': hasItems
    };

      return (
            <div className={`tbc-bar ${classes(className)}`}
                 style={barStyle}>
                <div className="tbc-b-label" 
                     style={labelStyle} 
                     title={label}>
                    <span onClick={() => this.onExpandClick()}>{label}</span>
                    {hasItems ? (<div className="tbc-expand-button" onClick={() => this.onExpandClick()} />) : null}
                </div>
                <div className="tbc-b-wrapper">
                    <div className="tbc-b-value"
                         onClick={() => this.onExpandClick()}
                         onMouseEnter={() => this.onMouseEnter()}
                         onMouseLeave={() => this.onMouseLeave()}
                         data-value={value}
                         style={valueStyle} 
                         ref={element => this.element = element} />
                </div>
            </div>
            );
  }
}
         