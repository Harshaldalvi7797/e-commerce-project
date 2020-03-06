export const CartUtility = (oldstate, nextstate) => {
  console.log(oldstate);
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

export const AddQuentityUtility = (oldstate, updatestate) => {
  console.log(oldstate, updatestate);

  const existingcartitems = oldstate.find(
    data => data.data._id === updatestate._id
  );
  if (existingcartitems) {
    return (existingcartitems.quantity += 1);
    return [...oldstate];
  }
};

export const RemoveQuentityUtility = (oldstate, removestate) => {
  console.log(oldstate, removestate);

  const existingcartitems = oldstate.find(
    data => data.data._id === removestate._id
  );
  console.log(existingcartitems);
  if (existingcartitems.quantity === 1) {
    // return (existingcartitems.quantity -= 1);
    oldstate.filter(data => data.data._id !== removestate._id);
    return [...oldstate];
  } else {
    return (existingcartitems.quantity -= 1);
    return [...oldstate];
  }
};
