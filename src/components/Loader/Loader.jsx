import RingLoader from "react-spinners/RingLoader";

const styles = {
  loaderWrapper: {
    position: "relative",
  },
  loaderCenter: {
    position: "absolute",
    top: "50%",
    left: "45%",
    height: "500px",
    transform: "translate(50%, 70%)",
  },
};

const Loader = ({ loading }) => {
  return (
    <div style={styles.loaderWrapper}>
      <RingLoader
        color="#D84343"
        loading={loading}
        cssOverride={styles.loaderCenter}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
