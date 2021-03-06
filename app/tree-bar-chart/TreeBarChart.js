import '../css/main.css';
import {Component} from 'react';

import XAxis from './components/XAxis';
import NoData from './components/NoData';
import OnResize from './components/OnResize';
import DataContainer from './components/DataContainer';
import Parent from './components/Parent';

import {Optional, isObject, isDefined, getMin, getMax, getUnitsCount, UNIT_WIDTH, classes} from './utils/utils';

class TreeBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...props.data],
      hasData: false,
      hideNoContent: false,
      xAxis: {
        min: getMin(props.data),
        max: getMax(props.data)
      },
      style: {},
      unitsCount: 0,
      parentData: void 0
    };
    this.updateData = this.updateData.bind(this);
    this.setParent = this.setParent.bind(this);
  }
  componentDidMount() {
    this.setComponentSize();
    this.checkDataAvailability();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.updateData(nextProps.data, this.state.parent);
    }
  }
  onResize() {
    this.setComponentSize();
  }
  updateData(data, parent) {
    this.setState({
      data: [...data],
      xAxis: {
        min: getMin(data),
        max: getMax(data)
      },
      parent
    }, () => {
      this.setComponentSize();
      this.checkDataAvailability();
    });
  }
  setComponentSize() {
    let {width, height, unitWidth, barHeight, barMargin, itemsHeightAsMinHeight} = this.props;
    const itemsHeight = this.state.data.length * (barHeight + barMargin);
    this.elementRect = this.element.getBoundingClientRect();

    width = Number(Optional(width).or(this.elementRect.width));
    height = Number(Optional(height).or(this.elementRect.height));

    const minHeight = itemsHeightAsMinHeight
            ? itemsHeight
            : (height < itemsHeight ? itemsHeight : height);

    this.setState({
      unitsCount: getUnitsCount(width, Number(unitWidth)),
      style: {
        ...this.state.styles,
        width,
        minHeight
      }
    });
  }
  checkDataAvailability() {
    const hasData = this.state.data.length > 0;
    this.setState({hideNoContent: hasData});
    if (this.state.hasData !== hasData) {
      setTimeout(() => this.setState({hasData}), 500);
    }
  }
  setParent(parent) {
    this.setState({parent});
  }
  render() {
    const {hasData, xAxis, unitsCount, style, data, parent, hideNoContent} = this.state;
    const {barHeight, barColor, barMargin, isLoading} = this.props;
    const {onItemClick, onItemExpand, onItemCollapse} = this.props;
    const styles = {
      ...this.props.style,
      ...style
    };
    const className = {
      [this.props.className || '']: true,
      'tbc-has-data': hasData,
      'tbc-hide-no-content': hideNoContent,
      'tbc-has-parent': isDefined(parent),
      'tbc-has-on-item-click': TreeBarChart.defaultProps.onItemClick !== onItemClick,
      'tbc-is-loading': isLoading
    };
    return (
            <div className={`tree-bar-chart ${classes(className)}`}
                 style={styles}
                 ref={element => this.element = element}>
                <XAxis width={styles.width} unitsCount={unitsCount} {...xAxis}/>
                <DataContainer data={data} max={xAxis.max} 
                               unitsCount={unitsCount} barHeight={barHeight}
                               barColor={barColor} barMargin={barMargin}
                               setData={this.updateData} onItemClick={onItemClick} 
                               onItemExpand={onItemExpand} setParent={this.setParent} />
                <Parent parent={parent} 
                        setData={this.updateData}
                        setParent={this.setParent}
                        onItemCollapse={onItemCollapse}/>
                <NoData />
                <div className="tbc-loader" />
            </div>
            );
  }
}
TreeBarChart.defaultProps = {
  data: [],
  className: '',
  unitWidth: UNIT_WIDTH,
  barHeight: 20,
  barMargin: 10,
  barColor: '#663399',
  isLoading: false,
  itemsHeightAsMinHeight: true,
  onItemClick: () => {
  },
  onItemExpand: () => {
  },
  onItemCollapse: () => {
  }
};

export default OnResize(TreeBarChart);