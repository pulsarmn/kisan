package com.dorm.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.lang.NonNull;

@Value
@Builder
@RequiredArgsConstructor
public class UpdateTicketDto {

    @NonNull
    String message;

    @NonNull
    String note;
}
