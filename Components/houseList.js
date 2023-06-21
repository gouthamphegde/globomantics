const houses = [
  {
    id: 1,
    address: "123 Main St",
    price: 120000,
    country: "USA",
  },
  {
    id: 2,
    address: "127 Fam St",
    price: 220000,
    country: "Canada",
  },

  //Add three more entries like this
];

const HouseList = () => {
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses Currently Available In the Market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>country</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>{house.address}</td>
              <td>{house.country}</td>
              <td>{house.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HouseList;
