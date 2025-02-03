package com.dorm.dto;


import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import org.springframework.lang.NonNull;

@Value
@Builder
@RequiredArgsConstructor
public class CreateTicketDto {
    
    @NonNull
    String message;

    @NonNull
    @JsonAlias("computer")
    ReadComputerDto computerDto;
}
