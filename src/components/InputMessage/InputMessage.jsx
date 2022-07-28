import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendMessage } from '../../services/firebase';
import './InputMessage.css';
import {
  Button,
  Form
} from "react-bootstrap"

export function InputMessage({ chatId }) {

    const { currentUser } = useAuth();
    const [value, setValue] = useState('');

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage(chatId, currentUser, value);
        setValue('');
    };

    return (
        <Form 
        onSubmit={handleSubmitMessage} 
        className="messageInputContainer">
          <Form.Control
              type="text"
              placeholder="Aa"
              value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
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
