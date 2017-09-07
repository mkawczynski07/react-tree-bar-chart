import {Component} from 'react';

import TreeBarChart from './tree-bar-chart/TreeBarChart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.mockedItems = {
      noParent: [
        {
          id: 1,
          label: 'America 3',
          value: 89,
          hasChildren: true
        },
        {
          id: 2,
          label: 'America 4',
          value: 89
        },
        {
          id: 3,
          label: 'America 5',
          value: 89,
          hasChildren: true
        }
      ],
      [1]: [
        {id: 4, label: 'Poland', value: 30, parentId: 1},
        {id: 5, label: 'Spain', value: 30, parentId: 1},
        {id: 6, label: 'German', value: 20, hasChildren: true, parentId: 1}
      ],
      [3]: [
        {id: 7, label: 'Portugal', value: 15, parentId: 3},
        {id: 8, label: 'France', value: 13, parentId: 3},
        {id: 9, label: 'Russia', value: 15, parentId: 3}
      ],
      [6]: [
        {id: 10, label: 'America 7', value: 234, parentId: 6},
        {id: 11, label: 'America 8', value: 105, parentId: 6}
      ]
    };
    this.state = {
      isLoading: false,
      asyncData: [],
      data: [
        {
          label: 'Europe',
          value: 123,
          items: [
            {label: 'Poland', value: 30},
            {label: 'Spain', value: 30},
            {label: 'German', value: 20},
            {label: 'Portugal', value: 15},
            {label: 'France', value: 13},
            {label: 'Russia', value: 15}
          ]
        },
        {
          label: 'America 2',
          value: 80
        },
        {
          label: 'America 3',
          value: 89
        },
        {
          label: 'America 3',
          value: 89
        },
        {
          label: 'America 3',
          value: 89
        },
        {
          label: 'America 4',
          value: 340,
          items: [
            {label: 'Poland', value: 30},
            {label: 'Spain', value: 30},
            {label: 'German', value: 20},
            {label: 'Portugal', value: 15},
            {label: 'France', value: 13},
            {label: 'Russia', value: 15}
          ]
        },
        {
          label: 'America 5',
          value: 15
        },
        {
          label: 'America 7',
          value: 234
        },
        {
          label: 'America 8',
          value: 105
        },
        {
          label: 'America 9',
          value: 150
        }
      ],
      visibleData: this.mockedItems.noParent,
      nestedLoading: false
    };
  }
  generateRandomData() {
    this.setState({
      data: this.getRandomItems(this.state.data)
    });
  }
  getRandomItems(items) {
    return items.map(item => {
      return {
        ...item,
        value: Math.floor((Math.random() * 100) + 1),
        items: item.items ? this.getRandomItems(item.items) : void 0
      };
    });
  }
  toggleOrientation() {
    const {orientation} = this.state;
    this.setState({
      orientation: orientation === 'vertical' ? 'horizontal' : 'vertical'
    });
  }
  asyncData() {
    this.setState({isLoading: true});
    setTimeout(() => {
      this.setState({
        asyncData: this.getRandomItems(this.state.data),
        isLoading: false
      });
    }, 10000)
  }
  onNestedClick(item) {
    console.log(item);
    if (!item.hasChildren) {
      return;
    }
    this.setState({nestedLoading: true});
    setTimeout(() => this.setState({currentParent: item, nestedLoading: false, visibleData: this.mockedItems[item.id]}), 3000);
    return {
      label: item.label,
      id: item.id
    };
  }
  onItemCollapse(item) {
    console.log(item);
    this.setState({nestedLoading: true});
    setTimeout(() => this.setState({nestedLoading: false, visibleData: item.parentId ? this.mockedItems[item.parentId]: this.mockedItems.noParent}), 3000);
    return item.parentId ? {
      label: this.state.currentParent.label,
      id: this.state.currentParent.id
    } : void 0;
  }
  render() {
    const styles = {
      [2]: {
        width: 400,
        height: 200
      }
    };
    const constainerStyles = {
      padding: '0 100px'
    };
    return (
            <section>
                <article>
                    <button onClick={() => this.generateRandomData()}>Random data</button>
                    <button onClick={() => this.toggleOrientation()}>change orientation</button>
                    <button onClick={() => this.asyncData()}>load async data</button>
                </article>
                <article style={constainerStyles}>
                    <h2>more then 2 deep level</h2>
                    <TreeBarChart className="full-width" data={this.state.visibleData} 
                                  isLoading={this.state.nestedLoading}
                                  onItemClick={item => this.onNestedClick(item)}
                                  onItemExpand={(a, b) => console.log(a, b)}
                                  onItemCollapse={item => this.onItemCollapse(item)}/>
                </article>
                <article style={constainerStyles}>
                    <h2>Simple use auto width size</h2>
                    <TreeBarChart className="full-width" data={this.state.data} height="200"
                                  onItemClick={(a, b) => console.log(a, b)}
                                  onItemExpand={(a, b) => console.log(a, b)}
                                  onItemCollapse={(a, b) => console.log(a, b)}/>
                </article>
                <article>
                    <h2>Simple use with async data</h2>
                    <TreeBarChart data={this.state.asyncData} 
                                  width="400" 
                                  height="200" barHeight={30} 
                                  unitWidth="80" isLoading={this.state.isLoading}/>
                </article>
                <article>
                    <h2>Simple use with defined size</h2>
                    <TreeBarChart data={this.state.data} 
                                  width="400" 
                                  height="200" />
                </article>
                <article>
                    <h2>Width and height from styles</h2>
                    <TreeBarChart style={styles[2]} data={this.state.data} />
                </article>
            </section>
            );
  }
}