package com.dorm.repository;

import com.dorm.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    List<Ticket> findByCreatedDate(LocalDateTime createdDate);
}
