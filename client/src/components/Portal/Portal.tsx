import { Component } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {}
interface PortalState {}

class Portal extends Component<PortalProps, PortalState> {
  state = {};

  el = document.createElement('div');

  componentDidMount() {
    document.getElementById('portal')?.appendChild(this.el);
  }

  componentWillUnmount() {
    document.getElementById('portal')?.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Portal;
