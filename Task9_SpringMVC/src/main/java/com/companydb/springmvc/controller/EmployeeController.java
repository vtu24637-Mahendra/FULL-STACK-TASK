package com.companydb.springmvc.controller;

import com.companydb.springmvc.model.Employee;
import com.companydb.springmvc.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public String getEmployees(Model model) {
        List<Employee> employees = employeeRepository.findAll();
        System.out.println("Fetched employees from DB: " + employees); // debug check
        model.addAttribute("employees", employees);
        return "employee"; // Thymeleaf template
    }
}