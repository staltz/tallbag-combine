/**
 * tallbag-combine
 * ---------------
 *
 * Tallbag factory that combines the latest data points from multiple (2 or
 * more) tallbag sources. It delivers those latest values as an array. Works
 * with both pullable and listenable sources.
 *
 * `npm install tallbag-combine`
 *
 * Example:
 *
 *     const interval = require('callbag-interval');
 *     const observe = require('callbag-observe');
 *     const combine = require('tallbag-combine');
 *
 *     const source = combine(interval(100), interval(350));
 *
 *     observe(x => console.log(x))(source); // [2,0]
 *                                           // [3,0]
 *                                           // [4,0]
 *                                           // [5,0]
 *                                           // [6,0]
 *                                           // [6,1]
 *                                           // [7,1]
 *                                           // [8,1]
 *                                           // ...
 */

const makeShadow = require('shadow-callbag').default;

const EMPTY = {};

const combine = (...sources) => (start, sink) => {
  if (start !== 0) return;
  const n = sources.length;
  if (n === 0) {
    sink(0, () => {}, makeShadow('combine'));
    sink(1, []);
    sink(2);
    return;
  }
  let Ns = n; // start counter
  let Nd = n; // data counter
  let Ne = n; // end counter
  let shadow;
  const sourceTalkbacks = new Array(n);
  const sourceShadows = new Array(n);
  const vals = new Array(n);
  const talkback = (t, d) => {
    if (t === 0) return;
    for (let i = 0; i < n; i++) {
      sourceTalkbacks[i](t, d);
      t === 2 && sourceShadows[i] && sourceShadows[i](2);
    }
  };
  sources.forEach((source, i) => {
    vals[i] = EMPTY;
    source(0, (t, d, s) => {
      if (t === 0) {
        sourceTalkbacks[i] = d;
        sourceShadows[i] = s;
        if (--Ns === 0) {
          shadow = makeShadow('combine', sourceShadows);
          sink(0, talkback, shadow);
        }
      } else if (t === 1) {
        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;
        vals[i] = d;
        if (_Nd === 0) {
          const arr = new Array(n);
          for (let j = 0; j < n; ++j) arr[j] = vals[j];
          shadow(1, arr);
          sink(1, arr);
        }
      } else if (t === 2) {
        if (--Ne === 0) sink(2);
      } else {
        sink(t, d);
      }
    });
  });
};

module.exports = combine;
