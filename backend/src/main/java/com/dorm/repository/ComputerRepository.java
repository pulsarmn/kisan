package com.dorm.repository;

import com.dorm.entity.Computer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComputerRepository extends JpaRepository<Computer, Integer> {

    List<Computer> findByStatus(Computer.Status status);
}
