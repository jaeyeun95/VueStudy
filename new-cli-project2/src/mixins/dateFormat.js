//
export const dateFormat = {
  data() {
    return {
      mixinData: "믹스인",
    };
  },
  methods: {
    getDateAndTime(date) {
      console.log("dateFomat 실행중");
      if (date !== null) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = `${date.getFullYear()}/${
          date.getMonth() + 1
        }/${date.getDate()}`;
        return `${fullDate} ${hour}:${minutes}`;
      } else {
        return null;
      }
    },
  },
};
