SELECT * from worker where MOD(WORKER_ID,2)=0;

//or

SELECT * FROM ORDERS WHERE order_id%2= 0; //even

SELECT * FROM ORDERS WHERE order_id%2!=0;  //odd

