SELECT MAX(amount) from Orders
Where amount not in(SELECT MAX(amount) from Orders);