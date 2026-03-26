package com.record.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.record.model.Student;
import com.record.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/all")
    public List<Student> getAll() {
        return service.getAllStudents();
    }

    @GetMapping("/department/{dept}")
    public List<Student> getByDepartment(@PathVariable String dept) {
        return service.getByDepartment(dept);
    }

    @GetMapping("/age/{age}")
    public List<Student> getByAge(@PathVariable int age) {
        return service.getByAge(age);
    }

    @GetMapping("/sorted")
    public List<Student> getSorted() {
        return service.getSortedStudents();
    }

    @GetMapping("/page")
    public List<Student> getPaginated(
            @RequestParam int page,
            @RequestParam int size) {
        return service.getPaginatedStudents(page, size);
    }
}