import { useState } from "react";

import styles from "./signin-chat-form.module.css";

const SigninChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    nickname: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      nickname: "",
    });
  };

  const { nickname } = state;

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nickname}
        name="nickname"
        onChange={handleChange}
        placeholder="Як Вас звати?"
        required
      />
      <button>Приєднатись до чату</button>
    </form>
  );
};

export default SigninChatForm;
