package com.dorm.mapper;

import com.dorm.dto.ReadClassroomDto;
import com.dorm.dto.ReadComputerDto;
import com.dorm.entity.Computer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ReadComputerDtoMapper implements Mapper<Computer, ReadComputerDto> {

    private final ReadClassroomDtoMapper readClassroomDtoMapper;

    @Override
    public ReadComputerDto mapFrom(Computer computer) {
        return ReadComputerDto.builder()
                .id(computer.getId())
                .status(computer.getStatus())
                .classroomDto(getReadClassroomDto(computer))
                .build();
    }

    private ReadClassroomDto getReadClassroomDto(Computer computer) {
        return readClassroomDtoMapper.mapFrom(computer.getClassroom());
    }
}