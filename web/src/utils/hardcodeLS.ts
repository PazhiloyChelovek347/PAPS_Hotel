export const setTestData = () => {
  window.localStorage.setItem(
    'tabs',
    JSON.stringify([
      {
        title: 'Numb',
        alternativeTitles: [],
        group: 'Linkin Park',
        singer: 'Chester Benington',
        level: 6,
        progress: 30,
        tags: ['TAB', 'CHORD', 'MELODY', 'FINGERSTYLE'],
        imgLink: 'https://img.discogs.com/1pk0a0y3XpLG_WV9zFlJCZc5xAQ=/fit-in/300x300/filters:strip_icc():format(webp):mode_rgb():quality(40)/discogs-images/R-1243297-1393304135-4550.jpeg.jpg',
      },
      {
        title: 'Город золотой',
        alternativeTitles: ['Под небом голубым'],
        group: 'Аквариум',
        singer: 'Борис Гребенщиков',
        level: 7,
        progress: 80,
        tags: ['TAB', 'MELODY', 'FINGERSTYLE'],
        imgLink: 'https://upload.wikimedia.org/wikipedia/ru/b/b1/Aquarium_10_Arrows.jpg',
      },
      {
        title: 'Priscilla\'s song',
        alternativeTitles: ['Песня Присциллы', 'Witcher 3 ost', 'Witcher ost'],
        group: 'Witcher 3 ost',
        singer: 'Unknown',
        level: 7,
        progress: 80,
        tags: ['TAB', 'MELODY', 'FINGERSTYLE'],
        imgLink: 'https://i.ytimg.com/vi/rZWrtw7o8yU/maxresdefault.jpg',
      },
    ]),
  );
};
