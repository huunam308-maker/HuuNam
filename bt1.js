//bt1
function getGrade(score) {
  if (score < 0 || score > 100) {
    throw new Error("Điểm phải trong khoảng 0 → 100");
  }

  if (score >= 85) {
    return "A";
  } else if (score >= 70) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else {
    return "D";
  }
}

// Test
console.log(getGrade(90)); // A
console.log(getGrade(72)); // B
console.log(getGrade(55)); // C
console.log(getGrade(40)); // D

//bt2
function calculateElectricBill(kwh) {
  if (kwh < 0) {
    throw new Error("Số kWh không được âm");
  }

  if (kwh <= 50) {
    return kwh * 1500;
  } else if (kwh <= 100) {
    return 50 * 1500 + (kwh - 50) * 2000;
  } else {
    return 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
  }
}

// Test
console.log(calculateElectricBill(40));   // 60000
console.log(calculateElectricBill(75));   // 125000
console.log(calculateElectricBill(120));  // 235000
