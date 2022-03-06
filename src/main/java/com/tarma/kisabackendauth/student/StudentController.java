package com.tarma.kisabackendauth.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("api/students")
public class StudentController {

    private static final List<Student> STUDENTS = Arrays.asList(
            Student.builder().studentId(1).studentName("James Bond").build(),
            Student.builder().studentId(2).studentName("Joh Doe").build(),
            Student.builder().studentId(3).studentName("Marco Rossi").build());

    @GetMapping("/{studentId}")
    public Student getStudent(@PathVariable("studentId") long studentId) {
        return STUDENTS.stream().filter(s -> s.getStudentId() == studentId).findFirst()
                .orElseThrow(() -> new IllegalStateException("Student " + studentId + " does not exists"));

    }
}
