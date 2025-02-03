package com.dorm.http.rest;

import com.dorm.dto.CreateTicketDto;
import com.dorm.dto.ReadTicketDto;
import com.dorm.dto.UpdateTicketDto;
import com.dorm.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tickets")
@RequiredArgsConstructor
public class TicketRestController {

    private final TicketService ticketService;

    @GetMapping("/{id}")
    public ResponseEntity<ReadTicketDto> getTicket(@PathVariable("id") Integer id) {
        return ticketService.findById(id)
                .map(ticket -> ResponseEntity
                        .ok()
                        .body(ticket))
                .orElse(ResponseEntity
                        .status(HttpStatus.NOT_FOUND)
                        .build());
    }

    @GetMapping
    public List<ReadTicketDto> getAllTickets() {
        return ticketService.findAll();
    }

    @PostMapping
    public ResponseEntity<ReadTicketDto> createTicket(@Validated @RequestBody CreateTicketDto createTicketDto) {
        return ticketService.create(createTicketDto)
                .map(ticketDto -> ResponseEntity
                        .status(HttpStatus.CREATED)
                        .body(ticketDto))
                .orElse(ResponseEntity
                        .status(HttpStatus.ACCEPTED)
                        .build());
    }

    @PutMapping("/{id}")
    public void updateTicket(@PathVariable("id") Integer id, @RequestBody UpdateTicketDto updateTicketDto) {
        ticketService.update(id, updateTicketDto);
    }

    @DeleteMapping("/{id}")
    public void deleteTicket(@PathVariable("id") Integer id) {
        ticketService.delete(id);
    }
}
