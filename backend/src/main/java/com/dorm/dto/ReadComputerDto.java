package com.dorm.dto;


import com.dorm.entity.Computer;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;

@Value
@Builder
@RequiredArgsConstructor
public class ReadComputerDto {

    Integer id;
    Computer.Status status;
    @JsonAlias("classroom")
    ReadClassroomDto classroomDto;
}
