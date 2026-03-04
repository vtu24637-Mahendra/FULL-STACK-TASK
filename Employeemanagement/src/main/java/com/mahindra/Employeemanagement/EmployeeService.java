package com.mahindra.Employeemanagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public void createEmployee(int id, String name, double salary) {
        Employee emp = new Employee(id, name, salary);
        repository.addEmployee(emp);
    }

    public void displayEmployees() {
        List<Employee> employees = repository.getAllEmployees();
        for (Employee emp : employees) {
            System.out.println(emp);
        }
    }
}
