export const data = {
  photographer: {
    data: [
      {
        id: 1,
        name: "test1"
      },
      {
        id: 2,
        name: "test2"
      },
      {
        id: 3,
        name: "test3"
      },
      {
        id: 4,
        name: "test4"
      },
      {
        id: 5,
        name: "test5"
      },
      {
        id: 6,
        name: "test6"
      }
    ],
    name: "Фотограф",
    type: "checkbox"
  },
  customer: {
    data: [
      {
        id: 1,
        name: "test1"
      },
      {
        id: 2,
        name: "test2"
      },
      {
        id: 3,
        name: "test3"
      },
      {
        id: 4,
        name: "test4"
      },
      {
        id: 5,
        name: "test5"
      },
      {
        id: 6,
        name: "test6"
      }
    ],
    name: "Заказчик",
    type: "checkbox"
  },

  media_type: {
    data: [
      {
        id: 1,
        name: "jpeg"
      },
      {
        id: 2,
        name: "png"
      },
      {
        id: 3,
        name: "mp4"
      },
      {
        id: 4,
        name: "jpg"
      }
    ],
    name: "Тип файла",
    type: "checkbox"
  }
};

export const toArray = obj =>
  Object.keys(obj).map(key => ({ [key]: obj[key] }));
