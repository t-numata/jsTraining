let f;
{
    const o = { note: `it is safe`, note2: 'it is OK' };
    f = () => o;
}
const oRef = f();
console.log(oRef);
oRef.note = 'It is not SAFE!!';
console.log(oRef);

/**
 * 関数を使うと、スコープ外から例外的にアクセスできる
 * (あとの章にて詳細があるとのこと))
 */
