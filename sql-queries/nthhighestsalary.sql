//USING LIMIT KEYWORD

5TH highest
select salary from employee order by salary desc LIMIT 4,1;


//WITHOUT USING LIMIT KEYWORD

SELECT salary from employee e1
where 4=(
  
   select count(DISTINCT(e2.salary))
   FROM employee e2;
   WHERE 
   e2.salary>=e1.salary;
);