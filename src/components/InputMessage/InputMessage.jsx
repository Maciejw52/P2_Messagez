import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendMessage } from '../../services/firebase';
import './InputMessage.css';
import {
  Button,
  Form
} from "react-bootstrap"

export default function InputMessage({ groupChatId }) {

    const { user } = useAuth();
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage(groupChatId, user, value);
        setValue('');
    };

    return (
        <Form 
        onSubmit={handleSubmitMessage} 
        className="messageInputContainer">
          <Form.Control
              type="text"
              placeholder="Enter a message"
              value={value}
              onChange={handleChange}
              className="messageInput"
              required
              minLength={1}
          />
          <Button type="submit" disabled={value < 1} className="btn">
                Send
          </Button>
        </Form>
    );
}
