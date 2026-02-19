CREATE TABLE Employees (emp_id INT PRIMARY KEY AUTO_INCREMENT,name VARCHAR(100),salary DECIMAL(10,2),updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
CREATE TABLE Employee_Log (log_id INT PRIMARY KEY AUTO_INCREMENT,emp_id INT,action_type VARCHAR(20),action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
CREATE TRIGGER after_employee_insert
AFTER INSERT ON Employees
FOR EACH ROW
INSERT INTO Employee_Log(emp_id, action_type)
VALUES (NEW.emp_id, 'INSERT');
CREATE TRIGGER after_employee_update
AFTER UPDATE ON Employees
FOR EACH ROW
INSERT INTO Employee_Log(emp_id, action_type)
VALUES (NEW.emp_id, 'UPDATE');
CREATE VIEW Daily_Activity_Report AS
SELECT DATE(action_time) AS activity_date,
       action_type,
       COUNT(*) AS total_actions
FROM Employee_Log
GROUP BY DATE(action_time), action_type
ORDER BY activity_date DESC;
SELECT * FROM Daily_Activity_Report;
INSERT INTO Employees(name, salary) VALUES ('Rakesh', 50000);
UPDATE Employees SET salary = 60000 WHERE emp_id = 1;
SELECT * FROM Employee_Log;
SELECT * FROM Daily_Activity_Report;






