const newApp = {
  data() {
    return {
      todos: [],
      newTodo: { active: false },
    };
  },
  methods: {
    add: function () {
      if (this.newTodo.task) {
        this.todos.push(this.newTodo);
        this.newTodo = { active: false };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("Please enter a task before adding it...");
      }
    },

    clearAll: function () {
      this.todos = [];
    },
  },
  created() {
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
    console.log(
      window.showOpenFilePicker(
        "C:UsersBhavik PCDesktopP\vue.jsProject 3 - Todo List - InitialStyleSheet.css"
      )
    );
  },
  updated() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  },
};

Vue.createApp(newApp).mount("#app");
