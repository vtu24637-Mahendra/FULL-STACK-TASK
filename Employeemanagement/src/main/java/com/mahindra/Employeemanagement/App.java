package com.mahindra.Employeemanagement;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class App {

    public static void main(String[] args) {

        BeanFactory factory =
                new AnnotationConfigApplicationContext(AppConfig.class);

        EmployeeService service = factory.getBean(EmployeeService.class);

        service.createEmployee(1, "Mahindra", 50000);
        service.createEmployee(2, "vinnu", 60000);

        service.displayEmployees();
    }
}
