package com.dorm.mapper;

import com.dorm.dto.ReadClassroomDto;
import com.dorm.entity.Classroom;
import org.springframework.stereotype.Component;

@Component
public class ClassroomMapper implements Mapper<ReadClassroomDto, Classroom> {

    @Override
    public Classroom mapFrom(ReadClassroomDto classroomDto) {
        return Classroom.builder()
                .id(classroomDto.getId())
                .number(classroomDto.getNumber())
                .build();
    }
}
