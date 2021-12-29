package com.example.demo.controllers;

import com.example.demo.vo.ChatVO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import org.springframework.messaging.simp.SimpMessageHeaderAccessor;

@Controller
public class WebSocketController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatVO sendMessage(@Payload ChatVO chatVO) {
        return chatVO;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatVO addUser(@Payload ChatVO chatVO, SimpMessageHeaderAccessor headerAccessor) {
        headerAccessor.getSessionAttributes().put("username", chatVO.getSender());
        return chatVO;
    }

}