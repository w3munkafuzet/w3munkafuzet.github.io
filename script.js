var app = new Vue({
  el: '#app',
  data: {
    chosenCategory: "HTML",
    chosenLesson: null,
    data: null
  },
  methods: {
    setCategory: function(category) {
      this.chosenCategory = category;
      this.chosenLesson = null;
    },
    setLesson: function(lesson) {
      this.chosenLesson = lesson;
    },
    open: function(url) {
      window.open(url);
    },
    update: function() {
      localStorage.setItem('data', JSON.stringify(this.data));
    },
    toggleDone: function(to) {
      this.data[this.chosenCategory][this.chosenLesson].done = to;
      this.update();
    }
  },
  created() {
    this.data = initialData;
    var saved = localStorage.getItem('data');
    if (saved) {
      var parsed = JSON.parse(saved);
      var savedHtml = parsed["HTML"];
      var savedCss = parsed["CSS"];
      var savedJs = parsed["Javascript"];
      for (var i=0; i<savedHtml.length; i++) {
        this.data["HTML"][i].notes = savedHtml[i].notes;
        this.data["HTML"][i].done = savedHtml[i].done;
      }
      for (var i=0; i<savedCss.length; i++) {
        this.data["CSS"][i].notes = savedCss[i].notes;
        this.data["CSS"][i].done = savedCss[i].done;
      }
      for (var i=0; i<savedJs.length; i++) {
        this.data["Javascript"][i].notes = savedJs[i].notes;
        this.data["Javascript"][i].done = savedJs[i].done;
      }
    }
  }
});
