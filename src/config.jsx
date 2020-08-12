import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "./components/Options/Options";
import LinkList from "./components/LinkList/LinkList";

const config = {
  botName: "LearningBot",
  initialMessages: [createChatBotMessage("hi, I'm here to help. What do you want to learn?", {
    widget: "Options",
  }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "Options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    }
  ],
};

export default config;
