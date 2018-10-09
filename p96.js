let x = 0, y = 10, z;
z = (x++, y++);
console.log(z);

x = 0, y = 10
z = x++, y++;
console.log(z);

/**
 * カンマ演算子は優先順位が低いため、結果に差がでる
 * 上の結果はy++
 * 下の結果はx++
 */
