package com.dorm.http.rest;

import com.dorm.service.TicketService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tickets")
@RequiredArgsConstructor
public class TicketRestController {

    private final TicketService ticketService;
}
