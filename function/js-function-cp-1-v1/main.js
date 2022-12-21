function checkDatatype(type) {
  if (type instanceof Array) {
    return "array";
  } else if (type == null) {
    return "null";
  } else {
    return typeof type;
  }
}

module.exports = { checkDatatype };
