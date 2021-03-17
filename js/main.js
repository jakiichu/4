let app1 = new Vue({
  el: ".game1",
  data: {
    rawHtml: "",
    fish: [],
    game: true,
    counter: 0,
    currentTime: 10,
    timer: null,
    seen: true,
    inputName: "",
    asd: "",
  },
  watch: {
    currentTime(time) {
      if (time === 0) {
        this.stopTimer()
        this.seen = false;
        this.asd = this.inputName + " набрал " + this.counter;
      }
    }
  },
  methods: {
    createMoreBlockDivFish: function (iteration) {
      for (i = 0; iteration > i; i++) {
        this.createOneDiv(i);
        this.main(this.fish[i]);
      }
      this.startTimer()
    },

    startTimer() {
      this.timer = setInterval(() => {
        this.currentTime--
      }, 1000)
    },

    stopTimer() {
      clearTimeout(this.timer)
    },

    createOneDiv: function (id) {
      this.fish[id] = id;

      let asd = {
        id: "",
        position: "absolute",
        width: "90px",
        height: "60px",
        letLeft: "",
        letTop: "",
        left: "",
        top: "",
      };
      asd.id = id;
      asd.letLeft = this.randomLeft();
      asd.left = asd.letLeft + "px";
      asd.letTop = this.randomTop();
      asd.top = asd.letTop + "px";
      this.fish.splice(id, 1, asd);
    },

    randomLeft: function () {
      return Math.floor(Math.random() * 1820);
    },

    randomTop: function () {
      return Math.floor(Math.random() * 820);
    },

    randomDirection: function () {
      return Math.floor(Math.random() * Math.floor(4));
    },

    movement: function (item, x, y) {
      let timerId = setInterval(() => this.movementWhile(item, x, y), 10);
      item.timerId = timerId;
      console.log(item.timerId)
    },

    movementWhile: function (item, x, y) {
      item.letTop = item.letTop + y;
      item.top = item.letTop + "px";

      item.letLeft = item.letLeft + x;
      item.left = item.letLeft + "px";
      if (item.letLeft === 0) {
        item.letLeft = 1819;
        item.left = item.letLeft + "px";
      }
      if (item.letLeft === 1820) {
        item.letLeft = 1;
        item.left = item.letLeft + "px";
      }
      if (item.letTop === 0) {
        item.letTop = 819;
        item.top = item.letTop + "px";
      }
      if (item.letTop === 820) {
        item.letTop = 1;
        item.top = item.letTop + "px";
      }
    },

    main: function (item) {
      let Direction = this.randomDirection();
      let x = 0;
      let y = 0;
      if (Direction === 1) {
        //++
        x = 1;
        y = 1;
        this.movement(item, x, y);
      } else if (Direction === 2) {
        //+-
        x = 1;
        y = -1;
        this.movement(item, x, y);
      } else if (Direction === 3) {
        //-+
        x = -1;
        y = 1;
        this.movement(item, x, y);
      } else {
        //--
        x = -1;
        y = -1;
        this.movement(item, x, y);
      }
    },

    counterI: function (item) {
      this.counter += this.randomDirection();
      this.movement(item.timerId, 2, 2);
      console.log(item);
      clearInterval(item.timerId);
      this.fish.splice(this.fish.indexOf(item), 1);
    },
  },
});