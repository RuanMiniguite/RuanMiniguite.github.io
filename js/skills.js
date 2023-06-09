const words = [
  { key: "C", value: 3 },
  { key: "C++", value: 3 },
  { key: "Python 3", value: 5 },
  { key: "Flutter", value: 6 },
  { key: "JAVA", value: 5 },
  { key: "Dart", value: 3 },
  { key: "Java Script", value: 5 },
  { key: "HTML 5", value: 6 },
  { key: "CSS 3", value: 6 },
  { key: "React", value: 2 },
  { key: "Spring Boot", value: 2 },
  { key: "Figma", value: 1 },
  { key: "PostgreSQL", value: 3 },
  { key: "SQLite", value: 2 },
  { key: "SQL", value: 6 },
  { key: "NoSQL", value: 5 },
  { key: "FireBase", value: 5 },
  { key: "Git", value: 8 },
  { key: "GitHub", value: 9 },
  { key: "VS Code", value: 4 },
  { key: "NetBeans", value: 3 },
  { key: "Heroku", value: 5 },
  { key: "Postman", value: 7 },
  { key: "Windows", value: 3 },
  { key: "Linux", value: 8 },
  { key: "Android", value: 2 },
  { key: "Arduino", value: 2 },
  { key: "Markdown", value: 1 },
  { key: "Word", value: 1 },
  { key: "Excel", value: 1 },
  { key: "PowerPoint", value: 1 },
  { key: "Scrum", value: 2 },
  { key: "Kanban", value: 2 },
  { key: "DevOps", value: 2 },
  { key: "Analise de requisito", value: 1 },
  { key: "Modelagem de dados", value: 1 },
  { key: "Documentação", value: 1 },
  { key: "Inglês", value: 4 },
  { key: "Espanhol", value: 1 },
  { key: "Alemão", value: 1 },
];

const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
  type: "wordCloud",
  data: {
    labels: words.map((d) => d.key),
    datasets: [
      {
        label: "Word Cloud",
        data: words.map((d) => 10 + d.value * 5)
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: ""
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});
