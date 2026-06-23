function solve(n, m) {
  let result = 1;

  let down = n - 1;
  let right = m - 1;
  let total = down + right;

  for (let i = 1; i <= down; i++) {
    result = result * (total - down + i) / i;
  }

  return result;
}

let n = Number(prompt("تعداد سطرها (n):"));
let m = Number(prompt("تعداد ستون‌ها (m):"));

alert("تعداد مسیرها: " , solve(n, m));