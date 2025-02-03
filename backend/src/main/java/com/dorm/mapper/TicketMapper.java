package com.dorm.mapper;

import com.dorm.dto.CreateTicketDto;
import com.dorm.entity.Computer;
import com.dorm.entity.Ticket;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class TicketMapper implements Mapper<CreateTicketDto, Ticket> {

    private final ComputerMapper computerMapper;

    @Override
    public Ticket mapFrom(CreateTicketDto ticketDto) {
        return Ticket.builder()
                .message(ticketDto.getMessage())
                .createdDate(LocalDateTime.now())
                .note("")
                .computer(getComputer(ticketDto))
                .build();
    }

    private Computer getComputer(CreateTicketDto ticketDto) {
        return computerMapper.mapFrom(ticketDto.getComputerDto());
    }
}