package com.dorm.http.rest;

import com.dorm.dto.ReadTicketDto;
import com.dorm.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
