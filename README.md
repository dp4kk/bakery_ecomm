### REACT Ecommerce Application for Bakery

#### CORE FUNCTIONALITIES
1.CART
2.PRODUCT SEARCH(Fuse.js)
3.PAYMENT(Stripe)
4.USER AUTHENTICATION(Firebase)

#### EXTRA FUNCTIONALITIES
1.Different Page for different Categories
2.UseContext and UseReducer hook for state management   


#### CART
Cart information is stored in local storage with options for the user to add,increase,decrease,remove product from the cart.

#### PRODUCT SEARCH
Search functionality by using fuse.js .Products in the main page rerenders with every input in the search field. 

#### PAYMENT
Done in backend with nodejs,express,stripe .Payment for the final total amount is routed to backend that eventually provides to the stripe account.

#### USER AUTHENTICATION
Done with Firebase Authentication.User can either login or signup and should be authenticated for checkout.  
