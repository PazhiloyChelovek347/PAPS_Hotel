let id = 0;
function createData(name, city, rooms, hclass, price, bookings = []) {
  id += 1;
  return {
    name,
    city,
    rooms,
    hclass,
    price,
    id,
    bookings,
  };
}

const rows = [
  createData('Grand Gachi hotel', 'Taganrog', 31, 'Lux', 300, id),
  createData('Dungeon plaza', 'Taganrog', 32, 'Lux', 300, id),
  createData('Hotel "Let\'s celebrate and..."', 'Rostov', 2, 'Default', 100, id),
];

const users = [
  {
    login: 'Admin', password: 'Admin', fio: 'Admin Adminovich Adminov', bookings: [],
  },
  {
    login: 'Test',
    password: 'Test',
    fio: 'Test Testovich Testnov',
    bookings: [
      { hotel: 1, approved: true },
      { hotel: 2, approved: false },
    ],
  },
];

export const setTestData = () => {
  window.localStorage.setItem(
    'Hotels',
    JSON.stringify(rows),
  );
  window.localStorage.setItem(
    'Users',
    JSON.stringify(users),
  );
};
