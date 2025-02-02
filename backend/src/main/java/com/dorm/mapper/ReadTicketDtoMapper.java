package com.dorm.mapper;

import com.dorm.dto.ReadTicketDto;
import com.dorm.entity.Ticket;
import org.springframework.stereotype.Component;

@Component
public class ReadTicketDtoMapper implements Mapper<Ticket, ReadTicketDto> {

    @Override
    public ReadTicketDto mapFrom(Ticket ticket) {
        return ReadTicketDto.builder()
                .id(ticket.getId())
                .message(ticket.getMessage())
                .note(ticket.getNote())
                .createdDate(ticket.getCreatedDate())
                .build();
    }
}
