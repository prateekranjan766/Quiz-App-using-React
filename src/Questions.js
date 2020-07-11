const questions = [
  {
    _id: "1",
    options: [
      "Represent State Transfer",
      "Representational State Transfer",
      "Represent State Transfer",
      "None of the above",
    ],
    correct_option: "Representational State Transfer",
    question: "What REST stands for?",
  },
  {
    _id: "2",
    options: ["VERB", "URI", "HTTP Version", "Request Header"],
    correct_option: "HTTP Version",
    question:
      "Which of the following component of HTTP request is used to indicate HTTP version?",
  },
  {
    _id: "3",
    options: [
      "Addressing refers to locating a resource or multiple resources lying on the server.",
      "It is analogous to locate a postal address of a person.",
      "Both of the above.",
      "None of the above.",
    ],
    correct_option: "Both of the above.",
    question:
      "Which of the following is correct about addressing in RESTful web services?",
  },
  {
    _id: "4",
    options: ["POST", "GET", "DELETE", "OPTIONS"],
    correct_option: "Representational State Transfer",
    question:
      "Which of the following HTTP method should be used to create/update resource using RESTful web service?",
  },
  {
    _id: "5",
    options: ["400", "409", "401", "404"],
    correct_option: "404",
    question:
      "Which of the following HTTP Status code means NOT FOUND, states that method is not available?",
  },
  {
    _id: "6",
    options: ["@DELETE", "@HEAD", "@Produces", "@Consumes"],
    correct_option: "@DELETE",
    question:
      "Which of the following annotation of JAX RS API is used to annotate a method used to delete resource?",
  },
];

export function getQuestions() {
  return questions;
}
