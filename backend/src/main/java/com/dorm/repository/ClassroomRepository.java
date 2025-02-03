package com.dorm.repository;

import com.dorm.entity.Classroom;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClassroomRepository extends JpaRepository<Classroom, Integer> {

    Optional<Classroom> findByNumber(String number);
}
