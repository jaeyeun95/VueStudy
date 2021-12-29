package com.example.demo.vo;
import com.example.demo.enums.MessageType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ChatVO {

    private MessageType type;
    private String content;
    private String sender;
}
