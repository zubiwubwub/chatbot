class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage('Hi, friend.')
    this.addMessageToState(message)
  }

  handleJavascriptList = () => {
  const message = this.createChatBotMessage(
    "Fantastic, I've got the following resources for you on Javascript:",
    {
      widget: "javascriptLinks",
    }
  );

  this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState(prevState  => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
