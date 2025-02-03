package com.dorm.service;

import com.dorm.dto.ReadTicketDto;
import com.dorm.mapper.ReadTicketDtoMapper;
import com.dorm.mapper.TicketMapper;
import com.dorm.repository.TicketRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@Transactional
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepository ticketRepository;
    private final ReadTicketDtoMapper readTicketDtoMapper;
    private final TicketMapper ticketMapper;

    public List<ReadTicketDto> findAll() {
        return ticketRepository.findAll().stream()
                .map(readTicketDtoMapper::mapFrom)
                .collect(Collectors.toList());
    }

    public Optional<ReadTicketDto> findById(Integer id) {
        return ticketRepository.findById(id)
                .map(readTicketDtoMapper::mapFrom);
    }
}
