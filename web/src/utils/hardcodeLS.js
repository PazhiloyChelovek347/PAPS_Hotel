let id = 0;
function createData(name, city, rooms, hclass, price) {
  id += 1;
  return {
    name,
    city,
    rooms,
    hclass,
    price,
    id,
  };
}

const rows = [
  createData('Grand Gachi hotel', 'Taganrog', 31, 'Lux', 300, id),
  createData('Dungeon plaza', 'Taganrog', 32, 'Lux', 300, id),
  createData('Hotel "Let\'s celebrate and..."', 'Rostov', 2, 'Default', 100, id),
];

export const setTestData = () => {
  window.localStorage.setItem(
    'Hotels',
    JSON.stringify(rows),
  );
};
