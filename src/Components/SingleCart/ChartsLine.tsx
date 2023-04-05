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
    <Box
      sx={{
        margin: "60px 0 0 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "800px",
        height: "500px",
        "@media only screen and (min-width: 320px) and (max-width: 767px)": {
          display: "none",
        },
        "@media only screen and (min-width: 768px)": {
          width: "600px",
          height: "600px",
        },
        "@media only screen and (min-width: 1024px)": {
          width: "800px",
          height: "600px",
        },
        "@media only screen and (min-width: 1440px)": {
          width: "1000px",
          height: "600px",
          marginLeft: "350px",
        },
      }}
    >
      <Line
        options={options}
        data={data}
        style={{ width: "500px", height: "500px" }}
      />
    </Box>
  );
};

export default ChartsLine;
