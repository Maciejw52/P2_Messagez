import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { sendMessage } from '../../services/api/messageApi';
import './InputMessage.css';
import {
  Button,
  Form
} from "react-bootstrap"

interface InputMessageProps {
  chatId: string
}

export function InputMessage({ chatId }: InputMessageProps) {

    const { currentUser } = useAuth();
    const [value, setValue] = useState('');

    const handleSubmitMessage = (event) => {
        event.preventDefault();
        sendMessage({chatId, currentUser, value});
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
          <Button type="submit" disabled={value.length < 1} className="btn">
                Send
          </Button>
        </Form>
    );
}
