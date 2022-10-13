import Image from "next/image";
import { View, Block, Link } from "vcc-ui";
import { CarProps } from "../types/car";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <Block className="carcardcontainer" extend={{ marginRight: "15px" }}>
      <View className="carcardtextcontainer">
        {/* I tried using vcc components for text, but they kept breaking, I must have been doing something wrong. If possible I would like a demo of how they should be used  */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "1rem",
            display: "block",
            color: "#a3a3a3",
            marginBottom: "0.3rem",
          }}
        >
          {car.bodyType}
        </p>
        <span
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bolder",
              fontSize: "1rem",
              color: "#0a0a0a",
              display: "inline",
              margin: "0",
            }}
          >
            {car.modelName}
          </p>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "1rem",
              display: "inline",
              color: "#a3a3a3",
              margin: "0",
            }}
          >
            {car.modelType}
          </p>
        </span>
      </View>
      <View
        className="carcardimagecontainer"
        extend={{ aspectRatio: "4/3", width: "100%" }}
      >
        <Image
          width="800"
          height="600"
          src={car.imageUrl}
          alt={car.modelName}
        />
      </View>
      <View
        className="carcardbuttoncontainer"
        extend={{
          flexDirection: "row",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <Link href={`/learn/${car.id}`} arrow="right">
          LEARN
        </Link>
        <Link href={`/shop/${car.id}`} arrow="right">
          SHOP
        </Link>
      </View>
    </Block>
  );
};

export default CarCard;
