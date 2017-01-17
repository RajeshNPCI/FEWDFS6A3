var sum=0; //initializing sum
for(var a=1;a<=1000;a++) //intializing a value, checking the condition and post incrementing the value of a
{
	sum+=a; //adding incremented a value and sum value and assigning new value to sum
}
console.log("For loop sum = "+sum); //=> For loop sum = 500500
var sum=0; //initializing sum
b=0; //intializing b value
while(b<=1000)//checking the condition
{
	sum+=b; //adding incremented a value and sum value and assigning new value to sum
	b++;	//incrementing the value of b
}
console.log("While loop sum = "+sum); //=> While loop sum = 500500