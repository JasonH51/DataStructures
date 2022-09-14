```
//#1 - Sort 10 schools around your house by distance:
insertion sort - fast on small sorts, easy to code, and O(1) space complex

//#2 - eBay sorts listings by the current Bid amount:
radix or counting - good for a list of numbers within a known range

//#3 - Sport scores on ESPN
if memory isn't an issue merge sort maybe the best option
if memory is an issue quick sort

//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
merge sort - because we're dealing with a large data set I should be worried about using quick sort and the chance of picking a bad starting pivot. The memory is too big already which means we'll need to use an external memory to do the sort.

//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
insertion sort - because the list is already almost sorted and we're only adding 2

//#6 - Temperature Records for the past 50 years in Canada
quick sort

//#7 - Large user name database needs to be sorted. Data is very random.
merge sort - if memory isn't an issue
quick sort - if memory is an issue and we can pick a good pivot

//#8 - You want to teach sorting for the first time
bubble sort
selection sort
insertion sort
```
