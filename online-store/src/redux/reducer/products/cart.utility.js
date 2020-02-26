export const CartUtility = (oldstate, nextstate) => {
  const existingcartitems = oldstate.find(
    data => data.data._id === nextstate.data._id
  );
  console.log(existingcartitems);

  if (existingcartitems) {
    return oldstate.map(cartitems =>
      cartitems.data._id === nextstate.data._id
        ? { ...cartitems, quantity: cartitems.quantity + 1 }
        : cartitems
    );
  }
  return [...oldstate, { ...nextstate, quantity: 1 }];
};
