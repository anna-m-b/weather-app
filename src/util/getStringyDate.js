const getStringyDate = (unix) => {
  const dateString = new Date(unix).toLocaleString('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return dateString.replace(/,/g, '');
};

export default getStringyDate;
