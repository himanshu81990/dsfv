//alias

SELECT first_name as Worker_name from worker;

//upper case
SELECT UPPER(first_name) form worker;

//distinct values of department

SELECT DISTINCT item from Orders;

//first 3 character of first_name

select substring(first_name, 1, 3) from worker;

//Concat two columns

SELECT CONCACT(first_name,' ',last_name) as Full_name from worker;


//Orderby

SELECT salary from employee Orderby salary DESC;

SELECT salary from employee Orderby salary;