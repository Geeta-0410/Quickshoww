import React, { useState, useEffect } from "react";
import { dummyShowsData } from "../../assets/assets";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
import dateFormate from "../../lib/dateFormat";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-06-30T02:30:00.000Z",
          showPrice: 500,
          occupiedSeats: {
            A1: "user_1",
            B1: "user_2",
            C1: "user_3",
          },
        },
        {
          movie: dummyShowsData[1],
          showDateTime: "2025-07-01T06:00:00.000Z",
          showPrice: 400,
          // ❌ notice this one has no occupiedSeats
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Shows" />
      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">Movie Name</th>
              <th className="p-2 font-medium pl-5">Show Time</th>
              <th className="p-2 font-medium pl-5">Total Bookings</th>
              <th className="p-2 font-medium pl-5">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => {
              // ✅ fallback to empty object if occupiedSeats is missing
              const occupied = show.occupiedSeats || {};
              const totalBookings = Object.keys(occupied).length;
              const earnings = totalBookings * show.showPrice;

              return (
                <tr
                  key={index}
                  className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
                >
                  <td className="p-2 min-w-45 pl-5">{show.movie?.title}</td>
                  <td className="p-2">{dateFormate(show.showDateTime)}</td>
                  <td className="p-2">{totalBookings}</td>
                  <td className="p-2">
                    {currency} {earnings}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
