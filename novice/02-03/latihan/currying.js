/ JavaScript substring: str.substr(start[, length])
const curriedSubstring = start => length => str => str.substr(start, length);
const getSubstring = (start, length, str) => curriedSubstring(start)(length)(str);
const getFirstCharacters = (length, str) =>
    curriedSubstring(0)(length)(str);
const getFirstCharacter = str => curriedSubstring(0)(1)(str);