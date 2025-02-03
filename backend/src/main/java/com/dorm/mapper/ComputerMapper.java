package com.dorm.mapper;

import com.dorm.dto.ReadComputerDto;
import com.dorm.entity.Classroom;
import com.dorm.entity.Computer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ComputerMapper implements Mapper<ReadComputerDto, Computer> {

    private final ClassroomMapper classroomMapper;

    @Override
    public Computer mapFrom(ReadComputerDto computerDto) {
        return Computer.builder()
                .id(computerDto.getId())
                .classroom(getClassroom(computerDto))
                .status(computerDto.getStatus())
                .build();
    }

    private Classroom getClassroom(ReadComputerDto computerDto) {
        return classroomMapper.mapFrom(computerDto.getClassroomDto());
    }
}
