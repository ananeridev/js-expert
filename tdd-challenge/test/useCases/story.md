# Story: Renting a car

## Use Case 01

As a system user  
In order to get an available car in a specific category  
Given a car category containing 3 different cars  
When I check if there's a car available  
Then it should choose randomly a car from the category chosen  

## Use Case 02

As a system user  
In order to calculate the final renting price  
Given a customer who wants to rent a car for 5 days  
And he is 50 years old  
When he chooses a car category that costs $37.6 per day  
Then I must add the Tax of his age which is 30% to the car category price  
Then the final formula will be `((price per day * Tax) * number of days)`  
And the final result will be `((37.6 * 1.3) * 5)= 244.4`    
And the final price will be printed in Brazilian Portuguese format as "R$ 244,40"
  
## Use Case 03

As a system user  
In order to register a renting transaction  
Given a registered customer who is 50 years old  
And a car model that costs $37.6 per day  
And a delivery date that is for 05 days behind  
And given an actual date 05/11/2020  
When I rent a car I should see the customer data  
And the car selected  
And the final price  which will be R$ 244,40  
And DueDate which will be printed in Brazilian Portuguese format "10 de Novembro de 2020"  
