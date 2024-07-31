select department, count(department) as depCount from worker group by department having depCount < 4;
