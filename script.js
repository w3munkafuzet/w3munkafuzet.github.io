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
    this.data = localStorage.getItem('data')? JSON.parse(localStorage['data']) : initialData;
  }
});
