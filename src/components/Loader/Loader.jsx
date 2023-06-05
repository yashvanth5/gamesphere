import { ColorRing } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "65vh",
        }}
      >
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#6e1d72", "#6e1d72", "#6e1d72", "#6e1d72", "#6e1d72"]}
        />
      </div>
    </>
  );
};
