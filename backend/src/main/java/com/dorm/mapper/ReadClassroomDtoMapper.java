package com.dorm.mapper;

import com.dorm.dto.ReadClassroomDto;
import com.dorm.entity.Classroom;
import org.springframework.stereotype.Component;

@Component
public class ReadClassroomDtoMapper implements Mapper<Classroom, ReadClassroomDto> {

    @Override
    public ReadClassroomDto mapFrom(Classroom classroom) {
        return ReadClassroomDto.builder()
                .id(classroom.getId())
                .number(classroom.getNumber())
                .build();
    }
}
