package com.tarma.kisabackendauth.student;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Builder
@Data
public class Student {
    private final long studentId;
    private final String studentName;
}
