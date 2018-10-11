let functionVal;

// block
{
    const testObject = { note: `it is safe`, note2: 'it is OK' };
    functionVal = () => testObject;
}

const referFunct = functionVal();
console.log(referFunct);
referFunct.note = 'It is not SAFE!!';
console.log(referFunct);

/**
 * 関数を使うと、スコープ外から例外的にアクセスできる
 * (あとの章にて詳細があるとのこと))
 */
