let app1 = new Vue({
  el: ".game1",
  data: {
    rawHtml: "",
    fish: [],
    game: false,
    counter: 0,
  },

  methods: {
    createMoreBlockDivFish: function (iteration) {
      for (i = 0; iteration > i; i++) {
        this.createOneDiv(i);
        this.main(i);
      }
    },

    createOneDiv: function (id) {
      this.fish[id] = id;
      this.fish.id = this.fish[id];
      let asd = {
        id:"",
        position: "absolute",
        width: "90px",
        height: "60px",
        letLeft: "",
        letTop: "",
        left: "",
        top: "",
      };
      this.fish[id] = this.fish.id;
      console.log(this.fish.id)
      asd.letLeft = this.randomLeft();
      asd.left = asd.letLeft + "px";
      asd.letTop = this.randomTop();
      asd.top = asd.letTop + "px";
      this.fish.splice(id, 1, asd);
      console.log(this.fish.id);
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

    movement: function (id, x, y) {
      condition = true;
      let i = 0;
      let timerId = setInterval(() => this.movementWhile(id, x, y), 5);
    },
    movementWhile: function (id, x, y) {

      this.fish[id].letTop = this.fish[id].letTop + y;
      this.fish[id].top = this.fish[id].letTop + "px";

      this.fish[id].letLeft = this.fish[id].letLeft + x;
      this.fish[id].left = this.fish[id].letLeft + "px";

      if (this.fish[id].letLeft === 0) {
        this.fish[id].letLeft = 1819;
        this.fish[id].left = this.fish[id].letLeft + "px";
      }
      if (this.fish[id].letLeft === 1820) {
        this.fish[id].letLeft = 1;
        this.fish[id].left = this.fish[id].letLeft + "px";
      }
      if (this.fish[id].letTop === 0) {
        this.fish[id].letTop = 819;
        this.fish[id].top = this.fish[id].letTop + "px";
      }
      if (this.fish[id].letTop === 820) {
        this.fish[id].letTop = 1;
        this.fish[id].top = this.fish[id].letTop + "px";
      }
    },

    main: function (id) {
      let Direction = this.randomDirection();
      console.log(id + "- id");
      let x = 0;
      let y = 0;
      if (Direction === 1) {
        //++
        x = 1;
        y = 1;
        
        this.movement(id, x, y);
      } else if (Direction === 2) {
        //+-
        x = 1;
        y = -1;
        this.movement(id, x, y);
      } else if (Direction === 3) {
        //-+
        x = -1;
        y = 1;
        this.movement(id, x, y);
      } else {
        //--
        x = -1;
        y = -1;
        this.movement(id, x, y);
      }
    },
    counterI: function(){
      this.counter += this.randomDirection();
      console.log('нажатие');
      console.log(this.fish[id])
    }
  },
});
