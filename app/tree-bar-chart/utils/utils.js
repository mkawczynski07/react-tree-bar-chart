export const UNIT_WIDTH = 60;

export function isObject(object) {
  return typeof object === 'object';
}

export function isDefined(object) {
  return typeof object !== 'undefined' && object !== null;
}

export function isFunction(fn) {
  return typeof fn === 'function';
}

export function Optional(value) {
  return {
    or: orValue => {
      return isDefined(value) ? value : (isFunction(orValue) ? orValue() : orValue);
    },
    isPresent: () => isDefined(value),
    get: () => value
  };
}

export function getMin(data = []) {
  return Math.min(...data.map(item => item.value));
}

export function getMax(data) {
  return Math.max(...data.map(item => item.value));
}

export function getUnitsCount(width, unitWidth = UNIT_WIDTH) {
  return Math.ceil(width / unitWidth) + 1;
}

export function percent(max, value) {
  return value * 100 / max;
}

export function calcXAxisMaxValue(unitsCount, max) {
  const unit = Math.ceil(max / unitsCount);
  return Math.floor(unit * unitsCount);
}

/*
 * https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
 */
export function shadeBlend(p, c0, c1) {
  var n = p < 0 ? p * -1 : p, u = Math.round, w = parseInt;
  if (c0.length > 7) {
    var f = c0.split(","), t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","), R = w(f[0].slice(4)), G = w(f[1]), B = w(f[2]);
    return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")";
  } else {
    var f = w(c0.slice(1), 16), t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF;
    return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1);
  }
}

export function classes(obj = {}){
  return Object.keys(obj)
          .filter(className => obj[className])
          .join(' ');
}