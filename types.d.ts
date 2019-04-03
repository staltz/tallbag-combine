import {Source as S} from 'tallbag';
import {Metadata} from 'shadow-callbag';

export default function combine<T1>(s1: S<T1, Metadata>): S<[T1], Metadata>;
export default function combine<T1, T2>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
): S<[T1, T2], Metadata>;
export default function combine<T1, T2, T3>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
): S<[T1, T2, T3], Metadata>;
export default function combine<T1, T2, T3, T4>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
): S<[T1, T2, T3, T4], Metadata>;
export default function combine<T1, T2, T3, T4, T5>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
): S<[T1, T2, T3, T4, T5], Metadata>;
export default function combine<T1, T2, T3, T4, T5, T6>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
  s6: S<T6, Metadata>,
): S<[T1, T2, T3, T4, T5, T6], Metadata>;
export default function combine<T1, T2, T3, T4, T5, T6, T7>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
  s6: S<T6, Metadata>,
  s7: S<T7, Metadata>,
): S<[T1, T2, T3, T4, T5, T6, T7], Metadata>;
export default function combine<T1, T2, T3, T4, T5, T6, T7, T8>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
  s6: S<T6, Metadata>,
  s7: S<T7, Metadata>,
  s8: S<T8, Metadata>,
): S<[T1, T2, T3, T4, T5, T6, T7, T8], Metadata>;
export default function combine<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
  s6: S<T6, Metadata>,
  s7: S<T7, Metadata>,
  s8: S<T8, Metadata>,
  s9: S<T9, Metadata>,
): S<[T1, T2, T3, T4, T5, T6, T7, T8, T9], Metadata>;
export default function combine<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  s1: S<T1, Metadata>,
  s2: S<T2, Metadata>,
  s3: S<T3, Metadata>,
  s4: S<T4, Metadata>,
  s5: S<T5, Metadata>,
  s6: S<T6, Metadata>,
  s7: S<T7, Metadata>,
  s8: S<T8, Metadata>,
  s9: S<T9, Metadata>,
  s10: S<T10, Metadata>,
): S<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10], Metadata>;
