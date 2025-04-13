'use client';

import React, { useEffect, useState } from 'react';
import socket from '../socket'; //socket file import kiya jo backend se connect hoga

interface Message {
  sender: string;
  text: string;
}
//whatsapp me hota h n , copy kro text and pastr ko toh pata lgta h kom nhej rha kis time pe 

//yha pe bhi similar h

//ab yha , messages me humne sabhi recieved and sent message ka array banaya h, 
//new message yami jo message user kya type kr rha h

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [sender, setSender] = useState('You'); // abhi You h baad me user.name se change hoga
  //ager doctor patient me chat ho rha h toh uske hissab se , thoda kaam krna h abhi espe

  useEffect(() => {
    socket.on('receive_message', (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    //yeh part important h .. socket ka kaam h recived message ko store krna messages list me
    //aur jb component ka unmounting hoga toh listner hat jayega .

    return () => {
      socket.off('receive_message');
    };
  }, []);

  //jaise yha sender ne text message banaya , socket se send message emit hua
  //uske baad woh jo ui hoga wha show krega and fir input field clear ho jayega

  const handleSend = () => {
    const msg = { sender, text: newMessage };
    socket.emit('send_message', msg);
    setMessages((prev) => [...prev, msg]);
    setNewMessage('');
  };

  //ab yeh thoda frontend jyada nhi kiya h abhi kuch apne hissab se dekh lena

  return (
    <div className="p-4 border rounded max-w-md mx-auto mt-4">
      <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-2 bg-white rounded">
        {messages.map((msg, idx) => (     //yha pe map keyword jo h woh display kar rha msgs ko
          <div key={idx} className="mb-1">
            <strong>{msg.sender}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border flex-1 p-2 rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
