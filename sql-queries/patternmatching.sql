//if first_name start with b

SELECT first_name FROM WORKER WHERE first_name like 'b%';


//if first_name ends with b

SELECT first_name FROM WORKER WHERE first_name like '%b';


//if first_name contains  b

SELECT first_name FROM WORKER WHERE first_name like '%b%';

//if first_name not contains  b

SELECT first_name FROM WORKER WHERE first_name not like '%b';