import {isDefined} from '../utils/utils';

export default function Parent({parent, setData, onItemCollapse}) {
  return (<div className="tbc-parent">
      {isDefined(parent) ? (
              <span onClick={() => { setData(parent.data, void 0); onItemCollapse(parent); }}>
                  <div className="tbc-p-collapse-button"/>
                  <span className="tbc-p-label">{parent.label}</span>
              </span>) : null}
  </div>);
}