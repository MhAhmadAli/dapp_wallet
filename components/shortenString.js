const shortenString = (str, startLength = 6, endLength = 6) => {
  const shortenedStart = str.substring(0, startLength);
  const shortenedEnd = str.substring(str.length - endLength);
  return shortenedStart + '...' + shortenedEnd;
};

export default shortenString;