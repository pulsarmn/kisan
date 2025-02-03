package com.dorm.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

import java.time.LocalDateTime;

@Value
@Builder
@RequiredArgsConstructor
public class ReadTicketDto {

    Integer id;
    String message;
    String note;
    LocalDateTime createdDate;
}
