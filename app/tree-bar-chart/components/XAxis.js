export default function Xaxis({className = '', max, unitsCount}){
  return (
          <div className={`tbc-xaxis ${className}`}>
              {loopOverUnits(unitsCount, max, 
                (value, index) => (<div key={`${value}-${index}`}><span>{value}</span></div>))
              }
          </div>
          );
}

function loopOverUnits(to = 0, maxValue, cb) {
  let result = [];
  let start = 0;
  const unit = Math.ceil(maxValue / to);

  for (; start <= to; start += 1) {
    const currentUnitValue = Math.floor(unit * start);
    result.push(cb(currentUnitValue, start));
  }
  return result;
}

