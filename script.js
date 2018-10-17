var app = new Vue({
  el: '#app',
  data: {
    chosenCategory: "HTML",
    chosenLesson: null,
    data: null,
    videoUp: false,
    imageUp: false,
    images: [
      "images/vanlife1.jpg",
      "images/vanlife2.jpg",
      "images/vanlife3.jpg",
      "images/vanlife4.jpg",
      "images/vanlife5.jpg",
      "images/vanlife6.jpg",
      "images/vanlife7.jpg",
      "images/vanlife8.jpg",
      "images/vanlife9.jpg",
      "images/vanlife10.jpg",
      "images/vanlife11.jpg",
      "images/vanlife12.jpg",
      "images/vanlife13.jpeg",
      "images/vanlife14.jpeg",
      "images/vanlife15.jpg",
      "images/vanlife16.jpg",
      "images/vanlife17.jpg",
      "images/vanlife18.jpg"
    ]
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
    openVideo: function() {
      this.videoUp = true;
    },
    openImage: function() {
      this.imageUp = true;
    },
    closeVideo: function() {
      this.videoUp = false;
    },
    closeImage: function() {
      this.imageUp = false;
    },
    update: function() {
      localStorage.setItem('data', JSON.stringify(this.data));
    },
    getRandomImage() {
      var image = this.images[Math.floor(Math.random()*this.images.length)];
      return image;
    }
  },
  created() {
    this.data = localStorage.getItem('data')? JSON.parse(localStorage['data']) : initialData;
  }
});
