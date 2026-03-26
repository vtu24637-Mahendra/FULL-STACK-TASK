package com.record.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.record.model.Student;
import com.record.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public List<Student> getByDepartment(String dept) {
        return repo.findByDepartment(dept);
    }

    public List<Student> getByAge(int age) {
        return repo.findByAge(age);
    }

    public List<Student> getSortedStudents() {
        return repo.findAll(Sort.by(Sort.Direction.ASC, "name"));
    }

    public List<Student> getPaginatedStudents(int page, int size) {
        return repo.findAll(PageRequest.of(page, size)).getContent();
    }
}