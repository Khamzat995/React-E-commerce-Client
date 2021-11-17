import React from "react";
import styled from "styled-components";

//styled comp
const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 10px;
  background-color: white;
`;

const TransactionNum = () => {
  // const user=useSelector(state=>state.user)
  // const [orders, setOrders] = useState([]);

  const orders = [
    {
      userId: 1,
      amount: 100,
      createdAt: Date.now(),
      address: { city: "coimbatore" },
    },
  ];

  return (
    <Container>
      <h4>Latest Transactions</h4>
      <table className="table">
        <thead>
          <tr>
            <th>UserID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr>
                <td width="1rem">{order.userId}</td>
                <td>{order.amount}$</td>
                <td>{new Date(order.createdAt).toDateString()}</td>
                <td>{order.address.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default TransactionNum;
