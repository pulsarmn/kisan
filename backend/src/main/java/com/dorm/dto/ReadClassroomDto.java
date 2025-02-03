package com.dorm.dto;

import lombok.Builder;
import lombok.RequiredArgsConstructor;
import lombok.Value;


@Value
@Builder
@RequiredArgsConstructor
public class ReadClassroomDto {

    Integer id;
    String number;
}
