import logo from "../images/defender1.jpg";

const ImageDisplay = () => {
    return (
        <div 
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}
    >
        <img src={logo} alt="My horse Defender" height={600} width={450} />
        </div>
        );
};

export default ImageDisplay;

