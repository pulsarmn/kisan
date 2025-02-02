package com.dorm.service;

import com.dorm.dto.ReadTicketDto;
import com.dorm.mapper.ReadTicketDtoMapper;
import com.dorm.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final ReadTicketDtoMapper readTicketDtoMapper;

    public List<ReadTicketDto> findAll() {
        return ticketRepository.findAll().stream()
                .map(readTicketDtoMapper::mapFrom)
                .collect(Collectors.toList());
    }
}
