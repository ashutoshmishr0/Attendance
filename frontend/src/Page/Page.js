import React from "react";
import "./Page.css";
const Page = () => {
  const data = [
    {
      name: "Alice Johnson",
      roll_no: 1,
      email: "alice.johnson@example.com",
      fathers_name: "Robert Johnson",
    },
    {
      name: "Bob Smith",
      roll_no: 2,
      email: "bob.smith@example.com",
      fathers_name: "William Smith",
    },
    {
      name: "Charlie Brown",
      roll_no: 3,
      email: "charlie.brown@example.com",
      fathers_name: "James Brown",
    },
    {
      name: "David Wilson",
      roll_no: 4,
      email: "david.wilson@example.com",
      fathers_name: "Richard Wilson",
    },
    {
      name: "Eva Green",
      roll_no: 5,
      email: "eva.green@example.com",
      fathers_name: "Thomas Green",
    },
    {
      name: "Franklin White",
      roll_no: 6,
      email: "franklin.white@example.com",
      fathers_name: "George White",
    },
    {
      name: "Grace Hall",
      roll_no: 7,
      email: "grace.hall@example.com",
      fathers_name: "Steven Hall",
    },
    {
      name: "Hannah Lee",
      roll_no: 8,
      email: "hannah.lee@example.com",
      fathers_name: "Kevin Lee",
    },
    {
      name: "Ian Clark",
      roll_no: 9,
      email: "ian.clark@example.com",
      fathers_name: "Matthew Clark",
    },
    {
      name: "Jack Lewis",
      roll_no: 10,
      email: "jack.lewis@example.com",
      fathers_name: "Edward Lewis",
    },
    {
      name: "Karen Walker",
      roll_no: 11,
      email: "karen.walker@example.com",
      fathers_name: "Paul Walker",
    },
    {
      name: "Liam King",
      roll_no: 12,
      email: "liam.king@example.com",
      fathers_name: "Arthur King",
    },
    {
      name: "Mia Harris",
      roll_no: 13,
      email: "mia.harris@example.com",
      fathers_name: "David Harris",
    },
    {
      name: "Noah Scott",
      roll_no: 14,
      email: "noah.scott@example.com",
      fathers_name: "Henry Scott",
    },
    {
      name: "Olivia Young",
      roll_no: 15,
      email: "olivia.young@example.com",
      fathers_name: "Anthony Young",
    },
    {
      name: "Peter Martinez",
      roll_no: 16,
      email: "peter.martinez@example.com",
      fathers_name: "Charles Martinez",
    },
    {
      name: "Quinn Robinson",
      roll_no: 17,
      email: "quinn.robinson@example.com",
      fathers_name: "Christopher Robinson",
    },
    {
      name: "Ruby Clark",
      roll_no: 18,
      email: "ruby.clark@example.com",
      fathers_name: "James Clark",
    },
    {
      name: "Samuel Rodriguez",
      roll_no: 19,
      email: "samuel.rodriguez@example.com",
      fathers_name: "Joseph Rodriguez",
    },
    {
      name: "Tina Lewis",
      roll_no: 20,
      email: "tina.lewis@example.com",
      fathers_name: "Daniel Lewis",
    },
    {
      name: "Uma Lopez",
      roll_no: 21,
      email: "uma.lopez@example.com",
      fathers_name: "John Lopez",
    },
    {
      name: "Victor Hill",
      roll_no: 22,
      email: "victor.hill@example.com",
      fathers_name: "Robert Hill",
    },
    {
      name: "Wendy Allen",
      roll_no: 23,
      email: "wendy.allen@example.com",
      fathers_name: "Michael Allen",
    },
    {
      name: "Xander Wright",
      roll_no: 24,
      email: "xander.wright@example.com",
      fathers_name: "William Wright",
    },
    {
      name: "Yara King",
      roll_no: 25,
      email: "yara.king@example.com",
      fathers_name: "Richard King",
    },
    {
      name: "Zoe Scott",
      roll_no: 26,
      email: "zoe.scott@example.com",
      fathers_name: "John Scott",
    },
  ];

  return (
    <form className="w-full">
      <table className=" border w-full ">
        <tr>
          <th>roll_no</th>
          <th>Attandance</th>
          <th>name</th>
          <th>fathers_name</th>
          <th>Email</th>
        </tr>
        {data.map((p) => (
          <tr>
            <td>{p.roll_no}</td>
            <td>
              <input
                id="vehicale"
                type="checkbox"
                name="vehicle1"
                value="Bike"
              ></input>
            </td>
            <td>{p.name}</td>
            <td>{p.fathers_name}</td>
            <td>{p.email}</td>
          </tr>
        ))}
      </table>
      <button type="submit" className="but">
        Submit
      </button>
    </form>
  );
};

export default Page;
