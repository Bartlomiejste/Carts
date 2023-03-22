import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartsType, ProductsType } from "../../AppContext/AppContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartsLine = () => {
  const [cart, setCart] = useState<CartsType>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetchSingleCartItem();
  }, []);

  const fetchSingleCartItem = async () => {
    const response = await fetch(`https://dummyjson.com/carts/${id}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();
    setCart(data);
    return data;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Products",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
        },
        ticks: {
          autoSkip: false,
          maxRotation: 30,
          minRotation: 30,
        },
      },
      y: {
        title: {
          display: true,
          text: "Price",
        },
      },
    },
  };

  const data = {
    labels: cart?.products.map((product: ProductsType) => product.title),
    datasets: [
      {
        label: "Price product",
        data: cart?.products.map((product: ProductsType) =>
          Math.floor(product.price)
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Discounted price",
        data: cart?.products.map((product: ProductsType) =>
          Math.floor(product.discountedPrice / product.quantity)
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Box sx={{ width: "60%", marginTop: "100px" }}>
      <Line options={options} data={data} />;
    </Box>
  );
};

export default ChartsLine;
