package com.record.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.record.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

    List<Student> findByDepartment(String department);

    List<Student> findByAge(int age);
}