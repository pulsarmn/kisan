package com.dorm.mapper;

public interface Mapper<F, T> {

    T mapFrom(F object);
}
