package com.example.EmployeesManagement;

public class Employee {

    private int id;
    private String name;
    private String department;

    public Employee(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    public void display() {
        System.out.println("ID: " + id + 
                           ", Name: " + name + 
                           ", Department: " + department);
    }
}
