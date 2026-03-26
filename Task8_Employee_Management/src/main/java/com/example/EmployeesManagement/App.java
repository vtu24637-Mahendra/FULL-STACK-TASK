package com.example.EmployeesManagement;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String[] args) {

        BeanFactory factory =
                new AnnotationConfigApplicationContext(AppConfig.class);

        EmployeeService service =
                factory.getBean(EmployeeService.class);

        service.addEmployee(new Employee(1, "Akhil", "IT"));
        service.addEmployee(new Employee(2, "Srikar", "HR"));

        service.displayEmployees();
    }
}
