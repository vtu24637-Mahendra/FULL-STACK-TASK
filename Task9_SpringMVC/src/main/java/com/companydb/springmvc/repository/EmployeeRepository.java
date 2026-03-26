package com.companydb.springmvc.repository;

import com.companydb.springmvc.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // JpaRepository provides CRUD automatically
}