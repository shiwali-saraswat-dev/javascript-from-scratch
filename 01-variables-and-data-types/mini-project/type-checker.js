function getType(value) {
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (Number.isNaN(value)) return "NaN";
  return typeof value;
}

function inspect(value) {
  return {
    value,
    type: getType(value),
    truthy: Boolean(value),
    asNumber: Number(value),
    asString: String(value),
  };
}

const samples = [42, "42", "", "abc", 0, true, null, undefined, NaN, [], {}, 10n];
console.table(samples.map(inspect));