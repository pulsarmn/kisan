package com.dorm.service;

import com.dorm.mapper.ReadTicketDtoMapper;
import com.dorm.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TicketService {

    private final TicketRepository ticketRepository;
    private final ReadTicketDtoMapper readTicketDtoMapper;
}
