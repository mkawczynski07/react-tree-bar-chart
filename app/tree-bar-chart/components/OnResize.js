import {createElement, Component} from 'react';

export default function OnResize(WrappedComponent) {
  return class OnResizeComponent extends Component {
    constructor(props) {
      super(props);
      this.onResize = this.onResize.bind(this);
    }
    componentDidMount() {
      window.addEventListener('resize', this.onResize);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
    onResize() {
      this.wrappedInstance.onResize();
    }
    render() {
      return createElement(WrappedComponent, {
        ...this.props,
        ref: instance => this.wrappedInstance = instance
      });
    }
  }
}