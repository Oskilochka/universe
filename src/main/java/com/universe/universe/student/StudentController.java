package com.universe.universe.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudents() {
        return Arrays.asList(
                new Student(
                        1L,
                        "Name1",
                        "test@gmail.com",
                        Gender.OTHER
                ),
                new Student(
                        2L,
                        "Oleksandr",
                        "sasha@gmail.com",
                        Gender.MALE
                )
        );
    }
}
